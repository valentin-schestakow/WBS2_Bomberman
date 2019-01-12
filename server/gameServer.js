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
var size = 25;
var playField;
function run(server) {
    generateField();
    console.log("Start GameServer");
    var io = socket(server);
    console.log("Generated Field: ");
    printField();
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
        socket.on('bombplace', function (Field) {
            socket.broadcast.emit('bombplace', Field);
        });
        socket.on('getField', function (field) {
            field = this.playField;
            socket.broadcast.emit('getField', this.playField);
            //playField = field;
            //console.log(field);
            printField();
        });
    });
}
exports.run = run;
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
function generateField() {
    playField = [];
    for (var i = 0; i < 14; i++) {
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
        //this.type = type;
        this.type = "Field";
        this.posX = posX;
        this.posY = posY;
    }
    Field.prototype.getType = function () {
        return this.type;
    };
    return Field;
}());
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
