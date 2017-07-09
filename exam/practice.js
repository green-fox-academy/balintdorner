'use strinct';


//IIFE -- zarojelbe tesszuk az egez functiont, plusz a vegen megegy (), igy automatikusan meghivodik a function amikor csinaljuk
(function () {
    console.log('alma');
})();

// Closures
// A functionok elerek a functionon kivuli valtozokat is, igy nem kell oket paramaterkent atadni
const name = 'Bond';
function greeter() {
    console.log('hello ' + name);
};
//Az olyan nyelvek amik ezt nem tamogatjak, ott parameterkent kene beadni, hogy Bond
function greeter(name) {
    console.log('hello ' + name);
};


//created anonymus function, assigned to a variable
let example = function(x) {
    return x * 3;
};

// Higher order functions -
//Functions that operate on other functions, either by taking them as arguments or by returning them, are called higher-order functions.
// i.e.: filter, map

//built in methods splice, forEach, map, filter
let names = ['Bela', 'Atesz', 'Gabi', 'Jani', 'Peti', 'Gyuri']

//array.splice(honnan, mennyit, insertItem1, insertItem2, ...)
names.splice(2,4, 'Tibi')
//names = ['Bela', 'Atesz', 'Tibi']

//arr.forEach(function(elment, index, teljes lista)
names.forEach(function(element) {
    console.log(element);
});

//let new_array = arr.map(function callback(currentValue, index, array)
//egy uj arraybe teszi a function eredmenyet
let numbers = [1, 5, 10, 15];
let doubles = numbers.map(function(x) {
   return x * 2;
});

//let newArray = arr.filter(callback[, thisArg])
//egy uj arraybe teszi a functionbol fiterezett teteleket. itt a 6 betunel hosszabbakat
let words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
let longWords = words.filter(function(word){
  return word.length > 6;
})


// //unit testing
// //main file
// const counter = function(number) {
//     let result = number * 2;
//     return result
// }

// module.exports = counter;

// //test file
// //npm install tape
// var test = require('tape');
// var count = require('main file eleresi utvonala')

// test('counter', function (t) {
//     let test1 = 3
//     t.equal(validator(test1), 6, 'egesz szamra jo');

//     var test2 = 0
//     t.equal(validator(test2), 0, 'nullaval jo');
// t.end();
// });


//DATABASE-adatbazis
// CREATE DATABASE  nev: adatbazis letrehoza
// Show databases: megmutatja milyen tablaink vannk
// Use nev: melyik tablat hasznalom
// SELECT database: megmutatja melyiket hasznalom
// DROP DATABE IF EXIST nev: torles
// Filterezes: SELECT csaladi nev pl
// 		FROM tablanev
// 		WHERE varos = 'BP'
// 		//WHERE varos like 'D%' az osszes varos ami Dvel kezdodik
// 		//WHERE varos like '___D' negybetus varos ami Dre vegzodik
// A budapestieket fogja listazni
// A WHEREhez mehet minden logikai cuccc mint az IF fgbbe
// ES &&    OR||
// IS NULL: azt ellenorizzuk h ures e

// sorbarendezes: SELECT csaladi nev pl
// 		FROM tablanev
// ORDER BY varos
// INSERT INTO table mit -tablaba teszunk uj adatot


//REST CONCEPT
// REST stands for Representational State Transfer. (It is sometimes spelled "ReST".) It relies on a stateless, 
// client-server, cacheable communications protocol -- and in virtually all cases, the HTTP protocol is used.

// REST is an architecture style for designing networked applications. The idea is that, rather than using complex 
// mechanisms such as CORBA, RPC or SOAP to connect between machines, simple HTTP is used to make calls between machines.

// In many ways, the World Wide Web itself, based on HTTP, can be viewed as a REST-based architecture.
// RESTful applications use HTTP requests to post data (create and/or update), read data (e.g., make queries), 
// and delete data. Thus, REST uses HTTP for all four CRUD (Create/Read/Update/Delete) operations.

// Mi a REST?

// A REST egy HTTP protokollra fejlesztett kommunikációs architektúra típus, mely kliens és szerver közti 
// kommunikáció megvalósítására használható. Kihasználja a HTTP állapotkódokat és metódusokat egyaránt, sőt a specifikáció 
// megköveteli azok használatát, bár az egyedi fejlesztésű REST interfészek tervezése során ezekre gyakran nem ügyelnek a fejlesztők. 
// A kérések URI-k használatával történnek, melyek erőforrásokat azonosítanak, és az URI-k egységes interfészt 
// biztosítanak a kliens számára. Minden kérésre azonos formátumban reagál a szerver, ez általában JSON,
// de használható még HTML és XML formátum is. Fontos, hogy a kérések állapotmentesek, tehát nem beszélhetünk „munkafolyamatról”, 
// így az authorizáció folyamatos figyelmet igényel.


//HOW THE INTERNET WORKS
// Internet is a system designed to move clientInformation
// Send binary information(0,1)
// BANDWIDTH: savszelesseg
// Hogyan kuldjuk a biteket? Fennyel, optikai kabelen keresztul, vagy radiohullamokkal
// Vinc Cerf es Bob Kahn invented
// Az internet egy meno architecture kulonbozo protokollokra epitve
// Protocol: szabalyok aminek menten a gepek komunikalnak egymassal
// IP: a computer address
// DNS(Domain Name System): dns szerverek taroljak, hogy melyik domainhez milyen ip tartozik. felhasznalo beuti h gugli.hu,
// elmegy egy DNS szerverhez a keres, az ha tudja valaszol, ha nem megkerdezi a tobbi DNS-t, aztan ha megvan a valasz, akkor visszakuldi
// az IP-t a felhasznalonak es igy jutunk el a gugli.hu-ra
// Informacio aramlas gepek kozott: mintha egy csomagkuldovel kuldenenk csomagot. arra megy a csomagkuldo a varosban, amerre kicsi a forgalom
// Lehet, hogy vmit tobb csomagban kell elkuldeni mert egybe nem fer be(egy film pl). Az utakon a routerek a forgalomiranyitok.
// Honnan tudjuk, hogy minden csomag megerkezett? Ezert van TCP (Transmission control protocol): megnezti, hogy minden megvan e, ha igen pipa, ha
// nem, keri ujra az adatokat
// Web address = URL(Uniform resource locator) = honlap cim
// HTTP(Hypertext Transfert Protocol): amikor be akarunk lepni egy oldalra, akkor ezen a HTTP nyelven kommunikal a gep es a server.
// Gyakorlatilag get HTTP requestet kuldunk
// HTML: Hypertext Markup Language
// HTTPS: biztonsagos kommunikaco
// Secure: Ceasar Cypher: x karakterrel eltoljuk az osszeset, helyette, minden karaktert mas szammal tolunk, es egy keyn taroljuk
// h melyiket mennyivel. still not good enough.
// public key: mindenki hasnzalhatja, private: csak akinek hozzaferese van. 
//a postaladaba a publikkal lehet adatot kuldeni, de dekodolni mar csak a privatetel lehet
//http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf OLVASNIIIIII!!!!!

// URL reszei:
// HTTPS://                             =  protocol    (protocol meg a FTP is pl)
// www.                                  = aldomain
// Example.org                      = domain, HOST
// /Apple/14/Kukac              = PATH
// ?                                           = query string
// Kecske=geza&aroka=4     = paramaaterek
// #uborka                               = ez nem megy el a szerverhez, csak azt mutatja meg hogy hova ugorjon az                         
//                                                   oldalon belul a link. Hash vagy ancor.



