"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var gameServer_1 = require("./gameServer");
var Gamer = (function (_super) {
    __extends(Gamer, _super);
    function Gamer(posX, posY, name) {
        var _this = _super.call(this, posX, posY) || this;
        _this.type = "Gamer";
        _this.bombPlanted = 0;
        _this.lives = 3;
        _this.kills = 0;
        _this.bombs = 1;
        _this.name = name;
        //this.color = this.getRandomColor();
        //this.posX = posX;
        //this.posY = posY;
        _this.points = 0;
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
}(gameServer_1.Field));
exports.Gamer = Gamer;
