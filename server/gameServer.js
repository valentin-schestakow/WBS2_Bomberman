"use strict";
var __extends = (this && this.__extends) || (function () {
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
Object.defineProperty(exports, "__esModule", { value: true });
var socket = require("socket.io");
var Gamer_1 = require("./Gamer");
var size = 25;
var playField;
var activeBombs;
//let activeBomb: Bomb;
var gamer;
var myPlayer;
var gamers = [];
var io;
function run(server) {
    generateField();
    console.log("Start GameServer");
    io = socket(server);
    console.log("Generated Field: ");
    printField();
    io.on('connection', function (socket) {
        console.log('made socket connection', socket.id);
        socket.on('move', function (data) {
            //console.log('made socket connection', data);
            //console.log(data.move+"\t pos x "+data.gamer.posX/25+" y "+data.gamer.posY/25 );
            //console.log(data.gamer.name+": active Bombs: "+data.gamer.bombPlanted);
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
            newGamer = new Gamer_1.Gamer(475, 0, newPlayer.username);
            newGamer.color = "yellow";
            gamers.push(newGamer);
            break;
        }
        case 2: {
            newGamer = new Gamer_1.Gamer(0, 350, newPlayer.username);
            newGamer.color = "pink";
            gamers.push(newGamer);
            break;
        }
        case 3: {
            newGamer = new Gamer_1.Gamer(475, 350, newPlayer.username);
            newGamer.color = "black";
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
var Field = /** @class */ (function () {
    function Field(posX, posY) {
        this.type = "Field";
        this.posX = posX;
        this.posY = posY;
    }
    return Field;
}());
exports.Field = Field;
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
}(Field));
exports.Block = Block;
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
}(Field));
exports.Bomb = Bomb;
function checkGamerAction(action, gamer) {
    for (var i = 0; i < gamers.length; i++) {
        if (gamers[i].name == gamer.name) {
            gamer.posY = gamers[i].posY;
            gamer.posX = gamers[i].posX;
            gamer.lives = gamers[i].lives;
        }
    }
    if (gamer.lives <= 0) {
        gamer.color = "gray";
    }
    else { //only if alive
        //for debugging
        //console.log(gamer.name+": "+"aktuelle Pos = "+" x:"+gamer.posX+" y:"+gamer.posY);
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
            if (gamer.bombPlanted < 10) {
                gamer.bombPlanted++;
                console.log(gamer.name + ": plant Bomb at x:" + gamer.posX / 25 + " y: " + gamer.posY / 25);
                playField[gamer.posY / 25][gamer.posX / 25] = new Bomb(gamer.posX, gamer.posY, 2);
                plantNewBomb(gamer);
            }
            else {
                console.log(gamer.name + ": active bombs: " + gamer.bombPlanted);
            }
        }
    }
    if (playField[gamer.posY / 25][gamer.posX / 25].type == "Fire") {
        //gamer.lives--;
        gamer.lives > 0 ? gamer.lives-- : gamer.lives;
    }
    for (var i = 0; i < gamers.length; i++) {
        if (gamers[i].name == gamer.name) {
            gamers[i].posY = gamer.posY;
            gamers[i].posX = gamer.posX;
            gamers[i].lives = gamer.lives;
            gamers[i].color = gamer.color;
            //console.log(gamers[i].name+" lost life. "+gamers[i].lives+" Lives left.")
            //for debugging
            //console.log(gamers[i].name+": "+action+" x:"+gamers[i].posX+" y:"+gamers[i].posY);
        }
    }
    /* // Print Pos of all active gamers for debugging
    for(let findGamer of gamers){
        console.log(findGamer.name+": "+"aktuelle pos von spieler"+" x:"+findGamer.posX+" y:"+findGamer.posY);
    }
    */
    return gamers;
}
function plantNewBomb(gamer) {
    var activeBomb = (new Bomb(gamer.posX, gamer.posY, 2));
    var interval = setInterval(function () {
        if (activeBomb.timeLeft > 0) {
            activeBomb.timeLeft--;
        }
        else {
            bombExplode(activeBomb.posY / 25, activeBomb.posX / 25, gamer);
            clearInterval(interval);
        }
    }, 1000);
}
function bombExplode(posY, posX, gamer) {
    explosionHelper(posY, posX, "Fire");
    //eprintCanvas(); socketEMIT!
    var timeleft = 1;
    var interval2 = setInterval(function () {
        if (timeleft > 0) {
            timeleft--;
        }
        else {
            explosionHelper(posY, posX, "Field");
            freeBomb(gamer);
            //socket emit
            //socket.emit('getField', playField);
            console.log(gamer.name + ": bomb finished x:" + posX + " y:" + posY);
            clearInterval(interval2);
        }
    }, 1000);
}
function freeBomb(gamer) {
    for (var i = 0; i < gamers.length; i++) {
        if (gamers[i].name == gamer.name) {
            //console.log(gamers[i].name+" bomb minus "+gamers[i].bombPlanted);
            gamers[i].bombPlanted--;
            //console.log(gamers[i].name+" bomb after minus "+gamers[i].bombPlanted);
        }
    }
}
function explosionHelper(posY, posX, type) {
    if (posY > 0) {
        playField[posY - 1][posX].type = type;
        burnPlayer(posY - 1, posX, type);
    }
    if (posY < 13) {
        playField[posY + 1][posX].type = type;
        burnPlayer(posY + 1, posX, type);
    }
    if (posX > 0) {
        playField[posY][posX - 1].type = type;
        burnPlayer(posY, posX - 1, type);
    }
    if (posX < 19) {
        playField[posY][posX + 1].type = type;
        burnPlayer(posY, posX + 1, type);
    }
    playField[posY][posX].type = type;
    burnPlayer(posY, posX, type);
}
function burnPlayer(y, x, type) {
    x = x * 25;
    y = y * 25;
    if (type == 'Fire') {
        for (var k = 0; k < gamers.length; k++) {
            if (gamers[k].posX == x && gamers[k].posY == y) {
                gamers[k].lives > 0 ? gamers[k].lives-- : gamers[k].lives;
                //console.log(gamers[k].name+" lost life. "+gamers[k].lives+" Lives left.")
            }
        }
    }
}
