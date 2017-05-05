var image = document.querySelector('.bigpicture')
var imageList = document.querySelectorAll('.small')
var left = document.querySelector('.left')
var rigth = document.querySelector('.right')

console.log(image)
console.log(imageList)
console.log(left)

function checkPosition() {
    var position = image.getAttribute('src')
    for (var i = 0; i < imageList.length; i++) {
        if (position === imageList[i].src) {
            console.log(i)
            var posi = i
        }
    }
    return posi
}

function photoRight() {
    var currentPos = checkPosition()
    var nextPos = currentPos+1
    image.src = imageList[nextPos].src
}

function photoLeft() {
    var currentPos = checkPosition()
    var nextPos = currentPos-1
    image.src = imageList[nextPos].src
}


checkPosition()
left.addEventListener('click', photoLeft)
rigth.addEventListener('click', photoRight)
