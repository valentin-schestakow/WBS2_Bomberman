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
var socket = require("socket.io");
var Gamer_1 = require("./Gamer");
var size = 25;
var playField;
var activeBombs;
var activeBomb;
var gamer;
var myPlayer;
var gamers = [];
function run(server) {
    generateField();
    console.log("Start GameServer");
    var io = socket(server);
    console.log("Generated Field: ");
    printField();
    io.on('connection', function (socket) {
        console.log('made socket connection', socket.id);
        socket.on('move', function (data) {
            //console.log('made socket connection', data);
            //console.log(data.move+"\t pos x "+data.gamer.posX/25+" y "+data.gamer.posY/25 );
            gamers = checkGamerAction(data.move, data.gamer);
            //console.log("\t\t"+"\t pos x "+data.gamer.posX/25+" y "+data.gamer.posY/25 );
            socket.emit('getField', playField);
            socket.broadcast.emit('getField', playField);
            socket.emit('gamer', gamers);
            socket.broadcast.emit('gamer', gamers);
            //socket.emit('move', data);
        });
        socket.on('bombplace', function (Field) {
            socket.emit('bombplace', Field);
            socket.broadcast.emit('bombplace', Field);
        });
        socket.on('gamer', function (player) {
            console.log("Player connected: " + player.username);
            //socket.emit(ww'gamer',gamer);
            //Player will be castet to gamer an broadcasted to all
            spawnGamer(player);
            socket.emit('gamer', gamers);
            socket.broadcast.emit('gamer', gamers);
        });
        socket.on('getField', function (field) {
            socket.emit('getField', playField);
            socket.broadcast.emit('getField', playField);
            //playField = field;
            //console.log(field);
            //printField();
        });
    });
}
exports.run = run;
function spawnGamer(newPlayer) {
    var newGamer;
    var name = "bilbo";
    name = newPlayer.username;
    var playerNumb = gamers.length;
    switch (playerNumb) {
        case 0: {
            newGamer = new Gamer_1.Gamer(0, 0, newPlayer.username);
            newGamer.color = "blue";
            gamers.push(newGamer);
            break;
        }
        case 1: {
            newGamer = new Gamer_1.Gamer(0, 25, newPlayer.username);
            newGamer.color = "yellow";
            gamers.push(newGamer);
            break;
        }
        case 2: {
            newGamer = new Gamer_1.Gamer(25, 0, newPlayer.username);
            newGamer.color = "pink";
            gamers.push(newGamer);
            break;
        }
        default: {
            //statements;
            break;
        }
    }
}
//Function that prints the acual field in the console
function printField() {
    var row = "\t0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|\n";
    for (var i = 0; i < playField.length; i++) {
        row = row.concat(i + ":\t");
        for (var j = 0; j < 20; j++) {
            row = row.concat(playField[i][j].type.charAt(0) + "|");
        }
        row = row.concat("\n");
    }
    console.log(row);
}
//funktion that generates and fills the playfield with random blocks
function generateField() {
    playField = [];
    for (var i = 0; i < 15; i++) {
        playField[i] = [];
        for (var j = 0; j < 20; j++) {
            playField[i][j] = new Field(j * size, i * size);
            if (i > 0 && Math.random() * 100 > 40 && i < 14) {
                playField[i][j] = new Block(j * size, i * size);
            }
        }
    }
}
var Field = (function () {
    function Field(posX, posY) {
        this.type = "Field";
        this.posX = posX;
        this.posY = posY;
    }
    return Field;
}());
exports.Field = Field;
var Block = (function (_super) {
    __extends(Block, _super);
    function Block(posX, posY) {
        var _this = _super.call(this, posX, posY) || this;
        _this.type = "Block";
        _this.posX = posX;
        _this.posY = posY;
        return _this;
    }
    return Block;
}(Field));
exports.Block = Block;
var Bomb = (function (_super) {
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
}(Field));
exports.Bomb = Bomb;
function checkGamerAction(action, gamer) {
    console.log(gamer.name + ": " + "aktuelle Pos = " + " x:" + gamer.posX + " y:" + gamer.posY);
    if (action === 'moveUp') {
        if (gamer.posY > 0 && playField[gamer.posY / 25 - 1][gamer.posX / 25].type !== 'Block') {
            gamer.posY -= 25;
        }
    }
    else if (action === 'moveDown') {
        if (gamer.posY / 25 < 14 && playField[gamer.posY / 25 + 1][gamer.posX / 25].type !== 'Block') {
            gamer.posY += 25;
        }
    }
    else if (action === 'moveLeft') {
        if (gamer.posX > 0 && playField[gamer.posY / 25][gamer.posX / 25 - 1].type !== 'Block') {
            gamer.posX -= 25;
        }
    }
    else if (action === 'moveRight') {
        if (gamer.posX / 25 < 19 && playField[gamer.posY / 25][gamer.posX / 25 + 1].type !== 'Block') {
            gamer.posX += 25;
        }
    }
    if (action === 'plantBomb') {
        if (gamer.bombPlanted < 1) {
            gamer.bombPlanted++;
            console.log("Plant Bomb at x:" + gamer.posX / 25 + " y: " + gamer.posY / 25);
            playField[gamer.posY / 25][gamer.posX / 25] = new Bomb(gamer.posX, gamer.posY, 2);
            activeBomb = (new Bomb(gamer.posX, gamer.posY, 2));
            var interval_1 = setInterval(function () {
                if (activeBomb.timeLeft > 0) {
                    activeBomb.timeLeft--;
                }
                else {
                    bombExplode(activeBomb.posY / 25, activeBomb.posX / 25, gamer);
                    clearInterval(interval_1);
                }
            }, 1000);
        }
    }
    for (var i = 0; i < gamers.length; i++) {
        if (gamers[i].name == gamer.name) {
            gamers[i] = gamer;
            console.log(gamers[i].name + ": " + action + " x:" + gamers[i].posX + " y:" + gamers[i].posY);
        }
    }
    for (var _i = 0, gamers_1 = gamers; _i < gamers_1.length; _i++) {
        var findGamer = gamers_1[_i];
        console.log(findGamer.name + ": " + "aktuelle pos von spieler" + " x:" + findGamer.posX + " y:" + findGamer.posY);
    }
    return gamers;
}
function bombExplode(posY, posX, gamer) {
    explosionHelper(posY, posX, "Fire");
    //eprintCanvas(); socketEMIT!
    var timeleft = 1;
    var interval = setInterval(function () {
        if (timeleft > 0) {
            timeleft--;
        }
        else {
            explosionHelper(posY, posX, "Field");
            gamer.bombPlanted--;
            //socket emit
            //socket.emit('getField', playField);
            clearInterval(interval);
        }
    }, 1000);
}
function explosionHelper(posY, posX, type) {
    if (posY > 0) {
        playField[posY - 1][posX].type = type;
    }
    if (posY < 13) {
        playField[posY + 1][posX].type = type;
    }
    if (posX > 0) {
        playField[posY][posX - 1].type = type;
    }
    if (posX < 19) {
        playField[posY][posX + 1].type = type;
    }
    playField[posY][posX].type = type;
}
