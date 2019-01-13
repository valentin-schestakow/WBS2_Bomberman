"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Gamer = (function () {
    function Gamer(posX, posY, name) {
        //super(posX, posY);
        this.type = "Gamer";
        this.bombPlanted = 0;
        this.lives = 3;
        this.kills = 0;
        this.bombs = 1;
        this.name = name;
        //this.color = this.getRandomColor();
        this.posX = posX;
        this.posY = posY;
        this.points = 0;
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
}());
exports.Gamer = Gamer;
