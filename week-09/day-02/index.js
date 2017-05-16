'use strict'

var http = require('http');


//letrehoz egy uj szerverobjektumot
var server = http.createServer(handleRequest);

// ez a function fogja leirni h fog mukodni a szerver. De nodeJS-ben nem feltetlenul ezt hasznaljuk. Ehelyett hasznaljuk az Express-t. Ehhez:
//npm init
//npm install express --save
//a request object az infot a keresrol ez fogja tartalmazni. method, port, bongeszutipus, minden. url, get....
//response: ezzel tudunk valaszolni.
function handleRequest(request, response) {
    console.log(request)
    response.end("Hello")
}

//el kell inditani valamelyik porton. a szamitogep egy parkolo, es azon belul van egy csomo hely. egy port egy hely. a 80-as alapbol a default http keresekre valaszol. ez uresen hagyott. ilyen pl a 3000es is. es vannak olyan portok amik bizonyos portokon mukodnek. Ha ezt a progit lefutattom command lineon, akkor nem fog kilepni, hanem folyamat menni fog. es itt tudunk kommunikalni.
server.listen(3000)
