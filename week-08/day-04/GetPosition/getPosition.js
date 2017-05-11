let xhr = new XMLHttpRequest();


let input = document.querySelector('input')
let search = document.querySelector('button')
let frame = document.querySelector('iframe')
let city = 'New+York'

function searching() {
    console.log(input.value)
    city = (input.value)
    frame.src = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyB_3Rf-W8VMLQQcFm7mrT2ZOjldoEvfLec&q='+ city
}

search.addEventListener('click', searching)

xhr.open('GET', 'https://devru-latitude-longitude-find-v1.p.mashape.com/latlon.php?location=' + city, true);

xhr.setRequestHeader("X-Mashape-Key", "wUWumAJ8mhmsh0bM1lGXzWyf0sF8p1wEUoejsntiavnGjjTZVs")
xhr.setRequestHeader("Accept", "application/json")

xhr.send();

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        list = JSON.parse(xhr.response)
        console.log(list)
    }
}
