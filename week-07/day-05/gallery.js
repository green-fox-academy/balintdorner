var image = document.querySelector('.bigpicture')
var imageList = document.querySelectorAll('.small')
var left = document.querySelector('.left')
var rigth = document.querySelector('.right')

console.log(image)
console.log(imageList)
console.log(left)

function checkPosition() {
    var source = image.getAttribute('src')
    for (var i = 0; i < imageList.length; i++) {
        if (source === imageList[i].src) {
            var position = i
        }
    }
    return position
}

function photoRight() {
    var currentPosition = checkPosition()
    if (currentPosition == imageList.length-1) {
        image.src = imageList[0].src
    } else {
    image.src = imageList[currentPosition+1].src
}
}

function photoLeft() {
    var currentPosition = checkPosition()
    if (currentPosition == 0) {
        image.src = imageList[imageList.length-1].src
    } else {
    image.src = imageList[currentPosition-1].src
}
}


checkPosition()
left.addEventListener('click', photoLeft)
rigth.addEventListener('click', photoRight)
