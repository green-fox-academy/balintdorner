var xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.giphy.com/v1/stickers/search?q=city&api_key=dc6zaTOxFJmzC', true);

xhr.send();
var list;

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        list = JSON.parse(xhr.response)
        creatGif()
    }
}

var getDiv = document.querySelector('div');

function creatGif() {
        for (var i = 0; i < 16; i++) {
        var newImage = document.createElement('img');
        var getGifUrl = list.data[i].images.original.url;
        newImage.setAttribute('src', getGifUrl)
        getDiv.appendChild(newImage)
    }
}
