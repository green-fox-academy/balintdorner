
//uj adatstrukture
var xhr = new XMLhttpRequest();

//amikor eleri a 4. lepest, akkor futtatja le a functiont
xhr.onreadystatechange = function() {
    console.log(xhr)
}

// igy kerunk le adatot. get keres, link hogy honnan, true asszinkronitas (alapboltrue, nem feltetlenul kell megadni)
//kommunikalunk a szerverrel
//GET: lekeri az adatbazisban levo adatokat
//POST: te szeretnel kuldeni feladatot
xhr.open('GET', 'link', true)
xhr.send()

//send utan mindig ujra open kell ujra, mert azzal elkudltuk (pl mintha fajlmanipulacional bezartuk volna)
//kuldesnel meg kell adni, hogy milyen tipust fogunk kuldeni, a Content-typepal
xhr.setRequestHeader('Content-type', 'text/html')

//elkuldjuk
xhr.send()

//megnezzuk, hogy kaptunk e valaszt, ha kaptunk, akkor megkapjuk a hasznalhatatlan objektuomot, amit bekertunk, de ez meg egy hasznalhatatlan adat, ezert parsolom
xhr.response

//parsolas, igyt mar hasznalhato objektum lesz es innentol mindent tudunk vele csinalni, amit egy objecttel lehet jsben
console.log(JSON.parse(xhr.response))

//ezzel tudunk felulirni valamit a szerveren
xhr.put()
