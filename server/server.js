"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var passport = require("passport");
var session = require("express-session");
var pFacebook = require("passport-facebook");
var pGoogle = require("passport-google-oauth20");
var fs = require("fs");
var https = require("https");
var router = express();
// passport ist eine authentifizzierungs middleware für nodejs.
router.use(session({
    // das ist eine session konfigurationn die für das passport benötigt wird
    // save session even if not modified
    resave: true,
    // save session even if not used
    saveUninitialized: true,
    // forces cookie set on every response needed to set expiration (maxAge)
    rolling: true,
    // encrypt session-id in cookie using "secret" as modifier
    secret: "keyboard cat"
}));
router.use("/client", express.static(__dirname + "/../client"));
router.use("/jquery", express.static(__dirname + "/node_modules/jquery/dist"));
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
/*****************************************************************************
 *** Create servers with handler function and start it
 *
 *****************************************************************************/
var privateKey = fs.readFileSync(__dirname + '/sslcert/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname + '/sslcert/server.crt', 'utf8');
var credentials = { key: privateKey, cert: certificate };
// instead of: router.listen(8080);
https.createServer(credentials, router).listen(8443);
console.log("-------------------------------------------------------------\n"
    + "Aufruf: https://localhost:8443\n" +
    "-------------------------------------------------------------\n");
//kofnigurationsklasse welche die clientid und secret enthält
var GoogleAuthConfig = /** @class */ (function () {
    function GoogleAuthConfig() {
        this.googleAuth = {
            clientID: '85564632151-r3mqfgrsrhk2kcdrdn0fe4hvsvcm7do6.apps.googleusercontent.com',
            clientSecret: 'zfmPBLMIxWEDdg8lJJJkuag9',
            callbackURL: 'https://localhost:8443/auth/google/callback'
        };
    }
    return GoogleAuthConfig;
}());
var FacebookAuthConfig = /** @class */ (function () {
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
