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
var size = 25;
var playField;
function run(server) {
    console.log("Start GameServer");
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
        socket.on('bombplace', function (Field) {
            socket.broadcast.emit('bombplace', Field);
        });
    });
}
exports.run = run;
function generateField() {
    this.playField = [];
    for (var i = 0; i < 14; i++) {
        this.playField[i] = [];
        for (var j = 0; j < 20; j++) {
            this.context.beginPath();
            this.context.fillStyle = ['#eee', '#eee'][(i + j) % 2];
            this.context.fillRect(j * size, i * size, size, size);
            this.playField[i][j] = new Field(j * size, i * size);
            if (i > 0 && Math.random() * 100 > 40 && i < 14) {
                this.context.fillStyle = ['green', 'green'][(i + j) % 2];
                this.context.fillRect(j * size, i * size, size, size);
                this.playField[i][j] = new Block(j * size, i * size);
            }
            this.context.closePath();
        }
    }
}
var Field = (function () {
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
