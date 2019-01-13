import * as socket from "socket.io";
import {Gamer} from "./Gamer";
import {Player} from "./server"


let size: number = 25;
let playField: Field[][];
let activeBombs: Bomb[];
let activeBomb: Bomb;
let gamer: Gamer;
let myPlayer: Player;
let gamers: Gamer[] = [];

export function run(server) {
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
        socket.on('gamer', function (player: Player) {
            console.log("Player connected: "+player.username);
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
        })
    });
}


function spawnGamer(newPlayer: Player) {
    let newGamer;
    let name = "bilbo";
    name = newPlayer.username;
    let playerNumb = gamers.length;
    switch (playerNumb) {
        case 0: {
            newGamer = new Gamer(0, 0, newPlayer.username);
            newGamer.color = "blue";
            gamers.push(newGamer);
            break;
        }
        case 1: {
            newGamer = new Gamer(0, 25, newPlayer.username);
            newGamer.color = "yellow";
            gamers.push(newGamer);
            break;
        }
        case 2: {
            newGamer = new Gamer(25, 0, newPlayer.username);
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
    let row = "\t0|1|2|3|4|5|6|7|8|9|0|1|2|3|4|5|6|7|8|9|\n";
    for (let i = 0; i < playField.length; i++) {
        row = row.concat(i + ":\t");
        for (let j = 0; j < 20; j++) {
            row = row.concat(playField[i][j].type.charAt(0) + "|");
        }
        row = row.concat("\n");
    }
    console.log(row);
}

//funktion that generates and fills the playfield with random blocks
function generateField() {
    playField = [];
    for (let i = 0; i < 15; i++) {
        playField[i] = [];
        for (let j = 0; j < 20; j++) {
            playField[i][j] = new Field(j * size, i * size);
            if (i > 0 && Math.random() * 100 > 40 && i < 14) {
                playField[i][j] = new Block(j * size, i * size);
            }
        }
    }
}

export class Field {
    public posX: number;
    public posY: number;
    public type: String;

    constructor(posX: number, posY: number) {
        this.type = "Field";
        this.posX = posX;
        this.posY = posY;
    }
}

export class Block extends Field {
    constructor(posX: number, posY: number) {
        super(posX, posY);
        this.type = "Block";
        this.posX = posX;
        this.posY = posY;
    }
}

export class Bomb extends Field {
    public timeLeft: number;
    public range: number = 1;

    constructor(posX: number, posY: number, timeLeft: number) {
        super(posX, posY);
        this.timeLeft = timeLeft;
        this.type = "Bomb";
        this.posX = posX;
        this.posY = posY;
    }
}

function checkGamerAction(action: string, gamer: Gamer) {
    console.log(gamer.name+": "+"aktuelle Pos = "+" x:"+gamer.posX+" y:"+gamer.posY);
    if (action === 'moveUp') {
        if (gamer.posY > 0 && playField[gamer.posY / 25 - 1][gamer.posX / 25].type !== 'Block') {
            gamer.posY -= 25;
        }
    } else if (action === 'moveDown') {
        if (gamer.posY / 25 < 14 && playField[gamer.posY / 25 + 1][gamer.posX / 25].type !== 'Block') {
            gamer.posY += 25;
        }
    } else if (action === 'moveLeft') {
        if (gamer.posX > 0 && playField[gamer.posY / 25][gamer.posX / 25 - 1].type !== 'Block') {
            gamer.posX -= 25;
        }
    } else if (action === 'moveRight') {
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
            let interval = setInterval(() => {
                if (activeBomb.timeLeft > 0) {
                    activeBomb.timeLeft--;
                } else {
                    bombExplode(activeBomb.posY / 25, activeBomb.posX / 25, gamer);
                    clearInterval(interval);
                }
            }, 1000);
        }
    }


    for (let i = 0; i < gamers.length; i++){
        if(gamers[i].name == gamer.name){
            gamers[i] = gamer;
            console.log(gamers[i].name+": "+action+" x:"+gamers[i].posX+" y:"+gamers[i].posY);
        }
    }
    for(let findGamer of gamers){
        console.log(findGamer.name+": "+"aktuelle pos von spieler"+" x:"+findGamer.posX+" y:"+findGamer.posY);
    }

    return gamers;
}

function bombExplode(posY: number, posX: number, gamer: Gamer) {
    explosionHelper(posY, posX, "Fire");
    //eprintCanvas(); socketEMIT!
    var timeleft = 1;
    let interval = setInterval(() => {
        if (timeleft > 0) {
            timeleft--;
        } else {
            explosionHelper(posY, posX, "Field");
            gamer.bombPlanted--;
            //socket emit
            //socket.emit('getField', playField);
            clearInterval(interval);
        }
    }, 1000);
}

function explosionHelper(posY: number, posX: number, type: String) {
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



