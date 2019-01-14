"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var pFacebook = require("passport-facebook");
var fs = require("fs");
var https = require("https");
var mongodb_1 = require("mongodb");
var bson_1 = require("bson");
var cryptoJS = require("crypto-js");
var bodyParser = require("body-parser");
var gameServer = require("../server/gameServer");
/*****************************************************************************
 ***  setup database and its structure                                       *
 *****************************************************************************/
var bombermanDB;
var userlistCollection;
//---- connect to database ----------------------------------------------------
mongodb_1.MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true })
    .then(function (dbClient) {
    bombermanDB = dbClient.db("bomberman");
    exports.playerlistCollection = bombermanDB.collection("player");
    userlistCollection = bombermanDB.collection("user");
    return exports.playerlistCollection.findOne({ email: "test@test.de" });
})
    .then(function (res) {
    if (!res) {
        exports.playerlistCollection.insertOne({ email: "test@test.de", password: cryptoJS.MD5("test").toString(), username: "test" });
    }
    console.log("Database is connected ...\n");
}).catch(function (err) {
    console.error("Error connecting to database ...\n" + err);
});
var Player = (function () {
    function Player(id, time, username, email, password, stats) {
        this._id = id;
        //this.time     = time;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gamestats = stats;
    }
    return Player;
}());
exports.Player = Player;
var User = (function () {
    function User(id, email, password, role) {
        this.email = email;
        this._id = id;
        this.password = password;
        this.role = role;
    }
    return User;
}());
var GameStats = (function () {
    function GameStats(gameCount, points, kills, deaths) {
        this.gameCount = gameCount;
        this.points = points;
        this.kills = kills;
        this.deaths = deaths;
    }
    return GameStats;
}());
/*****************************************************************************
 *** Create servers with handler function and start it
 *
 *****************************************************************************/
var router = express();
var privateKey = fs.readFileSync(__dirname + '/sslcert/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/sslcert/server.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
// instead of: router.listen(8080);
var server = https.createServer(credentials, router).listen(8443);
console.log("-------------------------------------------------------------\n"
    + "Aufruf: https://localhost:8443\n" +
    "-------------------------------------------------------------\n");
/*****************************************************************************
 ***  set up webSocket                                                       *
 *****************************************************************************/
gameServer.run(server);
/*****************************************************************************
 ***  Rights Management (class and function)                                 *
 *****************************************************************************/
//--- Class that deals with Rights --------------------------------------------
var Rights = (function () {
    // can be extended here with other user-roles
    function Rights(player, admin, superadmin) {
        this.player = player;
        this.admin = admin;
        this.superadmin = superadmin;
        // can be extended here with other user roles
    }
    return Rights;
}());
//--- checkRight, is there still a session and are the rights sufficient ------
function checkRights(req, res, rights) {
    //--- check if session is existing ------------------------------------------
    if (!req.session.rights) {
        res.status(401); // set HTTP response state
        res.json({ message: "No session: Please log in" }); // send HTTP-response
        return false;
    }
    else {
        var rightsOK = true;
        var message = "unsufficient rights";
        if (rights.player) {
            rightsOK = rightsOK && req.session.rights.player;
            message += ": not logged in";
        }
        if (rights.admin) {
            rightsOK = rightsOK && req.session.rights.admin;
            message += ": not Moderator";
        }
        if (rights.superadmin) {
            rightsOK = rightsOK && req.session.rights.superadmin;
            message += ", not admin";
        }
        // can be extended here checking other user roles
        if (!rightsOK) {
            res.status(401); // set HTTP response state
            res.json({ message: message }); // send HTTP-response
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
router.use(session({
    // das ist eine session konfigurationn die für das passport benötigt wird
    // save session even if not modified
    resave: true,
    // save session even if not used
    saveUninitialized: true,
    // forces cookie set on every response needed to set expiration (maxAge)
    rolling: true,
    // name of the cookie set is set by the server
    name: "mySessionCookie",
    // encrypt session-id in cookie using "secret" as modifier
    secret: "keyboard cat"
}));
//router.use("/jquery", express.static( __dirname + "/node_modules/jquery/dist"));
/**
 * Check Login
 */
router.get("/login/check", function (req, res) {
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    res.status(200).json({ message: "player still logged in", email: req.session.email, player: req.session.player });
});
/**
 * --- login with: post /login -----------------------------------------
 */
router.post("/login/player", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = req.body.email;
    var password = req.body.password;
    //---- ok -> check email/password in database and set Rights -------------
    if (password != "" && email != "") {
        var query = { email: email, password: cryptoJS.MD5(password).toString() };
        exports.playerlistCollection.findOne(query).then(function (player) {
            if (player !== null) {
                message = email + " logged in by email/password";
                req.session.email = email; // set session-variable email
                req.session.player = player; // set session-variable player
                req.session.rights = new Rights(true, false, false);
                status = 200;
                res.status(status).json({ message: message, player: player });
            }
            else {
                message = "Not Valid: user '" + email + "' does not match password";
                status = 401;
                res.status(status).json({ message: message });
            }
        }).catch(function (error) {
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({ message: message });
        });
    }
    else {
        res.status(400).json({ message: "Bad Request: not all mandatory parameters provided" });
    }
});
/**
 * update user function
 * @param Request (user)
 * @returns Response (Errorcode, message)
 */
router.put("/user/:id", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var updateData = {}; // No type provided - depends on existence of password
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- check if parameters exists -> initialize each if not ------------------
    var id = (req.params.id ? req.params.id : "");
    var email = (req.body.email ? req.body.email : "").trim();
    var password = (req.body.password ? req.body.password : "").trim();
    var role = (req.body.role ? req.body.role : "").trim();
    //--- ok -> update user with new attributes ---------------------------------
    var query = { _id: new bson_1.ObjectID(id) };
    if (password == "" || password == "$keepPassword") {
        updateData = { email: email, role: role };
    }
    else {
        updateData = { password: cryptoJS.MD5(password).toString(), email: email, role: role };
    }
    userlistCollection.updateOne(query, { $set: updateData })
        .then(function (result) {
        if (result.matchedCount === 1) {
            message = email + " successfully updated";
            status = 201;
            res.status(status).json({ message: message });
        }
        else {
            message = "Not Valid: E-Mail " + email + " not valid";
            status = 500;
            res.status(status).json({ message: message });
        }
    })
        .catch(function (error) {
        message = "Database error: " + error.code;
        status = 505;
        res.status(status).json({ message: message });
    });
});
/**
 * delete user function
 * @param Request (user.email)
 * @returns Response (Errorcode, message)
 */
router.delete("/user/delete/:email", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = (req.params.email != "" ? req.params.email : -1);
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- ok -> delete user from database ---------------------------------------
    var query = { email: email };
    userlistCollection.findOne(query)
        .then(function (res) {
        return userlistCollection.deleteOne(query);
    })
        .then(function (result) {
        if (result.deletedCount === 1) {
            message = "E-Mail " + email + " successfully deleted";
            status = 200;
        }
        else {
            message = "E-Mail " + email + " not found";
            status = 404;
        }
        res.status(status).json({ message: message });
    }).catch(function (error) {
        message = "Database error: " + error;
        status = 505;
        res.status(status).json({ message: message });
    });
});
/**
 * get all users function
 * @param Request ()
 * @returns Response (Errorcode, message)
 */
router.get('/user/getAll', function (req, res) {
    var query = {};
    userlistCollection.find(query).toArray()
        .then(function (users) {
        users = users.map(function (user) {
            user['password'] = '$keepPassword';
            return user;
        });
        res.status(200).json({ message: 'fetched users', users: users });
    })
        .catch(function (error) {
        res.status(500).json({ message: 'Database error' + error.code });
    });
});
/**
 * create user function
 * @param Request (user)
 * @returns Response (Errorcode, message)
 */
router.post("/user/create", function (req, res) {
    var email = (req.body.email ? req.body.email : "").trim();
    var password = (req.body.password ? req.body.password : "").trim();
    var role = (req.body.role ? req.body.role : "").trim();
    var message = "";
    var status = 500; // Initial HTTP response status
    /*
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    */
    //-- ok -> insert user-data into database -----------------------------------
    if ((role != "") && (email != "") && (password != "")) {
        var insertData = {
            email: email,
            role: role,
            password: cryptoJS.MD5(password).toString(),
        };
        userlistCollection.insertOne(insertData)
            .then(function (result) {
            message = "Created: " + email;
            status = 201;
            res.status(status).json({ message: message });
        })
            .catch(function (error) {
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({ message: message });
        });
    }
    else {
        res.status(400).json({ message: "Bad Request: not all mandatory parameters provided" });
    }
});
/**
 * check if user is logged in function
 * @param Request ()
 * @returns Response (Errorcode, message)
 */
router.get("/user/login/check", function (req, res) {
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    res.status(200).json({ message: "user still logged in", email: req.session.email });
});
/**
 * user login function
 * @param Request (user)
 * @returns Response (Errorcode, message)
 */
router.post("/user/login", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = req.body.email;
    var password = req.body.password;
    //---- ok -> check username/password in database and set Rights -------------
    if (password != "" && email != "") {
        var query = { email: email, password: cryptoJS.MD5(password).toString() };
        userlistCollection.findOne(query).then(function (user) {
            if (user !== null) {
                message = email + " logged in by email/password";
                req.session.email = email; // set session-variable email
                if (user.role == 'admin') {
                    console.log("user is admin");
                    req.session.rights = new Rights(true, true, true);
                }
                else {
                    console.log("user is not admin");
                    req.session.rights = new Rights(true, true, false);
                }
                status = 200;
            }
            else {
                message = "Not Valid: user '" + email + "' does not match password";
                status = 401;
            }
            res.status(status).json({ message: message });
        }).catch(function (error) {
            message = "Database error: " + error.code;
            status = 505;
            res.status(status).json({ message: message });
        });
    }
    else {
        res.status(400).json({ message: "Bad Request: not all mandatory parameters provided" });
    }
});
/**
 * user logout function
 * @param Request (user)
 * @returns Response (Errorcode, message)
 */
router.post("/user/logout", function (req, res) {
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- ok -> delete session-variable and reset Rights ------------------------
    var email = req.session.email;
    req.session.email = null; // delete session-variable
    req.session.rights = null; // reset all Rights
    res.status(200).json({ message: email + " logout successfull" });
});
/**
 * --- logout with: post /logout ---------------------------------------
 */
router.post("/logout/player", function (req, res) {
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- ok -> delete session-variable and reset Rights ------------------------
    var email = req.session.email;
    req.session.email = null; // delete session-variable
    req.session.rights = null; // reset all Rights
    res.status(200).json({ message: email + " logout successfull" });
});
/**
 * --- create new player with: post /create/player --------------------------------
 */
router.post("/create/player", function (req, res) {
    var username = (req.body.username ? req.body.username : "").trim();
    var email = (req.body.email ? req.body.email : "").trim();
    var password = (req.body.password ? req.body.password : "").trim();
    var message = "";
    var status = 500; // Initial HTTP response status
    var stats = new GameStats(0, 0, 0, 0);
    /*
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    */
    var query = { email: email };
    exports.playerlistCollection.findOne(query)
        .then(function (player) {
        if (player !== null) {
            message = "Email allready in use";
            status = 404;
            res.status(status).json({ message: message });
            console.log("email in use");
        }
        else {
            var insertData_1 = {
                email: email,
                username: username,
                password: cryptoJS.MD5(password).toString(),
                stats: stats
            };
            exports.playerlistCollection.insertOne(insertData_1)
                .then(function (result) {
                req.session.rights = new Rights(true, false, false);
                req.session.player = insertData_1;
                message = "Created: " + username;
                status = 201;
                res.status(status).json({ message: message, player: insertData_1 });
            })
                .catch(function (error) {
                message = "Database error: " + error.code;
                status = 505;
                res.status(status).json({ message: message });
            });
        }
    })
        .catch(function (error) {
        res.status(400).json({ message: "Bad Request: not all mandatory parameters provided" });
    });
});
/**
 * --- get user with /player/:email -----------------------------------------
 */
router.get("/player/:email", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = (req.params.email != "" ? req.params.email : -1);
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- ok -> get user from database ------------------------------------------
    var query = { email: email };
    exports.playerlistCollection.findOne(query)
        .then(function (player) {
        if (player !== null) {
            message = "Selected item is " + player.email;
            status = 200;
            res.status(status).json({ player: player, message: message });
        }
        else {
            message = "Player " + player.email + " not found";
            status = 404;
            res.status(status).json({ player: player, message: message });
        }
    })
        .catch(function (error) {
        message = "Database error: " + error.code;
        status = 505;
        res.status(status).json({ player: null, message: message });
    });
});
/**
 * --- update player with: put /user/:email ---------------------------------
 */
router.put("/player/:email", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var updateData = {}; // No type provided - depends on existence of password
    var query;
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- check if parameters exists -> initialize each if not ------------------
    var email = (req.params.email ? req.params.email : "");
    //let email : string = (req.body.email ? req.body.email : "").trim();
    var username = (req.body.username ? req.body.username : "").trim();
    var password = (req.body.password ? req.body.password : "").trim();
    //--- ok -> update user with new attributes ---------------------------------
    query = { email: email };
    if (password == "" || password == '$keepPassword') {
        updateData = { username: username };
    }
    else if (username == "") {
        updateData = { password: password };
    }
    else {
        updateData = { password: cryptoJS.MD5(password).toString(), username: username };
    }
    exports.playerlistCollection.updateOne(query, { $set: updateData })
        .then(function (result) {
        if (result.matchedCount === 1) {
            var query_1 = { email: email };
            exports.playerlistCollection.findOne(query_1)
                .then(function (player) {
                if (player !== null) {
                    req.session.player = player;
                }
                else {
                }
            })
                .catch(function (error) {
                message = "Database error: " + error.code;
                status = 505;
                res.status(status).json({ player: null, message: message });
            });
            message = username + " successfully updated";
            status = 201;
            res.status(status).json({ message: message });
        }
        else {
            message = "Not Valid: E-Mail: " + email + " not valid";
            status = 500;
            res.status(status).json({ message: message });
        }
    })
        .catch(function (error) {
        message = "Database error: " + error.code;
        status = 505;
        res.status(status).json({ message: message });
    });
});
/**
 * --- delete player with /player/:email --------------------------------------
 */
router.delete("/player/:email", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = (req.params.email != "" ? req.params.email : -1);
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        console.log("user is not allowed to delete");
        return;
    }
    //--- ok -> delete user from database ---------------------------------------
    var query = { email: email };
    exports.playerlistCollection.findOne(query)
        .then(function (res) {
        if (res["username"] == 'admin') {
            //return Promise.reject<DeleteWriteOpResultObject>(new Error("Cannot delete admin."))
        }
        else {
            return exports.playerlistCollection.deleteOne(query);
        }
    })
        .then(function (result) {
        if (result.deletedCount === 1) {
            message = "E-Mail " + email + " successfully deleted";
            status = 200;
        }
        else {
            message = "E-Mail " + email + " not found";
            status = 404;
        }
        res.status(status).json({ message: message });
    }).catch(function (error) {
        message = "Database error: " + error;
        status = 505;
        res.status(status).json({ message: message });
    });
});
/**
 * return all users
 */
router.get("/players", function (req, res) {
    /*
    if (!checkRights(req,res, new Rights (false, false, false))) {
        return;
    }
    */
    var query = {};
    exports.playerlistCollection.find(query).toArray()
        .then(function (players) {
        players = players.map(function (player) {
            player['password'] = '$keepPassword';
            return player;
        });
        res.status(200).json({ message: "get all players succes", players: players });
    })
        .catch(function (error) {
        res.status(500).json({ message: "Database error" + error.code });
    });
});
/*****************************************************************************
 ***  OAuth2         *
 *****************************************************************************/
router.use(passport.initialize());
router.use(passport.session()); // persistent login sessions
// used to serialize the user for the session
passport.serializeUser(function (profile, done) {
    done(null, profile);
});
// used to deserialize the user
passport.deserializeUser(function (profile, done) {
    done(null, profile);
});
var FacebookAuthConfig = (function () {
    function FacebookAuthConfig() {
        this.facebookAuth = {
            clientID: '286966021819558',
            clientSecret: '1b6e3a21f4d58b43e54b70822611bddc',
            callbackURL: 'https://localhost:8443/auth/facebook/callback'
        };
    }
    return FacebookAuthConfig;
}());
var facebookConfigAuth = new FacebookAuthConfig();
router.get('/oauth/userProfile', isLoggedIn, function (req, res) {
    //res.status(200);
    var player = {
        player: req.user // get the user out of session and pass to template
    };
    console.log(player.player.emails[0].value);
    res.status(200).json({ player: player });
    //res.send(JSON.stringify(user));
    var username = player.player.name.givenName + " " + player.player.name.familyName;
    var email = player.player.emails[0].value;
    var password = player.player.photos.value;
    var stats = new GameStats(0, 0, 0, 0);
    var query = { email: email };
    exports.playerlistCollection.findOne(query)
        .then(function (player) {
        if (player !== null) {
            console.log("player allready exists");
        }
        else {
            var insertData = {
                email: email,
                username: username,
                password: cryptoJS.MD5(password).toString(),
                stats: stats
            };
            exports.playerlistCollection.insertOne(insertData)
                .then(function (result) {
                console.log("oauth player success " + result);
            })
                .catch(function (error) {
                console.log("oauth player fail " + error);
            });
        }
    })
        .catch(function (error) {
        console.log("Database error: " + error.code);
    });
});
//der server authentifiziert den user & stellt zugriffsschlüssel für die erlaubten bereiche aus
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
// the callback after google has authenticated the user
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/player',
}));
// Route middleware to make sure a user is logged in
// diese funktion prüft ob benutzer eingeloggt ist
// wird verwendet um zugriff auf dbestimmte seiten einzuschränken
function isLoggedIn(req, res, next) {
    // If user is authenticated in the session, carry on
    if (req.isAuthenticated()) {
        return next();
    }
    else {
        console.log(req.isAuthenticated());
        res.status(404).json({ message: "not logged in with facebook" });
    }
}
//um authentifizierung in eigener anwendungbenutzten zu können
//muss diese beim service registriert werden
// das macht man über die api seite der plattform
// (dort gibt man anwendungsname, anwendungswebsite, und redirect uri oder callbac uri an)
// um die awendung mit web api zu verknpüpfen benötigt der server für die komminikation die : client id und clientschlüssel
var FacebookStrategy = pFacebook.Strategy;
passport.use(new FacebookStrategy({
    clientID: facebookConfigAuth.facebookAuth.clientID,
    clientSecret: facebookConfigAuth.facebookAuth.clientSecret,
    profileFields: ["name", "email", "photos", "gender"],
    callbackURL: facebookConfigAuth.facebookAuth.callbackURL,
    passReqToCallback: true // allows us to pass in the req from our route
}, function (req, accessToken, refreshToken, profile, done) {
    done(null, profile);
}));
router.use("/", express.static(__dirname + "/../client/dist/bomberman"));
// Routen innerhalb der Angular-Anwendung zurückleiten
router.use("/*", express.static(__dirname + "/../client/dist/bomberman"));
