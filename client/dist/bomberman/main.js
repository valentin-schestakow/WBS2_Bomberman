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

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"user\">\r\n\r\n  <aside id=\"left-panel\" class=\"left-panel\">\r\n    <nav class=\"navbar navbar-expand-sm navbar-default\">\r\n\r\n      <div class=\"navbar-header\">\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main-menu\" aria-controls=\"main-menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <i class=\"fa fa-bars\"></i>\r\n        </button>\r\n        <a class=\"navbar-brand\" href=\"./\"><img src=\"../../assets/images/logo.png\" alt=\"Logo\"></a>\r\n        <a class=\"navbar-brand hidden\" href=\"./\"><img src=\"../../assets/images/logo2.png\" alt=\"Logo\"></a>\r\n      </div>\r\n\r\n      <div id=\"main-menu\" class=\"main-menu collapse navbar-collapse\">\r\n        <ul class=\"nav navbar-nav\">\r\n          <li>\r\n            <a routerLink=\"/dashboard\"> <i class=\"menu-icon fa fa-dashboard\" ></i>Dashboard </a>\r\n          </li>\r\n          <h3 class=\"menu-title\">UI elements</h3><!-- /.menu-title -->\r\n          <li class=\"menu-item-has-children active dropdown\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\"> <i class=\"menu-icon fa fa-users\"></i>User</a>\r\n            <ul class=\"sub-menu children dropdown-menu\">\r\n              <li><i class=\"fa fa-list\"></i><a href=\"#\" routerLink=\"/userspage\">User List</a></li>\r\n              <li><i class=\"fa fa-plus\"></i><a href=\"#\" routerLink=\"/addpage\">Add User</a></li>\r\n\r\n            </ul>\r\n          </li>\r\n\r\n\r\n\r\n        </ul>\r\n      </div><!-- /.navbar-collapse -->\r\n    </nav>\r\n  </aside><!-- /#left-panel -->\r\n\r\n  <!-- Left Panel -->\r\n\r\n  <!-- Right Panel -->\r\n\r\n  <div id=\"right-panel\" class=\"right-panel\">\r\n\r\n    <!-- Header-->\r\n    <header id=\"header\" class=\"header\">\r\n\r\n      <div class=\"header-menu\">\r\n\r\n        <div class=\"col-sm-7\">\r\n          <a id=\"menuToggle\" class=\"menutoggle pull-left\"><i class=\"fa fa fa-tasks\"></i></a>\r\n          <div class=\"header-left\">\r\n            <button class=\"search-trigger\"><i class=\"fa fa-search\"></i></button>\r\n            <div class=\"form-inline\">\r\n              <form class=\"search-form\">\r\n                <input class=\"form-control mr-sm-2\" type=\"text\" placeholder=\"Search ...\" aria-label=\"Search\">\r\n                <button class=\"search-close\" type=\"submit\"><i class=\"fa fa-close\"></i></button>\r\n              </form>\r\n            </div>\r\n\r\n            <div class=\"dropdown for-notification\">\r\n              <button class=\"btn btn-secondary dropdown-toggle\" type=\"button\" id=\"notification\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n                <i class=\"fa fa-bell\"></i>\r\n              </button>\r\n              <div class=\"dropdown-menu\" aria-labelledby=\"notification\">\r\n                <!--<app-alerts></app-alerts>-->\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col-sm-5\">\r\n          <div class=\"user-area dropdown float-right\">\r\n            <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\r\n              <img class=\"user-avatar rounded-circle\" src=\"../../assets/images/admin.jpg\" alt=\"User Avatar\">\r\n            </a>\r\n\r\n            <div class=\"user-menu dropdown-menu\">\r\n\r\n              <a class=\"nav-link\" href=\"#\" (click)=\"logout()\"><i class=\"fa fa-power-off\"></i> Logout</a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </header><!-- /header -->\r\n    <!-- Header-->\r\n\r\n    <div class=\"breadcrumbs\">\r\n      <div class=\"col-sm-4\">\r\n        <div class=\"page-header float-left\">\r\n          <div class=\"page-title\">\r\n            <h1>Dashboard</h1>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col-sm-8\">\r\n        <div class=\"page-header float-right\">\r\n          <div class=\"page-title\">\r\n            <ol class=\"breadcrumb text-right\">\r\n              <li><a href=\"#\">Dashboard</a></li>\r\n              <li class=\"active\">{{this.path}}</li>\r\n            </ol>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"content mt-3\">\r\n      <div class=\"animated fadeIn\">\r\n\r\n\r\n        <router-outlet></router-outlet>\r\n\r\n\r\n\r\n      </div><!-- .animated -->\r\n    </div><!-- .content -->\r\n\r\n\r\n  </div><!-- /#right-panel -->\r\n\r\n</div>\r\n<div *ngIf=\"!user\" class=\"container\">\r\n  <div class=\"row justify-content-md-center\">\r\n    <div class=\"col-md-4\">\r\n      <h2>Please log in!</h2>\r\n      <form>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputEmail1\">Email address</label>\r\n          <input [(ngModel)]=\"email\" type=\"text\" name=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\">\r\n          <small id=\"emailHelp\" class=\"form-text text-muted\">We'll never share your email with anyone else.</small>\r\n        </div>\r\n        <div class=\"form-group\">\r\n          <label for=\"exampleInputPassword1\">Password</label>\r\n          <input [(ngModel)]=\"password\" type=\"text\" name=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\">\r\n        </div>\r\n        <button type=\"submit\" (click)=\"login()\" class=\"btn btn-primary\">Submit</button>\r\n      </form>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

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
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
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
    function AdminComponent(route, authService) {
        this.route = route;
        this.authService = authService;
    }
    AdminComponent.prototype.ngOnInit = function () {
        this.role = 'admin';
        this.path = this.route.url;
        this.email = '';
        this.password = '';
        this.user = null;
    };
    AdminComponent.prototype.login = function () {
        console.log(this.email + " :: " + this.password);
        this.authService.userLogin(this.email, this.password);
    };
    AdminComponent.prototype.logout = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.scss */ "./src/app/admin/admin.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], AdminComponent);
    return AdminComponent;
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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'play', component: _ingame_ingame_component__WEBPACK_IMPORTED_MODULE_2__["IngameComponent"] },
    { path: 'user', component: _user_user_component__WEBPACK_IMPORTED_MODULE_3__["UserComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_5__["AdminComponent"] },
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

module.exports = "<h1>Welcome to {{ title }}!</h1>\r\n\r\n\r\n<router-outlet></router-outlet>\r\n"

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
    function AppComponent(playerService) {
        this.playerService = playerService;
        this.title = 'bomberman';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.playerService.getUsers();
        this.playerService.logIn();
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"]])
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
                _user_user_component__WEBPACK_IMPORTED_MODULE_8__["UserComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [
                _services_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthService"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
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

/***/ "./src/app/ingame/Player.ts":
/*!**********************************!*\
  !*** ./src/app/ingame/Player.ts ***!
  \**********************************/
/*! exports provided: Player */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Player", function() { return Player; });
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

var Player = /** @class */ (function (_super) {
    __extends(Player, _super);
    function Player(posX, posY, name) {
        var _this = _super.call(this, posX, posY) || this;
        _this.type = "Player";
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
    Player.prototype.getRandomColor = function () {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    };
    return Player;
}(_Field__WEBPACK_IMPORTED_MODULE_0__["Field"]));



/***/ }),

/***/ "./src/app/ingame/ingame.component.html":
/*!**********************************************!*\
  !*** ./src/app/ingame/ingame.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>ingame Component!</h2>\r\n<img id=\"box\" src=\"../../assets/images/box.JPG\" alt=\"Box Icon\">\r\n<canvas #playground width=800 height=600></canvas>\r\n\r\n\r\n<img #spaceshipimg class=\"imageLoader\" src=\"https://cdn2.iconfinder.com/data/icons/crystalproject/crystal_project_256x256/apps/kspaceduel.png\" alt=\"The Spaceship\">\r\n"

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
/* harmony import */ var _Player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Player */ "./src/app/ingame/Player.ts");
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
    //ctx: CanvasRenderingContext2D;
    function IngameComponent(playerService) {
        this.playerService = playerService;
    }
    IngameComponent.prototype.ngOnInit = function () {
        this.size = 25;
        this.myPlayer = new _Player__WEBPACK_IMPORTED_MODULE_1__["Player"](0, 0, 'xXSlyerXx');
        this.context = this.playground.nativeElement.getContext('2d');
        var width = 800;
        //(this.playground.nativeElement as HTMLCanvasElement).setAttribute('width', '800');
        //(this.playground.nativeElement as HTMLCanvasElement).setAttribute('height', '600');
        this.playground.nativeElement.setAttribute('width', '3200');
        this.playground.nativeElement.setAttribute('height', '2400');
        this.context.scale(4, 4);
        this.draw();
    };
    IngameComponent.prototype.ngAfterViewInit = function () {
        this.spawnPlayer(this.myPlayer);
    };
    IngameComponent.prototype.draw = function () {
        var size = 25;
        var box = new Image();
        box.src = '../../assets/images/box.JPG';
        console.log(box.height);
        this.playField = [];
        for (var i = 0; i < 14; i++) {
            this.playField[i] = [];
            for (var j = 0; j < 20; j++) {
                this.context.beginPath();
                this.context.fillStyle = ['#eee', '#eee'][(i + j) % 2];
                this.context.fillRect(j * size, i * size, size, size);
                this.playField[i][j] = new _Field__WEBPACK_IMPORTED_MODULE_3__["Field"](j * size, i * size);
                if (i > 0 && Math.random() * 100 > 40 && i < 14) {
                    this.context.fillStyle = ['green', 'green'][(i + j) % 2];
                    this.context.fillRect(j * size, i * size, size, size);
                    this.playField[i][j] = new _Block__WEBPACK_IMPORTED_MODULE_4__["Block"](j * size, i * size);
                }
                this.context.closePath();
            }
        }
        // SET PLAYER ON MAP
    };
    IngameComponent.prototype.spawnPlayer = function (player) {
        this.context.drawImage(this.spaceshipAlly.nativeElement, player.posX * this.size, player.posY * this.size, this.size, this.size);
    };
    IngameComponent.prototype.movePlayer = function (oldX, oldY, newX, newY) {
        //array
        // this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)] = new Field(oldX,oldY);
        //this.playField[this.convertAbsolutePosToRelativePos(newX)][this.convertAbsolutePosToRelativePos(newY)] = new Player(newX,newY, "Slyaer");
        //drawing
        //console.log("Old Pos: "+this.convertAbsolutePosToRelativePos(oldX)+" "+this.convertAbsolutePosToRelativePos(oldY)+" "+this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType());
        /*if(this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType() == "Field"){
          this.context.fillStyle = '#eee';
        } else if (this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType() == "Block") {
          this.context.fillStyle = 'green';
        } else if (this.playField[this.convertAbsolutePosToRelativePos(oldX)][this.convertAbsolutePosToRelativePos(oldY)].getType() == "Bomb") {
          this.context.fillStyle = 'orange';
        }*/
        //this.context.fillRect(oldX, oldY, 25, 25);
        this.myPlayer.posX = newX;
        this.myPlayer.posY = newY;
        this.reprintCanvas();
        //this.context.drawImage(this.spaceshipAlly.nativeElement, newX, newY , 25, 25);
    };
    IngameComponent.prototype.reprintCanvas = function () {
        for (var i = 0; i < this.playField.length; i++) {
            for (var j = 0; j < 20; j++) {
                if (this.playField[i][j].getType() == 'Field') {
                    this.context.fillStyle = '#eee';
                }
                else if (this.playField[i][j].getType() == 'Block') {
                    this.context.fillStyle = 'green';
                }
                else if (this.playField[i][j].getType() == 'Bomb') {
                    this.context.fillStyle = 'orange';
                }
                else if (this.playField[i][j].getType() == 'Fire') {
                    this.context.fillStyle = 'red';
                }
                this.context.fillRect(this.playField[i][j].posX, this.playField[i][j].posY, 25, 25);
            }
        }
        this.context.drawImage(this.spaceshipAlly.nativeElement, this.myPlayer.posX, this.myPlayer.posY, 25, 25);
        this.printPlayer();
    };
    IngameComponent.prototype.printPlayer = function () {
        this.context.font = "5px";
        this.context.fillStyle = "black";
        this.context.fillText(this.myPlayer.name, this.myPlayer.posX + 25, this.myPlayer.posY + 25);
    };
    IngameComponent.prototype.playerAction = function (action) {
        var _this = this;
        if (action === 'moveUp') {
            if (this.myPlayer.posY > 0) {
                if (this.playField[this.myPlayer.posY / 25 - 1][this.myPlayer.posX / 25].getType() !== 'Block') {
                    this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY - 25);
                    //this.myPlayer.posY -= this.size;
                }
            }
        }
        else if (action === 'moveDown') {
            if (this.myPlayer.posY / 25 < 13) {
                if (this.playField[this.myPlayer.posY / 25 + 1][this.myPlayer.posX / 25].getType() !== 'Block') {
                    this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX, this.myPlayer.posY + 25);
                    //this.myPlayer.posY += this.size;
                }
            }
        }
        else if (action === 'moveLeft') {
            if (this.myPlayer.posX > 0) {
                if (this.playField[this.myPlayer.posY / 25][this.myPlayer.posX / 25 - 1].getType() !== 'Block') {
                    this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX - 25, this.myPlayer.posY);
                    //this.myPlayer.posX -= this.size;
                }
            }
        }
        else if (action === 'moveRight') {
            if (this.myPlayer.posX / 25 < 19) {
                if (this.playField[this.myPlayer.posY / 25][this.myPlayer.posX / 25 + 1].getType() !== 'Block') {
                    this.movePlayer(this.myPlayer.posX, this.myPlayer.posY, this.myPlayer.posX + 25, this.myPlayer.posY);
                    //this.myPlayer.posX += this.size;
                }
            }
        }
        if (action === 'plantBomb') {
            if (this.myPlayer.bombPlanted < 1) {
                this.myPlayer.bombPlanted++;
                console.log("Plant Bomb at x:" + this.convertAbsolutePosToRelativePos(this.myPlayer.posX) + " y: " + this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
                this.playField[this.convertAbsolutePosToRelativePos(this.myPlayer.posY)][this.convertAbsolutePosToRelativePos(this.myPlayer.posX)] =
                    new _Bomb__WEBPACK_IMPORTED_MODULE_2__["Bomb"](this.myPlayer.posX, this.myPlayer.posY, 2);
                this.myBomb = new _Bomb__WEBPACK_IMPORTED_MODULE_2__["Bomb"](this.myPlayer.posX, this.myPlayer.posY, 2);
                this.reprintCanvas();
                //timer(500);
                /*Tiemr*/
                //let timeLeft =3;
                var interval_1 = setInterval(function () {
                    if (_this.myBomb.timeLeft > 0) {
                        _this.myBomb.timeLeft--;
                    }
                    else {
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
                    row = row.concat(this.playField[i][j].getType().charAt(0) + "|");
                }
                row = row.concat("\n");
            }
            console.log("%c" + row, "color:orange");
        }
        else if (action === 'reprintField') {
            this.reprintCanvas();
        }
        //console.log("CurrentPos x:"+this.myPlayer.posX+ " y: "+this.myPlayer.posY);
        //console.log("CurrentPos x:"+this.convertAbsolutePosToRelativePos(this.myPlayer.posX)+ " y: "+this.convertAbsolutePosToRelativePos(this.myPlayer.posY));
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
        if (event.code === 'KeyW') {
            this.playerAction('moveUp');
        }
        if (event.code === 'KeyS') {
            this.playerAction('moveDown');
        }
        if (event.code === 'KeyA') {
            this.playerAction('moveLeft');
        }
        if (event.code === 'KeyD') {
            this.playerAction('moveRight');
        }
        if (event.code === 'KeyB') {
            this.playerAction('plantBomb');
        }
        if (event.code === 'KeyP') {
            this.playerAction('printDebug');
        }
        if (event.code === 'KeyR') {
            this.playerAction('reprintField');
        }
    };
    /*private delay(ms: number){
      return new Promise(resolve => setTimeout(resolve, ms));
    }*/
    IngameComponent.prototype.bombExplode = function (posY, posX) {
        var _this = this;
        /*
            if(posY > 0){
              this.context.fillStyle = 'red';
              this.context.fillRect(this.playField[posY-1][posX].posX,this.playField[posY-1][posX].posY, 25, 25);
    
              this.playField[posY-1][posX] = new Field(this.playField[posY-1][posX].posX,this.playField[posY-1][posX].posY);
            }
            if(posY < 13){
              this.context.fillStyle = 'red';
              this.context.fillRect(this.playField[posY+1][posX].posX,this.playField[posY+1][posX].posY, 25, 25);
    
              this.playField[posY+1][posX] = new Field(this.playField[posY+1][posX].posX,this.playField[posY+1][posX].posY);
            }
            if(posX > 0){
              this.context.fillStyle = 'red';
              this.context.fillRect(this.playField[posY][posX-1].posX,this.playField[posY][posX-1].posY, 25, 25);
    
              this.playField[posY][posX-1] = new Field(this.playField[posY][posX-1].posX,this.playField[posY][posX-1].posY);
            }
            if(posX < 19){
              this.context.fillStyle = 'red';
              this.context.fillRect(this.playField[posY][posX+1].posX,this.playField[posY][posX+1].posY, 25, 25);
    
              this.playField[posY][posX+1] = new Field(this.playField[posY][posX+1].posX,this.playField[posY][posX+1].posY);
            }
            this.playField[posY][posX] = new Field(this.playField[posY][posX].posX,this.playField[posY][posX].posY);
            */
        this.explosionHelper(posY, posX, "Fire");
        this.reprintCanvas();
        var timeleft = 1;
        var interval = setInterval(function () {
            if (timeleft > 0) {
                timeleft--;
            }
            else {
                _this.explosionHelper(posY, posX, "Field");
                _this.myPlayer.bombPlanted--;
                _this.reprintCanvas();
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
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:keyup', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], IngameComponent.prototype, "keyEvent", null);
    IngameComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ingame',
            template: __webpack_require__(/*! ./ingame.component.html */ "./src/app/ingame/ingame.component.html"),
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

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <title>Title</title>\r\n  <link href=\"https://use.fontawesome.com/releases/v5.0.10/css/all.css\" rel=\"stylesheet\" type=\"text/css\">\r\n  <script type=\"application/javascript\" src=\"../client/node_modules/jquery/dist/jquery.js\"></script>\r\n  <script type=\"application/javascript\" src=\"../client/node_modules/popper.js/dist/popper.js\"></script>\r\n  <script type=\"application/javascript\" src=\"../client/node_modules/bootstrap/dist/js/bootstrap.js\"></script>\r\n  <script type=\"application/javascript\" src=\"../client/script/client.js\"></script>\r\n  <link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\">\r\n</head>\r\n<body>\r\n\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center\">\r\n    <h3 class=\"p-12\">Play BOMBERMAN</h3>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n<div class=\"container\">\r\n  <div class=\"d-flex justify-content-center\">\r\n\r\n    <a class=\"btn btn-secondary\" href=\"/auth/google\">Login</a>\r\n\r\n    <form action=\"https://localhost:8443/auth/google\" method=\"get\">\r\n      <button type=\"submit\" class=\" btn btn-danger\" id=\"google\" >Google</button>\r\n    </form>\r\n\r\n    <form action=\"https://localhost:8443/auth/facebook\" method=\"get\">\r\n      <button type=\"submit\" class=\" btn btn-primary\" id=\"facebook\" >Facebook</button>\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n</body>\r\n</html>\r\n"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

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
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
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
    }
    AuthService.prototype.checkLogin = function () {
        var _this = this;
        this.http.get('http://localhost:8080/login/check')
            .toPromise()
            .then(function (data) {
            console.log(data.message);
            _this.isLoggedIn = true;
        }).catch(function (err) {
            console.log(err.message);
            _this.isLoggedIn = false;
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        this.http.post('http://localhost:8080/login', {
            email: email,
            password: password
        })
            .toPromise()
            .then(function (data) {
            _this.isLoggedIn = true;
            _this.email = email;
            //console.log(data.message);
        }).catch(function (err) {
            _this.isLoggedIn = false;
        });
    };
    AuthService.prototype.userLogin = function (email, password) {
        var _this = this;
        return this.http.post('http://localhost:8080/userLogin', { email: email, password: password }, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            _this.role = res.role;
            console.log(email + " angemeldet!");
        })
            .catch(function (err) {
            _this.isLoggedIn = false;
            console.log(email + " NICHT angemeldet!");
        });
    };
    AuthService.prototype.logout = function () {
        var _this = this;
        this.http.post('http://localhost:8080/logout', {
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
        this.isLoggedIn = false;
    }
    PlayerService.prototype.getUsers = function () {
        this.http.get('https://localhost:8080/players')
            .toPromise()
            .then(function (data) {
            console.log(data.players);
        }).catch(function (err) {
            console.log(err);
        });
    };
    PlayerService.prototype.logIn = function () {
        var _this = this;
        return this.http.post('https://localhost:8080/login/player', { email: "test@test.de", password: "test" }, httpOptions)
            .toPromise()
            .then(function (res) {
            _this.isLoggedIn = true;
            console.log(res.message);
        })
            .catch(function (err) {
            console.log(err.message);
        });
    };
    PlayerService.prototype.ngOnInit = function () {
        this.getUsers();
        this.logIn();
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


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map