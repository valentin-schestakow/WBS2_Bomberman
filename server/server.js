"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var pFacebook = require("passport-facebook");
var pGoogle = require("passport-google-oauth20");
var fs = require("fs");
var https = require("https");
var socket = require("socket.io");
var mongodb_1 = require("mongodb");
var cryptoJS = require("crypto-js");
var bodyParser = require("body-parser");
/*****************************************************************************
 ***  setup database and its structure                                       *
 *****************************************************************************/
var bombermanDB;
var playerlistCollection;
//---- connect to database ----------------------------------------------------
mongodb_1.MongoClient.connect("mongodb://localhost:27017", { useNewUrlParser: true })
    .then(function (dbClient) {
    bombermanDB = dbClient.db("bomberman");
    playerlistCollection = bombermanDB.collection("player");
    return playerlistCollection.findOne({ email: "test@test.de" });
})
    .then(function (res) {
    if (!res) {
        playerlistCollection.insertOne({ email: "test@test.de", password: cryptoJS.MD5("test").toString(), username: "test" });
    }
    console.log("Database is connected ...\n");
}).catch(function (err) {
    console.error("Error connecting to database ...\n" + err);
});
var Player = (function () {
    function Player(id, time, username, email, password) {
        this._id = id;
        this.time = time;
        this.username = username;
        this.email = email;
        this.password = password;
        this.gamestats = null;
    }
    return Player;
}());
var GameStats = (function () {
    function GameStats(id, gameCount, points, kills, deaths) {
        this._id = id;
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
var server = https.createServer(credentials, router).listen(8080);
console.log("-------------------------------------------------------------\n"
    + "Aufruf: https://localhost:8080\n" +
    "-------------------------------------------------------------\n");
/*****************************************************************************
 ***  set up webSocket                                                       *
 *****************************************************************************/
var io = socket(server);
io.on('connection', function (socket) {
    console.log('made socket connection', socket.id);
    //--- Handle lock event -----------------------------------------------------
    socket.on('lock', function (user) {
        socket.broadcast.emit('lock', user);
    });
    //--- Handle update event ---------------------------------------------------
    socket.on('update', function () {
        socket.broadcast.emit('update');
    });
    //--- Handle disconnect event -----------------------------------------------
    socket.on('disconnect', function () {
        socket.broadcast.emit('update');
    });
});
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
 ***  Middleware Routers for Parsing, Session- and Rights-Management         *
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
    res.status(200).json({ message: "player still logged in" });
});
/**
 * --- login with: post /login -----------------------------------------
 */
router.post("/login/player", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = req.body.email;
    var password = req.body.password;
    //---- ok -> check username/password in database and set Rights -------------
    if (password != "" && email != "") {
        var query = { email: email, password: cryptoJS.MD5(password).toString() };
        playerlistCollection.findOne(query).then(function (player) {
            if (player !== null) {
                message = email + " logged in by email/password";
                req.session.email = email; // set session-variable email
                req.session.rights = new Rights(true, false, false);
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
 * --- create new user with: post /user --------------------------------
 */
router.post("/create/player", function (req, res) {
    var username = (req.body.username ? req.body.username : "").trim();
    var email = (req.body.email ? req.body.email : "").trim();
    var password = (req.body.password ? req.body.password : "").trim();
    var message = "";
    var status = 500; // Initial HTTP response status
    /*
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    */
    //-- ok -> insert user-data into database -----------------------------------
    if ((username != "") && (email != "") && (password != "")) {
        var insertData = {
            time: new Date().toLocaleString(),
            email: email,
            username: username,
            password: cryptoJS.MD5(password).toString()
        };
        playerlistCollection.insertOne(insertData)
            .then(function (result) {
            message = "Created: " + username;
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
    playerlistCollection.findOne(query)
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
 * --- update user with: put /user/:email ---------------------------------
 */
router.put("/user/:email", function (req, res) {
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
    if (password == "") {
        updateData = { username: username };
    }
    else {
        updateData = { password: cryptoJS.MD5(password).toString(), username: username };
    }
    playerlistCollection.updateOne(query, { $set: updateData })
        .then(function (result) {
        if (result.matchedCount === 1) {
            message = username + " successfully updated";
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
 * --- delete user with /player/:email --------------------------------------
 */
router.delete("/player/:email", function (req, res) {
    var status = 500; // Initial HTTP response status
    var message = ""; // To be set
    var email = (req.body.id != "" ? req.params.id : -1);
    //--- check Rights -> RETURN if not sufficient ------------------------------
    if (!checkRights(req, res, new Rights(true, false, false))) {
        return;
    }
    //--- ok -> delete user from database ---------------------------------------
    var query = { email: email };
    playerlistCollection.findOne(query)
        .then(function (res) {
        if (res["username"] == 'admin') {
            //return Promise.reject<DeleteWriteOpResultObject>(new Error("Cannot delete admin."))
        }
        else {
            return playerlistCollection.deleteOne(query);
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
    playerlistCollection.find(query).toArray()
        .then(function (players) {
        players = players.map(function (player) {
            player['id'] = player['_id'];
            player['_id'] = undefined;
            player['password'] = undefined;
            return player;
        });
        res.status(200).json({ message: "fetched users", players: players });
    })
        .catch(function (error) {
        res.status(500).json({ message: "Database error" + error.code });
    });
});
router.use("/", express.static(__dirname + "/../client/dist/bomberman"));
// Routen innerhalb der Angular-Anwendung zurückleiten
router.use("/*", express.static(__dirname + "/../client/dist/bomberman"));
/*****************************************************************************
 ***  OAuth2         *
 *****************************************************************************/
router.use(passport.initialize());
//initalisiert das passport module und ermöglicht dadurch den login in der session zu speichern
router.use(passport.session()); // persistent login sessions
// used to serialize the user for the session
// cokkie erstellen
// serialisiert das user profille um es in der session zu speichern
passport.serializeUser(function (profile, done) {
    done(null, profile);
});
// used to deserialize the user
// user informationen aus cookie auslesen
// desalisiert das user profile aus der session d
passport.deserializeUser(function (profile, done) {
    done(null, profile);
});
//kofnigurationsklasse welche die clientid und secret enthält
var GoogleAuthConfig = (function () {
    function GoogleAuthConfig() {
        this.googleAuth = {
            clientID: '85564632151-r3mqfgrsrhk2kcdrdn0fe4hvsvcm7do6.apps.googleusercontent.com',
            clientSecret: 'zfmPBLMIxWEDdg8lJJJkuag9',
            callbackURL: 'https://localhost:8080/auth/google/callback'
        };
    }
    return GoogleAuthConfig;
}());
var FacebookAuthConfig = (function () {
    function FacebookAuthConfig() {
        this.facebookAuth = {
            clientID: '286966021819558',
            clientSecret: '1b6e3a21f4d58b43e54b70822611bddc',
            callbackURL: 'https://localhost:8080/auth/facebook/callback'
        };
    }
    return FacebookAuthConfig;
}());
var facebookConfigAuth = new FacebookAuthConfig();
var googlConfigAuth = new GoogleAuthConfig();
// liefert die einstiegssseite aus
router.get('/', function (req, res) {
    var path = require('path');
    res.sendFile(path.resolve(__dirname + '/../client/index.html'));
    //res.sendFile(__dirname + 'client/index.html');
});
//liefer die profile seite aus wenn der benutzer eingeloggt ist. (dafür funktion: isloggedin)
// route for showing the protected profile page
router.get('/profile', isLoggedIn, function (req, res) {
    var path = require('path');
    res.sendFile(path.resolve(__dirname + '/../client/views/lala.html'));
});
router.get('/login', function (req, res) {
    res.status(200).json({ message: "success" });
});
// route for logging out
// loggt den benutzer aus und leitet an die einstiegsseite mit redirect (/) zurück
router.get('/logout', function (req, res) {
    req.logout();
    //let path = require('path');
    //res.sendFile(path.resolve(__dirname + '/../client/index.html'));
    res.redirect('/');
});
// die route wird durch die profilseite mittels ajax request vom client aufgerufen
// die route wird aufgerufen vom client nachdem jemand eingeloggt ist, um die gespeicherten benutzerdaten zu holen
// holt sich den user von der session
router.get('/userProfile', isLoggedIn, function (req, res) {
    res.status(200);
    var user = {
        user: req.user // get the user out of session and pass to template
    };
    res.send(JSON.stringify(user));
});
// send to google to do the authentication
// profile gets us their basic information including their name
// email gets their emails
// 1. aufruf von route auth/google
// wir daufgerufen wenn der benutzer sich über google authentifizieren möchte
// hier wird angegeben das wir unsmit dem google account anmelden mlchten : strategie:google
// und auf welche bereiche wir zugreifen wollen bei der authentifizierung
router.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
// aufruf von auth/google/callback -> aufruf von  redirect url um profil anzuzeigen
// aufruf von der funktion wenn man eingeloggt ist, ansonsten leere seite
// the callback after google has authenticated the user
// diese route wird von google aufgerufen(der obigen?) wenn der benutzer sich autorisiert hat
// bei erfolg wird der benutzer auf die profilseite weitergeleitet
//bei fehlerbfall auf die einstiegsseite
router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/login',
    failureRedirect: '/'
}));
//der server authentifiziert den user & stellt zugriffsschlüssel für die erlaubten bereiche aus
router.get('/auth/facebook', passport.authenticate('facebook', { scope: 'email' }));
// the callback after google has authenticated the user
router.get('/auth/facebook/callback', passport.authenticate('facebook', {
    successRedirect: '/login',
    failureRedirect: '/'
}));
// Route middleware to make sure a user is logged in
// diese funktion prüft ob benutzer eingeloggt ist
// wird verwendet um zugriff auf dbestimmte seiten einzuschränken
function isLoggedIn(req, res, next) {
    // If user is authenticated in the session, carry on
    if (req.isAuthenticated())
        return next();
    // If they aren't redirect them to the login page
    var path = require('path');
    res.sendFile(path.resolve(__dirname + '/../client/views/login.html'));
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
// hiermit wird passport also der middleware angezeigt welche strategienwir erlauben
// die google strategie benutzt dabei die zugangsdaten aus dem konfigurationsobjekt weiter oben
var GoogleStrategy = pGoogle.Strategy;
passport.use(new GoogleStrategy({
    clientID: googlConfigAuth.googleAuth.clientID,
    clientSecret: googlConfigAuth.googleAuth.clientSecret,
    callbackURL: googlConfigAuth.googleAuth.callbackURL,
    passReqToCallback: true // allows us to pass in the req from our route
}, 
// diese callback funktion wir daufgerufen nacdem der benutzer sich eingeloggt hat, wir haben zugriff auf
// das accesstoken und refreshtoken sowie auf das proil des benutzers
function (req, accessToken, refreshToken, profile, done) {
    done(null, profile);
}));
