import * as socket     from "socket.io";


let size: number = 25;
let playField: Field[][];

export function run(server){
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
        socket.on( 'getField', function (field) {
            field = this.playField;
            socket.broadcast.emit('getField', this.playField);
            //playField = field;
            //console.log(field);
            printField();
        })
    });
}


function printField(){
    let row = "\t0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|\n";
    for (let i = 0; i < playField.length; i++ ){
        row = row.concat(i+":\t");
        for (let j = 0; j < 20; j++ ){
            row = row.concat(playField[i][j].type.charAt(0)+"|");
        }
        row = row.concat("\n");
    }
    console.log(row);
}

function generateField(){
    playField = [];
    for (let i = 0; i < 14; i++) {
        playField[i] = [];
        for (let j = 0; j < 20; j++) {
            playField[i][j] = new Field(j * size, i * size);
            if (i > 0  && Math.random() * 100 > 40 && i < 14 ) {
                playField[i][j] = new Block(j * size, i * size);
            }
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