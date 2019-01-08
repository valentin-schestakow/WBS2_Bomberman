import * as socket     from "socket.io";

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