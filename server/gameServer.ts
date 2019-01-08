import * as socket     from "socket.io";


let size: number = 25;
let playField: Field[][];

export function run(server){
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




function generateField(){
    this.playField = [];
    for (let i = 0; i < 14; i++) {
        this.playField[i] = [];
        for (let j = 0; j < 20; j++) {
            this.context.beginPath();

            this.context.fillStyle = ['#eee', '#eee'][(i + j) % 2];
            this.context.fillRect(j * size, i * size, size, size);
            this.playField[i][j] = new Field(j * size, i * size);
            if (i > 0  && Math.random() * 100 > 40 && i < 14 ) {
                this.context.fillStyle = ['green', 'green'][(i + j) % 2];
                this.context.fillRect(j * size, i * size, size, size);
                this.playField[i][j] = new Block(j * size, i * size);
            }

            this.context.closePath();
        }
    }
}

class Field {
    public posX: number;
    public posY: number;
    public type: String;
    constructor(posX:number, posY: number){
        //this.type = type;
        this.type = "Field";
        this.posX = posX;
        this.posY = posY;
    }
    getType(){
        return this.type;
    }
}

export class Block extends Field {
    constructor(posX:number, posY: number ){
        super(posX, posY);
        this.type = "Block";
        this.posX = posX;
        this.posY = posY;
    }
}