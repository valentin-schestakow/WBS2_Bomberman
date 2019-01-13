import * as express from 'express';
import * as passport from 'passport';
import * as session from 'express-session';
import * as pFacebook from 'passport-facebook';
import * as pGoogle from "passport-google-oauth20";
import {Profile} from "passport";
import * as fs from 'fs';
import * as https from 'https';
import {Request, Response}      from "express";
import {
    Collection,
    Db,
    DeleteWriteOpResultObject,
    InsertOneWriteOpResult,
    MongoClient,
    MongoError,
    UpdateWriteOpResult,
} from 'mongodb';
import {ObjectID} from 'bson';
import * as cryptoJS   from "crypto-js";
import bodyParser = require("body-parser");
import * as gameServer from '../server/gameServer';



/*****************************************************************************
 ***  setup database and its structure                                       *
 *****************************************************************************/
let bombermanDB: Db;
let playerlistCollection: Collection;
let userlistCollection: Collection;
//---- connect to database ----------------------------------------------------
MongoClient.connect("mongodb://localhost:27017",{ useNewUrlParser: true })
    .then((dbClient: MongoClient) => {
        bombermanDB = dbClient.db("bomberman");
        playerlistCollection = bombermanDB.collection("player");
        userlistCollection = bombermanDB.collection("user");
        return playerlistCollection.findOne({email: "test@test.de"})
    })
    .then<void>((res) => {
        if (!res) {
            playerlistCollection.insertOne({email: "test@test.de" , password: cryptoJS.MD5("test").toString(), username: "test"});
        }
        console.log("Database is connected ...\n");
    }).catch((err : MongoError) => {
    console.error("Error connecting to database ...\n" + err);
});

class Player {
    _id      : number;
    //time     : string; // time-time format defined[RFC 3339] e.g. 2017-12-31T23:59:6
    email: string;
    password: string;
    username : string;
    gamestats: GameStats;

    constructor(id:number, time:string, username:string, email:string, password:string, stats: GameStats) {
        this._id       = id;
        //this.time     = time;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gamestats = null;
    }
}
class User {
    _id: number;
    email: string;
    password: string;
    role: string;

    constructor(id: number, email: string, password: string, role: string){
        this.email = email;
        this._id = id;
        this.password = password;
        this.role = role;
    }
}
class GameStats {
    gameCount: number;
    points: number;
    kills: number;
    deaths: number;

    constructor(gameCount:number, points:number, kills:number, deaths:number){
        this.gameCount = gameCount;
        this.points = points;
        this.kills = kills;
        this.deaths = deaths;
    }

}

/*****************************************************************************
 *** Create servers with handler function and start it
 *
 *****************************************************************************/
let router = express();
let privateKey = fs.readFileSync(__dirname + '/sslcert/server.key', 'utf8');
let certificate = fs.readFileSync(__dirname + '/sslcert/server.crt', 'utf8');
let credentials = {key: privateKey, cert: certificate};
// instead of: router.listen(8080);
let server = https.createServer(credentials, router).listen(8443);
console.log("-------------------------------------------------------------\n"
    + "Aufruf: https://localhost:8443\n" +
    "-------------------------------------------------------------\n");


/*****************************************************************************
 ***  set up webSocket                                                       *
 *****************************************************************************/

gameServer.run(server);



router.use(passport.initialize());
//initalisiert das passport module und ermöglicht dadurch den login in der session zu speichern
router.use(passport.session()); // persistent login sessions


// used to serialize the user for the session
// cokkie erstellen
// serialisiert das user profille um es in der session zu speichern
passport.serializeUser(function (profile:Profile, done) {
    done(null, profile);
});

// used to deserialize the user
// user informationen aus cookie auslesen
// desalisiert das user profile aus der session d
passport.deserializeUser(function (profile:Profile, done) {
    done(null, profile);
});



/*****************************************************************************
 ***  Rights Management (class and function)                                 *
 *****************************************************************************/
//--- Class that deals with Rights --------------------------------------------
class Rights {
    player: boolean;
    admin      : boolean; // user is administrator
    superadmin : boolean; // user is super-administrator
    user : any;
    // can be extended here with other user-roles
    constructor(player: boolean,admin: boolean, superadmin: boolean) {
        this.player = player;
        this.admin      = admin;
        this.superadmin = superadmin;
        // can be extended here with other user roles
    }
}
//--- checkRight, is there still a session and are the rights sufficient ------
function checkRights(req: Request, res: Response, rights: Rights) : boolean {

    //--- check if session is existing ------------------------------------------
    if (!req.session.rights) {
        res.status(401);     // set HTTP response state
        res.json({ message  : "No session: Please log in"  });  // send HTTP-response
        return false;
    }

    //--- check rights against the needed rights (provided as parameter) --------
    else  {
        let rightsOK : boolean = true;
        let message  : string  = "unsufficient rights";

        if (rights.player) {
            rightsOK = rightsOK && req.session.rights.player;
            message += ": not logged in"
        }

        if (rights.admin) {  // checks if "admin" is needed
            rightsOK = rightsOK && req.session.rights.admin;
            message += ": not Moderator"
        }
        if (rights.superadmin) { // ckecks if "superadmin" is needed
            rightsOK = rightsOK && req.session.rights.superadmin;
            message += ", not admin";
        }
        // can be extended here checking other user roles
        if (! rightsOK) {
            res.status(401);     // set HTTP response state
            res.json({ message  : message });  // send HTTP-response
            return false;
        }
    }

    //--- return TRUE if everthing was o.k. --------------------------------------
    return true;
}


/*****************************************************************************
 ***  Middleware Routers for Parsing, Session- and Rights-Management, and OAuth2         *
 *****************************************************************************/


//--- parsing json -----------------------------------------------------------
router.use(bodyParser.json());


router.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//--- session management -----------------------------------------------------
router.use( session( {
  // das ist eine session konfigurationn die für das passport benötigt wird
// save session even if not modified
  resave: true,
// save session even if not used
  saveUninitialized : true,
// forces cookie set on every response needed to set expiration (maxAge)
  rolling: true,
    // name of the cookie set is set by the server
    name              : "mySessionCookie",
// encrypt session-id in cookie using "secret" as modifier
  secret: "keyboard cat"
}));

//router.use("/jquery", express.static( __dirname + "/node_modules/jquery/dist"));


/**
 * Check Login
 */
router.get    ("/login/check", function (req: Request, res: Response) {


    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) {
        return;
    }

    res.status(200).json({message: "player still logged in", player: req.session.player});

});


/**
 * --- login with: post /login -----------------------------------------
 */
router.post   ("/login/player",       function (req: Request, res: Response) {
    let status   : number = 500;  // Initial HTTP response status
    let message  : string = ""; // To be set
    let email: string = req.body.email;
    let password : string = req.body.password;

    //---- ok -> check email/password in database and set Rights -------------
    if (password != "" && email != "") {
        let query: Object = {email: email, password: cryptoJS.MD5(password).toString()};
        playerlistCollection.findOne(query).then((player:Player) => {
            if (player !== null) {
                message = email + " logged in by email/password";
                req.session.player = player;    // set session-variable email

                req.session.rights = new Rights(true, false, false);
                status = 200;
                res.status(status).json({message: message, player: player});
            } else { // username and passwort does not match message = "Id " + id + " not found";
                message = "Not Valid: user '" + email + "' does not match password";
                status = 401;
                res.status(status).json({message: message});
            }
        }).catch((error: MongoError) => { // database error
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({message: message});
        });
    }
    //--- nok -------------------------------------------------------------------
    else { // either username or password not provided
        res.status(400).json({message: "Bad Request: not all mandatory parameters provided"});
    }
});

/**
 * --- update user with: put /user/:id ---------------------------------
 */
router.put    ("/user/:id",    function (req: Request, res: Response) {
    let status      : number = 500; // Initial HTTP response status
    let message     : string = ""; // To be set
    let updateData  : any = {}; // No type provided - depends on existence of password


    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) { return; }

    //--- check if parameters exists -> initialize each if not ------------------
    let id       : string = (req.params.id ? req.params.id     : "");
    let email : string = (req.body.email ? req.body.email : "").trim();
    let password : string = (req.body.password ? req.body.password : "").trim();
    let role : string = (req.body.role ? req.body.role : "").trim();

    //--- ok -> update user with new attributes ---------------------------------
    let query:Object = {_id: new ObjectID(id)};
    if (password == "" || password== "$keepPassword") { // no new password set
        updateData = {email: email, role: role};
    } else { // new password set
        updateData = { password: cryptoJS.MD5(password).toString(), email: email, role: role};
    }

    userlistCollection.updateOne(query, {$set: updateData})
        .then((result: UpdateWriteOpResult) => {
            if (result.matchedCount === 1) {
                message = email + " successfully updated";
                status = 201;
                res.status(status).json({message: message});
            } else {
                message = "Not Valid: E-Mail " + email + " not valid";
                status = 500;
                res.status(status).json({message: message});
            }
        })
        .catch((error: MongoError) => {
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({message: message});
        });
});

/**
 * --- delete user with /user/delete/:email --------------------------------------
 */
router.delete ("/user/delete/:email",    function (req: Request, res: Response) {
    let status    : number = 500; // Initial HTTP response status
    let message   : string = "";  // To be set
    let email     : string = (req.body.email != "" ? req.params.email: -1);

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) {
        return;
    }

    //--- ok -> delete user from database ---------------------------------------
    let query = {email: email};

    userlistCollection.findOne(query)
        .then((res) => {
                return userlistCollection.deleteOne(query)
        })
        .then((result: DeleteWriteOpResultObject) => {
            if (result.deletedCount === 1) {
                message = "E-Mail " + email + " successfully deleted";
                status = 200;
            } else {
                message = "E-Mail " + email + " not found";
                status = 404;
            }
            res.status(status).json({message: message});
        }).catch((error: Error) => { // database error
        message = "Database error: " + error;
        status = 505;
        res.status(status).json({message: message});
    });
});



/**
 * --- get all users with: get /user/getAll --------------------------------
 */
router.get('/user/getAll', function (req: Request, res: Response) {

    let query: Object = {};
    userlistCollection.find(query).toArray()
        .then((users: User[]) => {
            users = users.map((user) => {
                user['password'] = '$keepPassword';
                return user;
            });
            res.status(200).json({message: 'fetched users', users: users});
        })
        .catch((error: MongoError) => {
            res.status(500).json({message: 'Database error' + error.code});
        });
});

/**
 * --- create new user with: post /user --------------------------------
 */
router.post   ("/user/create",        function (req: Request, res: Response) {
    let email : string = (req.body.email ? req.body.email : "").trim();
    let password : string = (req.body.password ? req.body.password : "").trim();
    let role : string = (req.body.role ? req.body.role : "").trim();
    let message  : string = "";
    let status   : number = 500; // Initial HTTP response status

    /*
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    */

    //-- ok -> insert user-data into database -----------------------------------
    if ((role != "") && (email != "") && (password != "")) {

        let insertData = {
            email: email,
            role: role,
            password : cryptoJS.MD5(password).toString(),

        };
        userlistCollection.insertOne(insertData)
            .then((result: InsertOneWriteOpResult) => {

                message = "Created: " + email;
                status = 201;
                res.status(status).json({message: message});
            })
            .catch((error : MongoError) => {
                message = "Database error: " + error.code;
                status = 505;
                res.status(status).json({message: message});
            });
    }
    //--- nok -------------------------------------------------------------------
    else { // some parameters are not provided
        res.status(400).json({message: "Bad Request: not all mandatory parameters provided"});
    }

});


/**
 * Check Login
 */
router.get    ("/user/login/check", function (req: Request, res: Response) {

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) {
        return;
    }

    res.status(200).json({message: "user still logged in"});

});
/**
 * --- login with: post /user/login -----------------------------------------
 */
router.post   ("/user/login",       function (req: Request, res: Response) {

    let status   : number = 500;  // Initial HTTP response status
    let message  : string = ""; // To be set
    let email: string = req.body.email;
    let password : string = req.body.password;

    //---- ok -> check username/password in database and set Rights -------------
    if (password != "" && email != "") {
        let query: Object = {email: email, password: cryptoJS.MD5(password).toString()};
        userlistCollection.findOne(query).then((user:User) => {
            if (user !== null) {
                message = email + " logged in by email/password";
                req.session.email = email;    // set session-variable email
                if(user.role=='admin')req.session.rights = new Rights(true, true, true);
                else req.session.rights = new Rights(true, true, false);

                status = 200;
            } else { // username and passwort does not match message = "Id " + id + " not found";
                message = "Not Valid: user '" + email + "' does not match password";
                status = 401;
            }
            res.status(status).json({message: message});
        }).catch((error: MongoError) => { // database error
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({message: message});
        });
    }
    //--- nok -------------------------------------------------------------------
    else { // either username or password not provided
        res.status(400).json({message: "Bad Request: not all mandatory parameters provided"});
    }


});

/**
 * --- logout with: post /logout ---------------------------------------
 */
router.post   ("/user/logout",      function (req: Request, res: Response) {

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) {
        return;
    }

    //--- ok -> delete session-variable and reset Rights ------------------------
    let email : string = req.session.email;
    req.session.email = null; // delete session-variable
    req.session.rights   = null; // reset all Rights
    res.status(200).json({message: email + " logout successfull"})
});


/**
 * --- logout with: post /logout ---------------------------------------
 */
router.post   ("/logout/player",      function (req: Request, res: Response) {

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) {
        return;
    }

    //--- ok -> delete session-variable and reset Rights ------------------------
    let email : string = req.session.email;
    req.session.email = null; // delete session-variable
    req.session.rights   = null; // reset all Rights
    res.status(200).json({message: email + " logout successfull"})
});



/**
 * --- create new player with: post /create/player --------------------------------
 */
router.post   ("/create/player",        function (req: Request, res: Response) {
    let username : string = (req.body.username ? req.body.username : "").trim();
    let email : string = (req.body.email ? req.body.email : "").trim();
    let password : string = (req.body.password ? req.body.password : "").trim();
    let message  : string = "";
    let status   : number = 500; // Initial HTTP response status
    let stats: GameStats = new GameStats(0,0,0,0);

    /*
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    */

    let query:Object = {email: email};
    playerlistCollection.findOne(query)
        .then((player: Player) => {
            if (player !== null) {
                message = "Email allready in use";
                status = 404;
                res.status(status).json({message: message});
                console.log("email in use");
            } else {
                let insertData = {
                    email: email,
                    username : username,
                    password : cryptoJS.MD5(password).toString(),
                    stats: stats
                };
                playerlistCollection.insertOne(insertData)
                    .then((result: InsertOneWriteOpResult) => {
                       req.session.rights = new Rights(true, false, false);
                       req.session.player = insertData;
                        message = "Created: " + username;
                        status = 201;
                        res.status(status).json({message: message, player: insertData});
                    })
                    .catch((error : MongoError) => {
                        message = "Database error: " + error.code;
                        status = 505;
                        res.status(status).json({message: message});
                    });
            }
        })
        .catch((error: MongoError) => {
            res.status(400).json({message: "Bad Request: not all mandatory parameters provided"});
        });
});



/**
 * --- get user with /player/:email -----------------------------------------
 */
router.get    ("/player/:email",    function (req: Request, res: Response) {
    let status   : number = 500; // Initial HTTP response status
    let message  : string = "";  // To be set
    let email       : number = (req.params.email != "" ? req.params.email: -1);

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) { return; }

    //--- ok -> get user from database ------------------------------------------
    let query:Object = {email: email};
    playerlistCollection.findOne(query)
        .then((player: Player) => {
            if (player !== null) {
                message = "Selected item is " + player.email;
                status = 200;
                res.status(status).json({player: player, message: message});
            } else {
                message = "Player " + player.email + " not found";
                status = 404;
                res.status(status).json({player: player, message: message});
            }
        })
        .catch((error: MongoError) => {
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({player: null, message: message});
        });

});


/**
 * --- update user with: put /user/:email ---------------------------------
 */
router.put    ("/player/:email",    function (req: Request, res: Response) {
    let status      : number = 500; // Initial HTTP response status
    let message     : string = ""; // To be set
    let updateData  : any = {}; // No type provided - depends on existence of password
    let query       : any;

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, false, false))) { return; }

    //--- check if parameters exists -> initialize each if not ------------------
    let email       : string = (req.params.email ? req.params.email     : "");
    //let email : string = (req.body.email ? req.body.email : "").trim();
    let username : string = (req.body.username ? req.body.username : "").trim();
    let password : string = (req.body.password ? req.body.password : "").trim();


    //--- ok -> update user with new attributes ---------------------------------
    query = {email: email};
    if (password == "") { // no new password set
        updateData = {username: username};
    } else if (username == "") {
        updateData = {password: password};
    } else { // new password set
        updateData = { password: cryptoJS.MD5(password).toString(), username: username};
    }

    playerlistCollection.updateOne(query, {$set: updateData})
        .then((result: UpdateWriteOpResult) => {
            if (result.matchedCount === 1) {
                message = username + " successfully updated";
                status = 201;
                res.status(status).json({message: message});
            } else {
                message = "Not Valid: E-Mail: " + email + " not valid";
                status = 500;
                res.status(status).json({message: message});
            }
        })
        .catch((error: MongoError) => {
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({message: message});
        });
});




/**
 * --- delete user with /player/:email --------------------------------------
 */
router.delete ("/player/:email",    function (req: Request, res: Response) {
    let status    : number = 500; // Initial HTTP response status
    let message   : string = "";  // To be set
    let email     : number = (req.body.id != "" ? req.params.id: -1);

    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req,res, new Rights (true, true, true))) {
        return;
    }

    //--- ok -> delete user from database ---------------------------------------
    let query = {email: email};

    playerlistCollection.findOne(query)
        .then((res) => {
            if (res["username"] == 'admin') {
                //return Promise.reject<DeleteWriteOpResultObject>(new Error("Cannot delete admin."))
            } else {
                return playerlistCollection.deleteOne(query)
            }
        })
        .then((result: DeleteWriteOpResultObject) => {
            if (result.deletedCount === 1) {
                message = "E-Mail " + email + " successfully deleted";
                status = 200;
            } else {
                message = "E-Mail " + email + " not found";
                status = 404;
            }
            res.status(status).json({message: message});
        }).catch((error: Error) => { // database error
        message = "Database error: " + error;
        status = 505;
        res.status(status).json({message: message});
    });
});


/**
 * return all users
 */
router.get("/players", function(req: Request, res: Response) {
    /*
    if (!checkRights(req,res, new Rights (false, false, false))) {
        return;
    }
    */

    let query: Object = {};
    playerlistCollection.find(query).toArray()
        .then((players: Player[]) => {
            players = players.map((player) => {
                player['id'] = player['_id'];
                player['_id'] = undefined;
                player['password'] = undefined;
                return player;
            })
            res.status(200).json({message: "get all players succes", players: players});
        })
        .catch((error: MongoError) => {
            res.status(500).json({message: "Database error" + error.code});
        });
});




/*****************************************************************************
 ***  OAuth2         *
 *****************************************************************************/




// Define interfaces here.
interface iAuth {
  callbackURL : string
}



interface iFacebookAuth extends iAuth {
  clientID: string,
  clientSecret : string
}

class FacebookAuthConfig {
  facebookAuth :iFacebookAuth = {
    clientID: '286966021819558',
    clientSecret: '1b6e3a21f4d58b43e54b70822611bddc',
    callbackURL: 'https://localhost:8443/auth/facebook/callback'
  };
}



let facebookConfigAuth:FacebookAuthConfig = new FacebookAuthConfig();


router.get('/oauth/userProfile', isLoggedIn, function(req, res) {
    //res.status(200);
    let player = {
        player : req.user // get the user out of session and pass to template
    };
    console.log(player.player.emails[0].value);
    res.status(200).json({player:player});

    //res.send(JSON.stringify(user));

    let username : string = player.player.name.givenName + " " + player.player.name.familyName;
    let email : string = player.player.emails[0].value;
    let password : string = "";
    let stats: GameStats = new GameStats(0,0,0,0);



    let query:Object = {email: email};
    playerlistCollection.findOne(query)
        .then((player: Player) => {
            if (player !== null) {
                console.log("player allready exists");
            } else {
                let insertData = {
                    email: email,
                    username : username,
                    password : cryptoJS.MD5(password).toString(),
                    stats: stats
                };
                playerlistCollection.insertOne(insertData)
                    .then((result: InsertOneWriteOpResult) => {
                        console.log("oauth player success " + result);
                    })
                    .catch((error : MongoError) => {
                        console.log("oauth player fail " + error);
                    });
            }
        })
        .catch((error: MongoError) => {
            console.log("Database error: " + error.code);
            });
});



//der server authentifiziert den user & stellt zugriffsschlüssel für die erlaubten bereiche aus

router.get('/auth/facebook', passport.authenticate('facebook',
  { scope : 'email'}));

// the callback after google has authenticated the user
router.get('/auth/facebook/callback',
  passport.authenticate('facebook', {
    successRedirect : '/player',
    //failureRedirect : '/'
  }));

// Route middleware to make sure a user is logged in
// diese funktion prüft ob benutzer eingeloggt ist
// wird verwendet um zugriff auf dbestimmte seiten einzuschränken
function isLoggedIn(req, res, next) {
// If user is authenticated in the session, carry on
  if (req.isAuthenticated()){
      return next();
  } else {
      res.status(404).json({message: "not logged in with facebook"});
  }

}


//um authentifizierung in eigener anwendungbenutzten zu können
//muss diese beim service registriert werden
// das macht man über die api seite der plattform
// (dort gibt man anwendungsname, anwendungswebsite, und redirect uri oder callbac uri an)
// um die awendung mit web api zu verknpüpfen benötigt der server für die komminikation die : client id und clientschlüssel

let FacebookStrategy = pFacebook.Strategy;
passport.use(new FacebookStrategy({
    clientID: facebookConfigAuth.facebookAuth.clientID,
    clientSecret: facebookConfigAuth.facebookAuth.clientSecret,
    profileFields: ["name", "email"],
    callbackURL: facebookConfigAuth.facebookAuth.callbackURL,
    passReqToCallback: true // allows us to pass in the req from our route
  },
  function (req, accessToken, refreshToken, profile, done) {
    done(null, profile);
  }
));


router.use("/", express.static(__dirname + "/../client/dist/bomberman"));
// Routen innerhalb der Angular-Anwendung zurückleiten
router.use("/*", express.static(__dirname + "/../client/dist/bomberman"));