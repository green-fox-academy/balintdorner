let xhr = new XMLHttpRequest();


let input = document.querySelector('input')
let search = document.querySelector('button')
let frame = document.querySelector('iframe')
let getDiv = document.querySelector('section');
let p = document.querySelector('p');
let list;
let city = 'New+York'

search.addEventListener('click', function() {

    xhr.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + city, true);

    xhr.setRequestHeader("X-Mashape-Key", "wUWumAJ8mhmsh0bM1lGXzWyf0sF8p1wEUoejsntiavnGjjTZVs")
    xhr.setRequestHeader("Accept", "application/json")

    xhr.send();

    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            list = JSON.parse(xhr.response)
            console.log(list)
            var latitudeText = list.Results[0].lat;
            var longitudeText = list.Results[0].lon;
            p.innerText = 'Latitude: ' + latitudeText + '      Longitude: ' + longitudeText
        }
    }

    console.log(input.value)
    city = (input.value)
    frame.src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB_3Rf-W8VMLQQcFm7mrT2ZOjldoEvfLec&q='+ city;
})
