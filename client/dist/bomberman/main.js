(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin/User.ts":
/*!*******************************!*\
  !*** ./src/app/admin/User.ts ***!
  \*******************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
/**
 * User Model
 */
var User = /** @class */ (function () {
    /**
     * creates user instance
     * @param id: number, email: string, password: string, role: string
     * @returns new User
     */
    function User(id, email, password, role) {
        this.email = email;
        this._id = id;
        this.password = password;
        this.role = role;
    }
    return User;
}());



/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"authService.isLoggedIn\">\r\n<!-- display dashboard template, if user is logged in -->\r\n  <aside id=\"left-panel\" class=\"left-panel\">\r\n    <nav class=\"navbar navbar-expand-sm navbar-default\">\r\n\r\n      <div class=\"navbar-header\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <i class=\"fa fa-bars\"></i>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\"><img src=\"../../assets/images/logo.png\" alt=\"Logo\"></a>\r\n        <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"../../assets/images/logo2.png\" alt=\"Logo\"></a>\r\n      </div>\r\n\r\n      <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a routerLink=\"/admin\"> <i class=\"menu-icon fa fa-dashboard\" ></i>Dashboard </a>\r\n          </li>\r\n          <h3 class=\"menu-title\">UI elements</h3><!-- /.menu-title -->\r\n          <li class=\"menu-item-has-children active dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-users\"></i>Groups</a>\r\n            <ul class=\"sub-menu children dropdown-menu\">\r\n              <li *ngIf=\"this.role=='admin'\"><i class=\"fa fa-list\"></i><a href=\"#\" routerLink=\"/admin/userlist\">User List</a></li>\r\n              <li><i class=\"fa fa-list\"></i><a href=\"#\" routerLink=\"/admin/playerlist\">Player List</a></li>\r\n            </ul>\r\n          </li>\r\n\r\n\r\n\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </nav>\r\n  </aside><!-- /#left-panel -->\r\n\r\n  <!-- Left Panel -->\r\n\r\n  <!-- Right Panel -->\r\n\r\n  <div id=\"right-panel\" class=\"right-panel\">\r\n\r\n    <!-- Header-->\r\n    <header id=\"header\" class=\"header\">\r\n\r\n      <div class=\"header-menu\">\r\n\r\n        <div class=\"col-sm-7\">\r\n          <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\r\n          <div class=\"header-left\">\r\n            <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\r\n            <div class=\"form-inline\">\r\n              <form class=\"search-form\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\r\n                <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\r\n              </form>\r\n            </div>\r\n\r\n            <div class=\"dropdown for-notification\">\r\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fa fa-bell\"></i>\r\n              </button>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\r\n                <!--<app-alerts></app-alerts>-->\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-5\">\r\n          <div class=\"user-area dropdown float-right\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              {{this.email}}<img class=\"user-avatar rounded-circle\" src=\"../../assets/images/admin.jpg\" alt=\"User Avatar\">\r\n            </a>\r\n\r\n            <div class=\"user-menu dropdown-menu\">\r\n\r\n              <a class=\"nav-link\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </header><!-- /header -->\r\n    <!-- Header-->\r\n\r\n    <div class=\"breadcrumbs\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"page-header float-left\">\r\n          <div class=\"page-title\">\r\n            <h1>Dashboard</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"page-header float-right\">\r\n          <div class=\"page-title\">\r\n            <ol class=\"breadcrumb text-right\">\r\n              <li><a href=\"#\" routerLink=\"/admin\">Dashboard</a></li>\r\n              <li class=\"active\">{{this.path}}</li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content mt-3\">\r\n      <div class=\"animated fadeIn\">\r\n\r\n\r\n        <div *ngIf=\"this.path==('/admin')\" class=\"container\">\r\n          <h1 class=\"display-1\">Welcome to Dashboard {{this.email}}</h1>\r\n\r\n        </div>\r\n        <div *ngIf=\"this.path.includes('/admin/playerlist')\" class=\"container\">\r\n          <app-player-list></app-player-list>\r\n        </div>\r\n\r\n        <div *ngIf=\"this.path.includes('/admin/userlist') && this.role=='admin'\" class=\"container\">\r\n          <app-user-list></app-user-list>\r\n        </div>\r\n\r\n\r\n\r\n      </div><!-- .animated -->\r\n    </div><!-- .content -->\r\n\r\n\r\n  </div><!-- /#right-panel -->\r\n\r\n</div>\r\n<div *ngIf=\"!authService.isLoggedIn\" class=\"container\">\r\n  <!-- display user login, if user is logged in -->\r\n  <div class=\"row justify-content-md-center\">\r\n    <div class=\"col-md-4\">\r\n      <h2>Please log in!</h2>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email address</label>\r\n          <input [(ngModel)]=\"email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input [(ngModel)]=\"password\" type=\"text\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n        </div>\r\n        <p class=\"text-warning\">{{this.errormsg}}</p>\r\n        <button type=\"submit\" (click)=\"login()\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.scss":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL2FkbWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./User */ "./src/app/admin/User.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminComponent = /** @class */ (function () {
    function AdminComponent(route, authService, userService) {
        this.route = route;
        this.authService = authService;
        this.userService = userService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.path = this.route.url;
        this.email = '';
        this.role = 'admin';
        this.password = '';
        this.user = null;
        this.errormsg = '';
        this.authService.checkLogin().then(function () {
            _this.email = _this.authService.email;
            _this.userService.getUsers().then(function (users) {
                console.log(users);
                if (users.length == 0) {
                    console.log("keine User gefunden, erstelle Admin Accout: mail@max-spies.de");
                    _this.userService.addUser(new _User__WEBPACK_IMPORTED_MODULE_2__["User"](1, "mail@max-spies.de", "password", "admin"));
                }
                else {
                    _this.role = users.find(function (el) { return el.email === _this.email; }).role;
                    console.log(_this.role);
                }
            }).catch(function (err) {
                console.log("getUser fehlgeschlagen: " + err);
            });
        });
    };
    /**
     * login user function
     * @param
     * @returns void
     */
    AdminComponent.prototype.login = function () {
        var _this = this;
        this.authService.userLogin(this.email, this.password).then(function () {
            if (!_this.authService.isLoggedIn)
                _this.errormsg = 'Login failed: wrong email/password combination!';
        });
    };
    /**
     * logout user
     * @param ()
     * @returns void
     */
    AdminComponent.prototype.logout = function () {
        this.authService.logout();
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        })
        /**
         * Admin Dashboard
         */
        ,
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/admin/player-list/player-detail/player-detail.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/admin/player-list/player-detail/player-detail.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Player Detail rendering -->\r\n\r\n\r\n<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">Edit: {{this.player.username}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"activeModal.dismiss(); router.navigateByUrl('/admin/playerlist')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"form-group\">\r\n    <label for=\"InputEmail1\">Email address</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"InputEmail1\" aria-describedby=\"emailHelp\"  [(ngModel)]=\"this.player.email\" placeholder=\"Enter email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"InputRole\">Playername</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"InputRole\" aria-describedby=\"emailHelp\" [(ngModel)]=\"this.player.username\" placeholder=\"username\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"InputPassword1\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"InputPassword1\" [(ngModel)]=\"this.player.password\" placeholder=\"Password\">\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <p class=\"label-warning\">{{this.errormsg}}</p>\r\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss(); router.navigateByUrl('/admin/playerlist')\">Close</button>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\">Save changes</button>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/player-list/player-detail/player-detail.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/admin/player-list/player-detail/player-detail.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BsYXllci1saXN0L3BsYXllci1kZXRhaWwvcGxheWVyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/player-list/player-detail/player-detail.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/admin/player-list/player-detail/player-detail.component.ts ***!
  \****************************************************************************/
/*! exports provided: PlayerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerDetailComponent", function() { return PlayerDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _player_Player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../player/Player */ "./src/app/player/Player.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlayerDetailComponent = /** @class */ (function () {
    function PlayerDetailComponent(activeModal, router) {
        this.activeModal = activeModal;
        this.router = router;
    }
    PlayerDetailComponent.prototype.ngOnInit = function () {
        // console.log(this.player);
    };
    /**
     * save player function
     * @param ()
     * @returns  void
     */
    PlayerDetailComponent.prototype.save = function () {
        if (this.player.password == '' || this.player.password == undefined)
            this.errormsg = 'Please enter a password!';
        else {
            this.activeModal.close(this.player);
            this.router.navigateByUrl('/admin/playerlist');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _player_Player__WEBPACK_IMPORTED_MODULE_3__["Player"])
    ], PlayerDetailComponent.prototype, "player", void 0);
    PlayerDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-detail',
            template: __webpack_require__(/*! ./player-detail.component.html */ "./src/app/admin/player-list/player-detail/player-detail.component.html"),
            styles: [__webpack_require__(/*! ./player-detail.component.scss */ "./src/app/admin/player-list/player-detail/player-detail.component.scss")]
        })
        /**
         * PlayerDetail Component
         */
        ,
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], PlayerDetailComponent);
    return PlayerDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/player-list/player-list.component.html":
/*!**************************************************************!*\
  !*** ./src/app/admin/player-list/player-list.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-1\">{{this.playerAmount}} Players found</h1>\r\n<!-- Player List rendering -->\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let p of this.player\" class=\"list-group-item\">\r\n    {{p.username}}\r\n    <span class=\"badge badge-primary badge-pill\">\r\n      {{p.email}}\r\n    </span>\r\n    <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"delPlayer(p)\"><i class=\"fa fa-trash\"></i> Delete</button>\r\n    <button type=\"button\" class=\"btn btn-warning pull-right\" (click)=\"editPlayer(p)\"><i class=\"fa fa-edit\"></i> Edit</button>\r\n\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"row justify-content-md-center\">\r\n  <div class=\"col-md-2\">\r\n    <button type=\"button\" class=\"mt-2 btn btn-success\" (click)=\"addPlayer()\">\r\n      <i class=\"fa fa-plus\"></i> Add Player\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/player-list/player-list.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/admin/player-list/player-list.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3BsYXllci1saXN0L3BsYXllci1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/admin/player-list/player-list.component.ts":
/*!************************************************************!*\
  !*** ./src/app/admin/player-list/player-list.component.ts ***!
  \************************************************************/
/*! exports provided: PlayerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function() { return PlayerListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _player_Player__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../player/Player */ "./src/app/player/Player.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player-detail/player-detail.component */ "./src/app/admin/player-list/player-detail/player-detail.component.ts");
/* harmony import */ var _player_GameStats__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../player/GameStats */ "./src/app/player/GameStats.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};








var PlayerListComponent = /** @class */ (function () {
    function PlayerListComponent(route, router, platformID, injector, playerService) {
        this.route = route;
        this.router = router;
        this.platformID = platformID;
        this.injector = injector;
        this.playerService = playerService;
        this.playerAmount = 0;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["isPlatformBrowser"])(this.platformID))
            this.modalService = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]);
    }
    PlayerListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getAllPlayers().then(function (player) {
            //console.log(player)
            _this.player = player;
            _this.playerAmount = _this.player.length;
            /*  this.route.params.subscribe((params: any) => {
                if (params['id'] != null) {
      
                  const player = this.player.find((el) => el._id === params['id']);
                  console.log(player);
                  const modalRef = this.modalService.open(PlayerDetailComponent);
                  modalRef.result.then(
                    (player: Player) => {
                      console.log("Update: " +player.email);
                      this.playerService.updatePlayer(player).then(
                        ()=> {
                          // console.log("ging");
                          this.getPlayers();
                        }
                      ).catch(
                        () => console.log("ging nicht")
                      );
                      //alert("ging");
                    }
                  ).catch((err)=> this.router.navigateByUrl('/admin/playerlist'));
                  modalRef.componentInstance.player = Object.assign(player);
                }
              });*/
        });
    };
    /**
     * edit player function
     * @param (player)
     * @returns  void
     */
    PlayerListComponent.prototype.editPlayer = function (player) {
        var _this = this;
        var modalRef = this.modalService.open(_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_6__["PlayerDetailComponent"]);
        modalRef.result.then(function (player) {
            console.log("Update: " + player.email);
            _this.playerService.updatePlayer(player).then(function () {
                // console.log("ging");
                _this.getPlayers();
            }).catch(function () { return console.log("ging nicht"); });
        }).catch(function (err) { return _this.router.navigateByUrl('/admin/playerlist'); });
        modalRef.componentInstance.player = Object.assign(player);
        // this.router.navigateByUrl('/admin/playerlist/edit/' + player._id);
    };
    /**
     * edit player function
     * @param (player)
     * @returns  void
     */
    PlayerListComponent.prototype.addPlayer = function () {
        var _this = this;
        var modalRef = this.modalService.open(_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_6__["PlayerDetailComponent"]);
        modalRef.result.then(function (player) {
            console.log("Update: " + player.email);
            _this.playerService.createPlayer(player.email, player.password, player.username).then(function () {
                // console.log("ging");
                _this.getPlayers();
            }).catch(function () { return console.log("ging nicht"); });
        }).catch(function (err) { return _this.router.navigateByUrl('/admin/playerlist'); });
        modalRef.componentInstance.player = Object.assign(new _player_Player__WEBPACK_IMPORTED_MODULE_2__["Player"](0, "", "username", "test@test.com", "password", new _player_GameStats__WEBPACK_IMPORTED_MODULE_7__["GameStats"](0, 0, 0, 0)));
    };
    PlayerListComponent.prototype.delPlayer = function (player) {
        var _this = this;
        this.playerService.deletePlayer(player).then(function () { return _this.getPlayers(); });
    };
    /**
     * get all players function
     * @param ()
     * @returns Promise<void>
     */
    PlayerListComponent.prototype.getPlayers = function () {
        var _this = this;
        return this.playerService.getAllPlayers().then(function (player) {
            _this.player = player;
            _this.playerAmount = _this.player.length;
        });
    };
    PlayerListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player-list',
            template: __webpack_require__(/*! ./player-list.component.html */ "./src/app/admin/player-list/player-list.component.html"),
            styles: [__webpack_require__(/*! ./player-list.component.scss */ "./src/app/admin/player-list/player-list.component.scss")]
        })
        /**
         * PlayerList Component
         */
        ,
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
    ], PlayerListComponent);
    return PlayerListComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-list/user-detail/user-detail.component.html":
/*!************************************************************************!*\
  !*** ./src/app/admin/user-list/user-detail/user-detail.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- User Detail rendering -->\r\n<div class=\"modal-header\">\r\n  <h5 class=\"modal-title\">Edit: {{user.email}}</h5>\r\n  <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"activeModal.dismiss(); router.navigateByUrl('/admin/userlist')\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"form-group\">\r\n    <label for=\"InputEmail1\">Email address</label>\r\n    <input type=\"email\" class=\"form-control\" id=\"InputEmail1\" aria-describedby=\"emailHelp\" [(ngModel)]=\"user.email\" placeholder=\"Enter email\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"InputRole\">User role</label>\r\n    <input type=\"text\" class=\"form-control\" id=\"InputRole\" aria-describedby=\"emailHelp\" [(ngModel)]=\"user.role\" placeholder=\"mod\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label for=\"InputPassword1\">Password</label>\r\n    <input type=\"password\" class=\"form-control\" id=\"InputPassword1\" [(ngModel)]=\"user.password\" placeholder=\"Password\">\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <p class=\"label-warning\">{{errormsg}}</p>\r\n  <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\" (click)=\"activeModal.dismiss(); router.navigateByUrl('/admin/userlist')\">Close</button>\r\n  <button type=\"button\" class=\"btn btn-primary\" (click)=\"save()\" >Save changes</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/admin/user-list/user-detail/user-detail.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/admin/user-list/user-detail/user-detail.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbGlzdC91c2VyLWRldGFpbC91c2VyLWRldGFpbC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/admin/user-list/user-detail/user-detail.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/admin/user-list/user-detail/user-detail.component.ts ***!
  \**********************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../User */ "./src/app/admin/User.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDetailComponent = /** @class */ (function () {
    function UserDetailComponent(activeModal, router) {
        this.activeModal = activeModal;
        this.router = router;
    }
    UserDetailComponent.prototype.ngOnInit = function () {
    };
    /**
     * save user function
     * @param ()
     * @returns  void
     */
    UserDetailComponent.prototype.save = function () {
        if (this.user.password == '' || this.user.password == undefined)
            this.errormsg = 'Please enter a password!';
        else {
            this.activeModal.close(this.user);
            this.router.navigateByUrl('/admin/userlist');
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _User__WEBPACK_IMPORTED_MODULE_1__["User"])
    ], UserDetailComponent.prototype, "user", void 0);
    UserDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-detail',
            template: __webpack_require__(/*! ./user-detail.component.html */ "./src/app/admin/user-list/user-detail/user-detail.component.html"),
            styles: [__webpack_require__(/*! ./user-detail.component.scss */ "./src/app/admin/user-list/user-detail/user-detail.component.scss")]
        })
        /**
         * UserDetail Component
         */
        ,
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbActiveModal"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UserDetailComponent);
    return UserDetailComponent;
}());



/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 class=\"display-1\">{{this.userAmount}} Users found</h1>\r\n<!-- User List rendering -->\r\n<ul class=\"list-group\">\r\n  <li *ngFor=\"let u of this.users\" class=\"list-group-item\">\r\n    {{u.email}}\r\n    <span class=\"badge badge-primary badge-pill\">\r\n      {{u.role}}\r\n    </span>\r\n    <button type=\"button\" class=\"btn btn-danger pull-right\" (click)=\"delUser(u)\"><i class=\"fa fa-trash\"></i> Delete</button>\r\n    <button type=\"button\" class=\"btn btn-warning pull-right\" (click)=\"editUser(u)\"><i class=\"fa fa-edit\"></i> Edit</button>\r\n\r\n  </li>\r\n</ul>\r\n\r\n<div class=\"row justify-content-md-center\">\r\n  <div class=\"col-md-2\">\r\n    <button type=\"button\" class=\"mt-2 btn btn-success\" (click)=\"addUser()\">\r\n      <i class=\"fa fa-plus\"></i> Add User\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkbWluL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/admin/user-list/user-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/admin/user-list/user-list.component.ts ***!
  \********************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../User */ "./src/app/admin/User.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-detail/user-detail.component */ "./src/app/admin/user-list/user-detail/user-detail.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var UserListComponent = /** @class */ (function () {
    function UserListComponent(userService, route, router, platformID, injector) {
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.platformID = platformID;
        this.injector = injector;
        this.userAmount = 0;
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_6__["isPlatformBrowser"])(this.platformID))
            this.modalService = this.injector.get(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]);
    }
    UserListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getUsers().then(function () {
            _this.route.params.subscribe(function (params) {
                if (params['id'] != null) {
                    var user = _this.users.find(function (el) { return el._id === params['id']; });
                    var modalRef = _this.modalService.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"]);
                    modalRef.result.then(function (user) {
                        console.log("Update: " + user.email);
                        _this.userService.updateUser(user).then(function () {
                            // console.log("ging");
                            _this.getUsers();
                        }).catch(function () { return console.log("ging nicht"); });
                        //alert("ging");
                    }).catch(function (err) { return _this.router.navigateByUrl('/admin/userlist'); });
                    modalRef.componentInstance.user = Object.assign(user);
                }
            });
        });
    };
    /**
     * get all users function
     * @param ()
     * @returns Promise<void>
     */
    UserListComponent.prototype.getUsers = function () {
        var _this = this;
        return this.userService.getUsers().then(function (users) {
            _this.users = users;
            _this.userAmount = _this.users.length;
        });
    };
    /**
     * get all users function
     * @param (user)
     * @returns void
     */
    UserListComponent.prototype.editUser = function (user) {
        /* const modalRef = this.modalService.open(UserDetailComponent);
         modalRef.result.then(
           (user: User) => {
             console.log("Update: " +user.email);
             this.userService.updateUser(user).then(
               ()=> {
                // console.log("ging");
                 this.getUsers();
               }
             ).catch(
               () => console.log("ging nicht")
             );
             //alert("ging");
           }
         ).catch((err)=> this.router.navigateByUrl('/admin/userlist'));
         modalRef.componentInstance.user = Object.assign(user);*/
        this.router.navigateByUrl('/admin/userlist/edit/' + user._id);
    };
    /**
     * delete user function
     * @param (user)
     * @returns void
     */
    UserListComponent.prototype.delUser = function (user) {
        var _this = this;
        this.userService.deleteUser(user).then(function () { return _this.getUsers(); });
    };
    /**
     * add user function
     * @param ()
     * @returns void
     */
    UserListComponent.prototype.addUser = function () {
        var _this = this;
        var modalRef = this.modalService.open(_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"]);
        modalRef.result.then(function (user) {
            _this.userService.addUser(user);
            _this.getUsers();
        });
        modalRef.componentInstance.user = Object.assign(new _User__WEBPACK_IMPORTED_MODULE_3__["User"](0, "newUser@mail.com", "", "mod"));
    };
    UserListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/admin/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.scss */ "./src/app/admin/user-list/user-list.component.scss")]
        })
        /**
         * UserList Component
         */
        ,
        __param(3, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"])),
        __metadata("design:paramtypes", [_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ingame_ingame_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ingame/ingame.component */ "./src/app/ingame/ingame.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







/**
 * Routes for navigation
 */
var routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'play', component: _ingame_ingame_component__WEBPACK_IMPORTED_MODULE_2__["IngameComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'admin/playerlist', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'admin/userlist', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'admin/userlist/edit/:id', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'admin/playerlist/edit/:id', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
    { path: 'player', component: _player_player_component__WEBPACK_IMPORTED_MODULE_6__["PlayerComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!isLoggedIn\">\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"collapse navbar-collapse\" >\r\n\r\n    <a class=\"navbar-brand navbar-header\"  href=\"#\">BOMBERMAN</a>\r\n    <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-outline-success my-2 my-sm-0 \" (click)=\"loginButton()\" type=\"submit\">Login</button>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <button class=\"btn btn-outline-warning my-2 my-sm-0\" (click)=\"signUpButton()\" type=\"submit\">Sign Up</button>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n</div>\r\n<div *ngIf=\"isLoggedIn\">\r\n  <nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n    <div class=\"collapse navbar-collapse\">\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item\">\r\n          <p class=\"nav-link\">Life's: {{lives}}</p>\r\n        </li>\r\n      </ul>\r\n      <a class=\"navbar-brand navbar-header text-primary\"  href=\"/play\">Play BOMBERMAN!</a>\r\n      <ul class=\"navbar-nav mr-auto mt-2 mt-lg-0\">\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\"  href=\"player\">Stats</a>\r\n        </li>\r\n      </ul>\r\n      <a class=\"nav-item justify-content-end\">\r\n        <button class=\"btn btn-outline-danger my-2 my-sm-0\" (click)=\"logoutButton()\" type=\"submit\">Logout</button>\r\n      </a>\r\n    </div>\r\n  </nav>\r\n</div>\r\n<router-outlet></router-outlet>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    //this.ingameComponent.myPlayer.lives;
    function AppComponent(playerService, modalService) {
        var _this = this;
        this.playerService = playerService;
        this.modalService = modalService;
        this.title = 'bomberman';
        this.lives = 0;
        this.playerService.checkLogin()
            .then(function (res) {
            _this.isLoggedIn = res;
            _this.currentPlayer = _this.playerService.currentPlayer;
        });
        this.playerService.receiveGamer().subscribe(function (data) {
            _this.gamers = data;
            for (var _i = 0, _a = _this.gamers; _i < _a.length; _i++) {
                var gamer = _a[_i];
                if (gamer.name == _this.currentPlayer.username) {
                    _this.myPlayer = gamer;
                }
            }
            _this.lives = _this.myPlayer.lives;
        });
    }
    AppComponent.prototype.ngOnInit = function () {
        //this.isLoggedIn = this.playerService.isLoggedIn;
        /*
        this.playerService.checkLogin()
          .then(() => {
            this.playerService.login("test@test.de", "test")
          })
          .then(() => {
            this.playerService.checkLogin()
          })
          .then(() => {
            this.playerService.createPlayer("new@test.de", "pw", "name")
          })
          .then(() => {
            this.playerService.getPlayer("new@test.de")
          })
          .then(() => {
            this.playerService.getAllPlayers()
          })
          .catch((err: HttpErrorResponse) => {
            console.log(err)
          });
          */
    };
    AppComponent.prototype.loginButton = function () {
        this.modalService.open(_login_form_login_form_component__WEBPACK_IMPORTED_MODULE_3__["LoginFormComponent"]);
    };
    AppComponent.prototype.signUpButton = function () {
        window.location.replace(this.playerService.url + "login");
    };
    AppComponent.prototype.logoutButton = function () {
        this.playerService.logout(this.playerService.currentPlayer.email)
            .then(function () {
            window.location.replace('/');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]],
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ingame_ingame_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ingame/ingame.component */ "./src/app/ingame/ingame.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _user_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user/user.component */ "./src/app/user/user.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./player/player.component */ "./src/app/player/player.component.ts");
/* harmony import */ var _admin_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/player-list/player-list.component */ "./src/app/admin/player-list/player-list.component.ts");
/* harmony import */ var _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./admin/user-list/user-list.component */ "./src/app/admin/user-list/user-list.component.ts");
/* harmony import */ var _admin_user_list_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./admin/user-list/user-detail/user-detail.component */ "./src/app/admin/user-list/user-detail/user-detail.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _admin_player_list_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./admin/player-list/player-detail/player-detail.component */ "./src/app/admin/player-list/player-detail/player-detail.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_oauth2_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/oauth2.service */ "./src/app/services/oauth2.service.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./edit-form/edit-form.component */ "./src/app/edit-form/edit-form.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _ingame_ingame_component__WEBPACK_IMPORTED_MODULE_5__["IngameComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_7__["AdminComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _player_player_component__WEBPACK_IMPORTED_MODULE_11__["PlayerComponent"],
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"],
                _admin_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_12__["PlayerListComponent"],
                _admin_user_list_user_list_component__WEBPACK_IMPORTED_MODULE_13__["UserListComponent"],
                _admin_user_list_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailComponent"],
                _admin_player_list_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_16__["PlayerDetailComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_20__["LoginFormComponent"],
                _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_21__["EditFormComponent"]
            ],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_17__["AngularFontAwesomeModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_15__["NgbModule"]
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
                _services_player_service__WEBPACK_IMPORTED_MODULE_18__["PlayerService"],
                _services_oauth2_service__WEBPACK_IMPORTED_MODULE_19__["Oauth2Service"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            exports: [
                _admin_user_list_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailComponent"],
                _admin_player_list_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_16__["PlayerDetailComponent"]
            ],
            entryComponents: [
                _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_21__["EditFormComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_20__["LoginFormComponent"],
                _admin_user_list_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_14__["UserDetailComponent"],
                _admin_player_list_player_detail_player_detail_component__WEBPACK_IMPORTED_MODULE_16__["PlayerDetailComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/edit-form/edit-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Edit</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click');\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label >Email:</label>\r\n      <input type=\"text\" [disabled]=\"true\"  class=\"form-control\"  [(ngModel)]=\"email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >Username:</label>\r\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"username\" name=\"username\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >Password:</label>\r\n      <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click');\">Close</button>\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"submit()\">Submit</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/edit-form/edit-form.component.scss":
/*!****************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQtZm9ybS9lZGl0LWZvcm0uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/edit-form/edit-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/edit-form/edit-form.component.ts ***!
  \**************************************************/
/*! exports provided: EditFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditFormComponent", function() { return EditFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditFormComponent = /** @class */ (function () {
    function EditFormComponent(activeModal, playerService) {
        var _this = this;
        this.activeModal = activeModal;
        this.playerService = playerService;
        this.username = "";
        this.email = "";
        this.password = "";
        this.playerService.checkLogin()
            .then(function (res) {
            if (res) {
                _this.playerService.getPlayer(_this.playerService.currentEmail)
                    .then(function (res) {
                    _this.email = _this.playerService.currentPlayer.email;
                    _this.username = _this.playerService.currentPlayer.username;
                    //window.location.reload();
                });
            }
        });
    }
    EditFormComponent.prototype.ngOnInit = function () {
    };
    EditFormComponent.prototype.submit = function () {
        if (this.username !== "") {
            this.playerService.currentPlayer.username = this.username;
        }
        if (this.password.trim() !== "") {
            this.playerService.currentPlayer.password = this.password;
        }
        else {
            this.playerService.currentPlayer.password = "$keepPassword";
        }
        this.playerService.updatePlayer(this.playerService.currentPlayer);
        this.activeModal.close();
        window.location.reload();
    };
    EditFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-edit-form',
            template: __webpack_require__(/*! ./edit-form.component.html */ "./src/app/edit-form/edit-form.component.html"),
            styles: [__webpack_require__(/*! ./edit-form.component.scss */ "./src/app/edit-form/edit-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], EditFormComponent);
    return EditFormComponent;
}());



/***/ }),

/***/ "./src/app/ingame/Block.ts":
/*!*********************************!*\
  !*** ./src/app/ingame/Block.ts ***!
  \*********************************/
/*! exports provided: Block */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Block", function() { return Block; });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/app/ingame/Field.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Block = /** @class */ (function (_super) {
    __extends(Block, _super);
    function Block(posX, posY) {
        var _this = _super.call(this, posX, posY) || this;
        _this.type = "Block";
        _this.posX = posX;
        _this.posY = posY;
        return _this;
    }
    return Block;
}(_Field__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./src/app/ingame/Bomb.ts":
/*!********************************!*\
  !*** ./src/app/ingame/Bomb.ts ***!
  \********************************/
/*! exports provided: Bomb */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bomb", function() { return Bomb; });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/app/ingame/Field.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Bomb = /** @class */ (function (_super) {
    __extends(Bomb, _super);
    function Bomb(posX, posY, timeLeft) {
        var _this = _super.call(this, posX, posY) || this;
        _this.range = 1;
        _this.timeLeft = timeLeft;
        _this.type = "Bomb";
        _this.posX = posX;
        _this.posY = posY;
        return _this;
    }
    return Bomb;
}(_Field__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./src/app/ingame/Field.ts":
/*!*********************************!*\
  !*** ./src/app/ingame/Field.ts ***!
  \*********************************/
/*! exports provided: Field */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Field", function() { return Field; });
var Field = /** @class */ (function () {
    function Field(posX, posY) {
        //this.type = type;
        this.type = "Field";
        this.posX = posX;
        this.posY = posY;
    }
    Field.prototype.getType = function () {
        return this.type;
    };
    Field.prototype.spawnPlayer = function (player) {
    };
    Field.prototype.plantBomb = function () {
    };
    Field.prototype.movePlayer = function () {
    };
    return Field;
}());



/***/ }),

/***/ "./src/app/ingame/Gamer.ts":
/*!*********************************!*\
  !*** ./src/app/ingame/Gamer.ts ***!
  \*********************************/
/*! exports provided: Gamer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Gamer", function() { return Gamer; });
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Field */ "./src/app/ingame/Field.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Gamer = /** @class */ (function (_super) {
    __extends(Gamer, _super);
    function Gamer(posX, posY, name) {
        var _this = _super.call(this, posX, posY) || this;
        _this.type = "Gamer";
        _this.bombPlanted = 0;
        _this.lives = 3;
        _this.kills = 0;
        _this.bombs = 1;
        _this.name = name;
        _this.color = _this.getRandomColor();
        _this.posX = posX;
        _this.posY = posY;
        return _this;
    }
    Gamer.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return Gamer;
}(_Field__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./src/app/ingame/ingame.component.html":
/*!**********************************************!*\
  !*** ./src/app/ingame/ingame.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<canvas #playground width=800 height=600></canvas>\r\n\r\n\r\n<img #spaceshipimg class=\"imageLoader\" src=\"https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/kspaceduel.png\" alt=\"The Spaceship\">\r\n"

/***/ }),

/***/ "./src/app/ingame/ingame.component.scss":
/*!**********************************************!*\
  !*** ./src/app/ingame/ingame.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "canvas {\n  width: 100%; }\n\nimg {\n  display: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5nYW1lL0M6XFxVc2Vyc1xcZGtyaW9uXFxEb2N1bWVudHNcXF9TdHVkaXVtXFxXQlMyXFx3YnMyLWJvbWJlcm1hblxcY2xpZW50L3NyY1xcYXBwXFxpbmdhbWVcXGluZ2FtZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLFlBQVcsRUFDWDs7QUFDRDtFQUNFLGNBQWEsRUFDZCIsImZpbGUiOiJzcmMvYXBwL2luZ2FtZS9pbmdhbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJjYW52YXMge1xyXG4gd2lkdGg6IDEwMCU7XHJcbn1cclxuaW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/ingame/ingame.component.ts":
/*!********************************************!*\
  !*** ./src/app/ingame/ingame.component.ts ***!
  \********************************************/
/*! exports provided: IngameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IngameComponent", function() { return IngameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Gamer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Gamer */ "./src/app/ingame/Gamer.ts");
/* harmony import */ var _Bomb__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bomb */ "./src/app/ingame/Bomb.ts");
/* harmony import */ var _Field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Field */ "./src/app/ingame/Field.ts");
/* harmony import */ var _Block__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Block */ "./src/app/ingame/Block.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var IngameComponent = /** @class */ (function () {
    function IngameComponent(playerService) {
        var _this = this;
        this.playerService = playerService;
        this.bombs = [];
        //ctx: CanvasRenderingContext2D;
        this.currentPlayer = this.playerService.currentPlayer;
        this.playerService.receiveMove().subscribe(function (data) {
            //console.log(data)
        });
        this.playerService.receiveField().subscribe(function (data) {
            //console.log(data);
            _this.playField = data;
            _this.reprintCanvas();
        });
        this.playerService.receiveGamer().subscribe(function (data) {
            //console.log(data);
            _this.gamers = data;
            for (var _i = 0, _a = _this.gamers; _i < _a.length; _i++) {
                var gamer = _a[_i];
                if (gamer.name == _this.myPlayer.name) {
                    _this.myPlayer = gamer;
                }
            }
            //console.log("CurrentPos x:"+this.convertAbsolutePosToRelativePos(this.myPlayer.posX)+ " y: "+this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
            //console.log("CurrentPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
            _this.reprintCanvas();
        });
    }
    IngameComponent.prototype.broadcastMove = function (move, gamer) {
        this.playerService.emitMove({ move: move, gamer: gamer });
    };
    IngameComponent.prototype.broadcastField = function () {
        this.playerService.emitField(this.playField);
    };
    IngameComponent.prototype.broadcastPlayer = function () {
        this.playerService.emitGamer(this.currentPlayer);
    };
    IngameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.checkLogin().then(function () {
            console.log("Username:" + _this.playerService.currentPlayer.username);
            _this.currentPlayer = _this.playerService.currentPlayer;
            _this.broadcastPlayer();
            _this.broadcastField();
            _this.size = 25;
            _this.myPlayer = new _Gamer__WEBPACK_IMPORTED_MODULE_1__["Gamer"](0, 0, _this.currentPlayer.username);
            _this.context = _this.playground.nativeElement.getContext('2d');
            _this.playground.nativeElement.setAttribute('width', '2000'); //3200
            _this.playground.nativeElement.setAttribute('height', '1500'); //2400
            _this.context.scale(4, 4);
            _this.generatePlayField();
        });
    };
    IngameComponent.prototype.ngAfterViewInit = function () {
        //this.reprintCanvas();
    };
    IngameComponent.prototype.generatePlayField = function () {
        var size = 25;
        this.playField = [];
        for (var i = 0; i < 14; i++) {
            this.playField[i] = [];
            for (var j = 0; j < 20; j++) {
                this.playField[i][j] = new _Field__WEBPACK_IMPORTED_MODULE_3__["Field"](j * size, i * size);
                if (i > 0 && Math.random() * 100 > 40 && i < 14) {
                    this.playField[i][j] = new _Block__WEBPACK_IMPORTED_MODULE_4__["Block"](j * size, i * size);
                }
            }
        }
    };
    IngameComponent.prototype.spawnPlayer = function (player) {
        this.context.drawImage(this.spaceshipAlly.nativeElement, player.posX * this.size, player.posY * this.size, this.size, this.size);
    };
    IngameComponent.prototype.movePlayer = function (oldX, oldY, newX, newY) {
        this.myPlayer.posX = newX;
        this.myPlayer.posY = newY;
        this.reprintCanvas();
    };
    IngameComponent.prototype.reprintCanvas = function () {
        for (var i = 0; i < this.playField.length; i++) {
            for (var j = 0; j < 20; j++) {
                if (this.playField[i][j].type == 'Field') {
                    this.context.fillStyle = '#eee';
                }
                else if (this.playField[i][j].type == 'Block') {
                    this.context.fillStyle = 'green';
                }
                else if (this.playField[i][j].type == 'Bomb') {
                    this.context.fillStyle = 'orange';
                }
                else if (this.playField[i][j].type == 'Fire') {
                    this.context.fillStyle = 'red';
                }
                this.context.fillRect(this.playField[i][j].posX, this.playField[i][j].posY, 25, 25);
            }
        }
        //this.printPlayer(this.myPlayer);
        for (var _i = 0, _a = this.gamers; _i < _a.length; _i++) {
            var gamer = _a[_i];
            this.printPlayer(gamer);
        }
        //this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX * this.size, this.myPlayer.posY * this.size, this.size, this.size);
    };
    IngameComponent.prototype.printPlayer = function (gamer) {
        this.context.fillStyle = gamer.color;
        this.context.fillRect(gamer.posX, gamer.posY, 25, 25);
        //this.context.drawImage(this.spaceshipAlly.nativeElement, gamer.posX * this.size, gamer.posY * this.size, this.size, this.size);
        this.context.font = "5px";
        this.context.fillStyle = "black";
        this.context.fillText(gamer.name, gamer.posX + 25, gamer.posY + 25);
    };
    IngameComponent.prototype.playerAction = function (action) {
        var _this = this;
        this.broadcastMove(action, this.myPlayer);
        /*
        if (action === 'moveUp') {
          if (this.myPlayer.posY > 0 && this.playField[this.myPlayer.posY / 25 - 1][this.myPlayer.posX / 25].type !== 'Block') {
            this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY - 25);
            //this.myPlayer.posY -= this.size;
          }
        } else if (action === 'moveDown') {
          if (this.myPlayer.posY / 25 < 13 && this.playField[this.myPlayer.posY / 25 + 1][this.myPlayer.posX / 25].type !== 'Block') {
            this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY + 25);
            //this.myPlayer.posY += this.size;
          }
        } else if (action === 'moveLeft') {
          if (this.myPlayer.posX > 0 && this.playField[this.myPlayer.posY / 25][this.myPlayer.posX / 25 - 1].type !== 'Block') {
            this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX - 25, this.myPlayer.posY);
            //this.myPlayer.posX -= this.size;
          }
        } else if (action === 'moveRight') {
          if (this.myPlayer.posX / 25 < 19 && this.playField[this.myPlayer.posY / 25][this.myPlayer.posX / 25 + 1].type !== 'Block') {
            this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX + 25, this.myPlayer.posY);
            //this.myPlayer.posX += this.size;
          }
        }
    */
        if (action === 'plantBomb') {
            if (this.myPlayer.bombPlanted < 1) {
                //this.myPlayer.bombPlanted++;
                console.log("Plant Bomb at x:" + this.convertAbsolutePosToRelativePos(this.myPlayer.posX) + " y: " + this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
                this.playField[this.convertAbsolutePosToRelativePos(this.myPlayer.posY)][this.convertAbsolutePosToRelativePos(this.myPlayer.posX)] =
                    new _Bomb__WEBPACK_IMPORTED_MODULE_2__["Bomb"](this.myPlayer.posX, this.myPlayer.posY, 2);
                this.myBomb = new _Bomb__WEBPACK_IMPORTED_MODULE_2__["Bomb"](this.myPlayer.posX, this.myPlayer.posY, 2);
                this.reprintCanvas();
                //timer(500);
                //let timeLeft =3;
                var interval_1 = setInterval(function () {
                    if (_this.myBomb.timeLeft > 0) {
                        _this.myBomb.timeLeft--;
                    }
                    else {
                        _this.broadcastField();
                        _this.bombExplode(_this.convertAbsolutePosToRelativePos(_this.myBomb.posY), _this.convertAbsolutePosToRelativePos(_this.myBomb.posX));
                        clearInterval(interval_1);
                    }
                }, 1000);
            }
        }
        else if (action === 'printDebug') {
            var row = "\t0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|\n";
            for (var i = 0; i < this.playField.length; i++) {
                row = row.concat(i + ":\t");
                for (var j = 0; j < 20; j++) {
                    row = row.concat(this.playField[i][j].type.charAt(0) + "|");
                }
                row = row.concat("\n");
            }
            console.log("%c" + row, "color:orange");
        }
        else if (action === 'reprintField') {
            this.reprintCanvas();
        }
        //this.broadcastPlayer();
    };
    IngameComponent.prototype.convertAbsolutePosToRelativePos = function (absolutePos) {
        return absolutePos / 25;
    };
    IngameComponent.prototype.convertRposToAPos = function (relativePos) {
        return relativePos * 25;
    };
    IngameComponent.prototype.keyEvent = function (event) {
        //console.log(event.code);
        //console.log("LastPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
        //this.playerService.checkLogin();
        //console.log("Username:"+this.playerService.currentPlayer.username);
        if (event.code === 'KeyW' || event.code === 'ArrowUp') {
            this.playerAction('moveUp');
        }
        if (event.code === 'KeyS' || event.code === 'ArrowDown') {
            this.playerAction('moveDown');
        }
        if (event.code === 'KeyA' || event.code === 'ArrowLeft') {
            this.playerAction('moveLeft');
        }
        if (event.code === 'KeyD' || event.code === 'ArrowRight') {
            this.playerAction('moveRight');
        }
        if (event.code === 'KeyB' || event.code === 'Space') {
            this.playerAction('plantBomb');
        }
        if (event.code === 'KeyP') {
            this.playerAction('printDebug');
        }
        if (event.code === 'KeyR') {
            this.broadcastField();
            this.playerAction('reprintField');
        }
    };
    IngameComponent.prototype.bombExplode = function (posY, posX) {
        var _this = this;
        this.explosionHelper(posY, posX, "Fire");
        this.reprintCanvas();
        var timeleft = 1;
        var interval = setInterval(function () {
            if (timeleft > 0) {
                timeleft--;
            }
            else {
                _this.explosionHelper(posY, posX, "Field");
                //this.myPlayer.bombPlanted--;
                _this.reprintCanvas();
                _this.broadcastField();
                clearInterval(interval);
            }
        }, 1000);
    };
    IngameComponent.prototype.explosionHelper = function (posY, posX, type) {
        if (posY > 0) {
            this.playField[posY - 1][posX].type = type;
        }
        if (posY < 13) {
            this.playField[posY + 1][posX].type = type;
        }
        if (posX > 0) {
            this.playField[posY][posX - 1].type = type;
        }
        if (posX < 19) {
            this.playField[posY][posX + 1].type = type;
        }
        this.playField[posY][posX].type = type;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('playground'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IngameComponent.prototype, "playground", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('spaceshipimg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], IngameComponent.prototype, "spaceshipAlly", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], IngameComponent.prototype, "keyEvent", null);
    IngameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingame',
            template: __webpack_require__(/*! ./ingame.component.html */ "./src/app/ingame/ingame.component.html"),
            providers: [_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]],
            styles: [__webpack_require__(/*! ./ingame.component.scss */ "./src/app/ingame/ingame.component.scss")]
        })
        //liste von fiels field kann player oder leer oder
        //field of 20x15 objects -> max300 objects
        ,
        __metadata("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"]])
    ], IngameComponent);
    return IngameComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"modal-header\">\r\n  <h4 class=\"modal-title\">Login by Email and Password</h4>\r\n  <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"activeModal.dismiss('Cross click');\">\r\n    <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <form>\r\n    <div class=\"form-group\">\r\n      <label >Email:</label>\r\n      <input type=\"text\" class=\"form-control\"  [(ngModel)]=\"email\" name=\"email\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label >Password:</label>\r\n      <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" name=\"password\">\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"modal-footer\">\r\n  <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"activeModal.close('Close click');\">Close</button>\r\n  <button type=\"button\" class=\"btn btn-success\" (click)=\"login()\" >Login</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/login-form/login-form.component.scss":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luLWZvcm0vbG9naW4tZm9ybS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(activeModal, playerService) {
        this.activeModal = activeModal;
        this.playerService = playerService;
        this.email = "";
        this.password = "";
    }
    LoginFormComponent.prototype.ngOnInit = function () {
    };
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        if ((this.email !== "") && (this.password !== "")) {
            this.playerService.login(this.email, this.password)
                .then(function (res) {
                if (res) {
                    console.log("succes!");
                    _this.activeModal.dismiss();
                    window.location.replace(_this.playerService.url + "player");
                }
                else {
                    console.log("email or password wrong");
                }
            });
        }
        else {
            console.log("error");
        }
    };
    LoginFormComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.scss */ "./src/app/login-form/login-form.component.scss")]
        }),
        __metadata("design:paramtypes", [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbActiveModal"], _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n\r\n\r\n\r\n<div class=\"container-fluid\" style=\"background-image: url(../../assets/images/Bomberman.JPEG); background-repeat: no-repeat; background-size: cover;\">\r\n</div>\r\n  <div class=\"container\" >\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col-md-6 offset-md-3\">\r\n\r\n        <div class=\"row\">\r\n          <h3 class=\"col-md-6\">Or register with Facebook! --></h3>\r\n          <button (click)=\"facebookLogin()\" class=\"col-sm-6 btn btn-outline-info\"><i class=\"align-left fab fa-10x fa-facebook-square\"></i> </button>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label >Username:</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"username\" #userameText=\"ngModel\"/>\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label >Email:</label>\r\n          <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" #emailText=\"ngModel\"   />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <label >Password:</label>\r\n          <input type=\"password\" class=\"form-control\"  [(ngModel)]=\"password\" #passwordText=\"ngModel\" />\r\n        </div>\r\n\r\n        <div class=\"form-group\">\r\n          <button (click)=\"emailLogin()\" class=\"btn btn-primary\">Register</button>\r\n        </div>\r\n      </div>\r\n      </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<!--\r\n\r\n<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Bomberman</title>\r\n  <link href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\" rel=\"stylesheet\" type=\"text/css\">\r\n  <script type=\"application/javascript\" src=\"../client/node_modules/jquery/dist/jquery.js\"></script>\r\n  <script type=\"application/javascript\" src=\"../client/node_modules/popper.js/dist/popper.js\"></script>\r\n  <script type=\"application/javascript\" src=\"../client/node_modules/bootstrap/dist/js/bootstrap.js\"></script>\r\n  <script type=\"application/javascript\" src=\"../client/script/client.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n</head>\r\n<body style=\"\r\n  background: url(../../assets/images/41A6A62B-9AD7-4297-AB68-6A6DC652487C.JPEG) no-repeat fixed center center;\">\r\n\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <h3 class=\"p-12\">Play BOMBERMAN</h3>\r\n  </div>\r\n\r\n</div>\r\n\r\n<div *ngIf=\"!authService.isLoggedIn\" class=\"container\">\r\n  <div class=\"row justify-content-md-center\">\r\n    <div class=\"col-md-4\">\r\n      <h2>Please log in!</h2>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email address</label>\r\n          <input [(ngModel)]=\"email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input [(ngModel)]=\"password\" type=\"text\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n        </div>\r\n        <button type=\"submit\" (click)=\"login()\" class=\"btn btn-primary\">Submit</button>\r\n        <form action=\"https://localhost:8443/auth/google\" method=\"get\">\r\n          <button type=\"submit\" class=\" btn btn-danger\" id=\"google\" >Google</button>\r\n        </form>\r\n\r\n        <form action=\"https://localhost:8443/auth/facebook\" method=\"get\">\r\n          <button type=\"submit\" class=\" btn btn-primary\" id=\"facebook\" >Facebook</button>\r\n        </form>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center\">\r\n\r\n\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n\r\n-->\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html {\n  background: url('41A6A62B-9AD7-4297-AB68-6A6DC652487C.JPEG') no-repeat center center fixed;\n  background-size: cover;\n  background-attachment: fixed; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vQzpcXFVzZXJzXFxka3Jpb25cXERvY3VtZW50c1xcX1N0dWRpdW1cXFdCUzJcXHdiczItYm9tYmVybWFuXFxjbGllbnQvc3JjXFxhcHBcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJGQUE0RztFQUk1Ryx1QkFBc0I7RUFDdEIsNkJBQTRCLEVBQzdCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sIHtcclxuICBiYWNrZ3JvdW5kOiB1cmwoLi4vLi4vYXNzZXRzL2ltYWdlcy80MUE2QTYyQi05QUQ3LTQyOTctQUI2OC02QTZEQzY1MjQ4N0MuSlBFRykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXIgZml4ZWQ7XHJcbiAgLXdlYmtpdC1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIC1tb3otYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAtby1iYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_oauth2_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/oauth2.service */ "./src/app/services/oauth2.service.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(oauth, playerService, router, authService, userService) {
        this.oauth = oauth;
        this.playerService = playerService;
        this.router = router;
        this.authService = authService;
        this.userService = userService;
        this.email = "";
        this.password = "";
        this.username = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (this.playerService.isLoggedIn) {
            this.router.navigate(['/play']);
        }
    };
    LoginComponent.prototype.facebookLogin = function () {
        this.oauth.facebookRedirect();
    };
    LoginComponent.prototype.emailLogin = function () {
        var _this = this;
        this.playerService.createPlayer(this.email, this.password, this.username)
            .then(function (res) {
            if (res) {
                console.log(_this.playerService.isLoggedIn);
                window.location.replace(_this.playerService.url + "player");
            }
            else {
                console.log("email in use");
            }
        });
        //this.playerService.login(this.email, password);
    };
    //may be deprecated
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.playerService.login(this.email, this.password).then(function () {
            _this.router.navigate(['/play']);
        }).catch(function (err) {
            alert("Login fehlgeschlagen: " + err);
        });
    };
    LoginComponent.prototype.logout = function () {
        this.authService.logout();
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_oauth2_service__WEBPACK_IMPORTED_MODULE_1__["Oauth2Service"], _services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"], _services_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/player/GameStats.ts":
/*!*************************************!*\
  !*** ./src/app/player/GameStats.ts ***!
  \*************************************/
/*! exports provided: GameStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStats", function() { return GameStats; });
var GameStats = /** @class */ (function () {
    function GameStats(gameCount, points, kills, deaths) {
        this.gameCount = gameCount;
        this.points = points;
        this.kills = kills;
        this.deaths = deaths;
    }
    return GameStats;
}());



/***/ }),

/***/ "./src/app/player/Player.ts":
/*!**********************************!*\
  !*** ./src/app/player/Player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
/**
 * Player Model
 */
var Player = /** @class */ (function () {
    /**
     * create new player instance
     * @param id:number, time:string, username:string, email:string, password:string, stats: GameStats
     * @returns new User
     */
    function Player(id, time, username, email, password, stats) {
        this._id = id;
        //this.time     = time;
        this.username = username;
        this.email = email;
        this.password = password;
        this.stats = stats;
    }
    return Player;
}());



/***/ }),

/***/ "./src/app/player/player.component.html":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"card m-3\" style=\"width: 18rem;\">\r\n  <div class=\"card-body\">\r\n    <h5 class=\"card-title\">{{player.email}} {{player._id}}</h5>\r\n    <h6 class=\"card-subtitle mb-2 text-muted\">{{player.username}}</h6>\r\n    <p class=\"card-text\">\"deaths: \" {{player.stats.deaths}}</p>\r\n    <p class=\"card-text\">{{player.stats.kills}}</p>\r\n    <p class=\"card-text\">{{player.stats.points}}</p>\r\n    <p class=\"card-text\">{{player.stats.gameCount}}</p>\r\n  </div>\r\n</div>\r\n-->\r\n\r\n<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <div class=\"\" >\r\n\r\n\r\n      <div class=\"panel panel-info\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">Player Info</h3>\r\n        </div>\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\" col-md-9 col-lg-9 \">\r\n              <table class=\"table table-user-information\">\r\n                <tbody>\r\n\r\n                <tr>\r\n                  <td>Username: </td>\r\n                  <td>{{player.username}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Email: </td>\r\n                  <td>{{player.email}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Game Count: </td>\r\n                  <td>{{player.stats.gameCount}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Points: </td>\r\n                  <td>{{player.stats.points}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Kills: </td>\r\n                  <td>{{player.stats.kills}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td>Deaths: </td>\r\n                  <td>{{player.stats.deaths}}</td>\r\n                </tr>\r\n                <tr>\r\n                  <td> <a class=\"btn btn-info\" (click)=\"edit()\">Edit</a></td>\r\n                </tr>\r\n                </tbody>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/player/player.component.scss":
/*!**********************************************!*\
  !*** ./src/app/player/player.component.scss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/player/player.component.ts":
/*!********************************************!*\
  !*** ./src/app/player/player.component.ts ***!
  \********************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/app/player/Player.ts");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/player.service */ "./src/app/services/player.service.ts");
/* harmony import */ var _services_oauth2_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/oauth2.service */ "./src/app/services/oauth2.service.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-form/edit-form.component */ "./src/app/edit-form/edit-form.component.ts");
/* harmony import */ var _GameStats__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./GameStats */ "./src/app/player/GameStats.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var PlayerComponent = /** @class */ (function () {
    function PlayerComponent(playerService, oauth, modalService) {
        var _this = this;
        this.playerService = playerService;
        this.oauth = oauth;
        this.modalService = modalService;
        this.player = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](0, "", "", "", "", new _GameStats__WEBPACK_IMPORTED_MODULE_6__["GameStats"](0, 0, 0, 0));
        this.playerService.checkLogin()
            .then(function (res) {
            if (res) {
                _this.playerService.getPlayer(_this.playerService.currentPlayer.email)
                    .then(function () {
                    _this.player = _this.playerService.currentPlayer;
                    console.log(_this.player);
                    //window.location.reload();
                });
            }
            else {
                if (!_this.playerService.isLoggedIn) {
                    _this.oauth.getProfile()
                        .then(function (res) {
                        if (res) {
                            _this.player = _this.playerService.currentPlayer;
                            window.location.reload();
                        }
                        else {
                            window.location.replace(_this.playerService.url);
                        }
                    });
                }
            }
        });
    }
    PlayerComponent.prototype.ngOnInit = function () {
    };
    PlayerComponent.prototype.edit = function () {
        this.modalService.open(_edit_form_edit_form_component__WEBPACK_IMPORTED_MODULE_5__["EditFormComponent"]);
    };
    PlayerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-player',
            template: __webpack_require__(/*! ./player.component.html */ "./src/app/player/player.component.html"),
            styles: [__webpack_require__(/*! ./player.component.scss */ "./src/app/player/player.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"], _services_oauth2_service__WEBPACK_IMPORTED_MODULE_3__["Oauth2Service"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModal"]])
    ], PlayerComponent);
    return PlayerComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' }),
    crossDomain: true,
    xhrFields: { withCredentials: true }
};
var AuthService = /** @class */ (function () {
    function AuthService(router, http) {
        this.router = router;
        this.http = http;
        this.url = window.location.protocol + '//' + window.location.host + '/';
    }
    AuthService.prototype.checkLogin = function () {
        var _this = this;
        return this.http.get(this.url + 'user/login/check')
            .toPromise()
            .then(function (data) {
            console.log(data.message);
            _this.isLoggedIn = true;
            _this.email = data.email;
            console.log(_this.email + "still logged in");
            return true;
        }).catch(function (err) {
            console.log(err.message);
            _this.isLoggedIn = false;
            return false;
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post(this.url + 'login', {
            email: email,
            password: password
        })
            .toPromise()
            .then(function (data) {
            _this.isLoggedIn = true;
            console.log(_this.email + "logged in");
            //console.log(data.message);
        }).catch(function (err) {
            _this.isLoggedIn = false;
        });
    };
    AuthService.prototype.userLogin = function (email, pwd) {
        var _this = this;
        return this.http.post(this.url + 'user/login', { email: email, password: pwd }, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.email = email;
            console.log(res.message);
        })
            .catch(function (err) {
            console.log(err.message);
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.post(this.url + 'user/logout', {
            username: this.email
        })
            .toPromise()
            .then(function (data) {
            _this.isLoggedIn = false;
            _this.router.navigate(['']);
            //console.log(data.message);
        }).catch(function (err) {
            //this.isLoggedIn = false;
            console.log(err.message);
        });
    };
    AuthService.prototype.ngOnInit = function () {
        this.checkLogin();
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/oauth2.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/oauth2.service.ts ***!
  \********************************************/
/*! exports provided: Oauth2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Oauth2Service", function() { return Oauth2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./player.service */ "./src/app/services/player.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var Oauth2Service = /** @class */ (function () {
    function Oauth2Service(http, playerService) {
        this.http = http;
        this.playerService = playerService;
        this.url = window.location.protocol + '//' + window.location.host + '/';
    }
    Oauth2Service.prototype.facebookRedirect = function () {
        window.location.replace('https://localhost:8443/auth/facebook');
    };
    Oauth2Service.prototype.getProfile = function () {
        var _this = this;
        return this.http.get(this.url + 'oauth/userProfile')
            .toPromise()
            .then(function (res) {
            _this.playerService.login(res.player.player.emails[0].value, res.player.player.photos.value);
            console.log(res);
            return true;
        }).catch(function (err) {
            console.log(err);
            return false;
        });
    };
    Oauth2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"]])
    ], Oauth2Service);
    return Oauth2Service;
}());



/***/ }),

/***/ "./src/app/services/player.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var PlayerService = /** @class */ (function () {
    function PlayerService(http) {
        this.http = http;
        this.url = window.location.protocol + '//' + window.location.host + '/';
        this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__["connect"](window.location.protocol + '//' + window.location.host);
        this.isLoggedIn = false;
    }
    PlayerService.prototype.emitMove = function (data) {
        this.socket.emit('move', data);
    };
    PlayerService.prototype.emitField = function (field) {
        this.socket.emit('getField', field);
    };
    PlayerService.prototype.emitGamer = function (player) {
        this.socket.emit('gamer', player);
    };
    PlayerService.prototype.receiveMove = function () {
        var _this = this;
        var obbservable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('move', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return obbservable;
    };
    PlayerService.prototype.receiveField = function () {
        var _this = this;
        var obbservable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('getField', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return obbservable;
    };
    PlayerService.prototype.receiveGamer = function () {
        var _this = this;
        var obbservable = new rxjs_Observable__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.socket.on('gamer', function (data) {
                observer.next(data);
            });
            return function () { _this.socket.disconnect(); };
        });
        return obbservable;
    };
    PlayerService.prototype.checkLogin = function () {
        var _this = this;
        return this.http.get(this.url + 'login/check')
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.currentEmail = res.email;
            _this.currentPlayer = res.player;
            //console.log(res.player);
            return true;
        }).catch(function (err) {
            console.log(err);
            _this.isLoggedIn = false;
            return false;
        });
    };
    PlayerService.prototype.getAllPlayers = function () {
        return this.http.get(this.url + 'players')
            .toPromise()
            .then(function (res) {
            //console.log(res);
            return res.players;
        }).catch(function (err) {
            console.log(err);
            return [];
        });
    };
    PlayerService.prototype.login = function (email, password) {
        var _this = this;
        return this.http.post(this.url + 'login/player', { email: email, password: password }, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.currentPlayer = res.player;
            console.log(res.message);
            return true;
            //console.log(res.player);
        })
            .catch(function (err) {
            console.log(err.message);
            return false;
        });
    };
    PlayerService.prototype.getCurrentPlayer = function () {
        return this.currentPlayer;
    };
    PlayerService.prototype.logout = function (email) {
        var _this = this;
        return this.http.post(this.url + 'logout/player', { email: email }, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = false;
            console.log(res.message);
        })
            .catch(function (err) {
            console.log(err.message);
        });
    };
    PlayerService.prototype.createPlayer = function (email, password, username) {
        var _this = this;
        return this.http.post(this.url + 'create/player', { email: email, password: password, username: username }, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            console.log(res.player);
            return true;
        })
            .catch(function (err) {
            console.log(err.message);
            return false;
        });
    };
    PlayerService.prototype.getPlayer = function (email) {
        var _this = this;
        return this.http.get(this.url + 'player/' + email)
            .toPromise()
            .then(function (data) {
            _this.currentPlayer = data.player;
            console.log(data.player);
        }).catch(function (err) {
            console.log(err);
        });
    };
    PlayerService.prototype.updatePlayer = function (player) {
        return this.http.put(this.url + 'player/' + player.email, player)
            .toPromise()
            .then(function (data) {
            console.log(data.message);
        }).catch(function (err) {
            console.log(err.message);
        });
    };
    PlayerService.prototype.deletePlayer = function (player) {
        return this.http.delete(this.url + "player/" + player.email).toPromise()
            .then(function (res) {
            console.log("User gelöscht");
        })
            .catch(function (err) { return console.log("User nicht gelöscht"); });
    };
    PlayerService.prototype.ngOnInit = function () {
    };
    PlayerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PlayerService);
    return PlayerService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.url = window.location.protocol + '//' + window.location.host + '/';
    }
    UserService.prototype.getUsers = function () {
        return this.http.get(this.url + 'user/getAll').toPromise()
            .then(function (res) {
            //console.log("User gefunden: ");
            //console.log(res.users);
            return res.users;
        })
            .catch(function (err) {
            console.log("User nicht gefunden");
            return [];
        });
    };
    UserService.prototype.addUser = function (user) {
        var _this = this;
        console.log(user);
        return this.http.post(this.url + 'user/create', user, httpOptions).toPromise()
            .then(function (res) {
            console.log("User hinzugefügt");
            _this.getUsers();
        })
            .catch(function (err) { return console.log("User nicht geaddet"); });
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.url + "user/" + user._id, user, httpOptions).toPromise()
            .then(function (res) {
            console.log("User geupdated");
        })
            .catch(function (err) { return console.log("User nicht geupdated: " + err.message); });
    };
    UserService.prototype.deleteUser = function (user) {
        var _this = this;
        return this.http.delete(this.url + "user/delete/" + user.email).toPromise()
            .then(function (res) {
            console.log("User gelöscht");
            _this.getUsers();
        })
            .catch(function (err) { return console.log("User nicht gelöscht"); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/user/user.component.html":
/*!******************************************!*\
  !*** ./src/app/user/user.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  user works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/user/user.component.scss":
/*!******************************************!*\
  !*** ./src/app/user/user.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXIvdXNlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/*!****************************************!*\
  !*** ./src/app/user/user.component.ts ***!
  \****************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserComponent = /** @class */ (function () {
    function UserComponent() {
    }
    UserComponent.prototype.ngOnInit = function () {
    };
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: __webpack_require__(/*! ./user.component.html */ "./src/app/user/user.component.html"),
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dkrion\Documents\_Studium\WBS2\wbs2-bomberman\client\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!********************!*\
  !*** ws (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map