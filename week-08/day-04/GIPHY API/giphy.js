let xhr = new XMLHttpRequest();

xhr.open('GET', 'http://api.giphy.com/v1/stickers/search?q=city&api_key=dc6zaTOxFJmzC', true);

xhr.send();
let list;

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
        list = JSON.parse(xhr.response)
        console.log(list)
        creatGif()
    }
}

let getDiv = document.querySelector('div');
let newImage;

function creatGif() {
        for (let i = 0; i < 16; i++) {
        let newImage = document.createElement('img');
        let getImgUrl = list.data[i].images.original_still.url;
        newImage.setAttribute('src', getImgUrl)
        newImage.addEventListener('click', function() {
            let getGifURL = list.data[i].images.original.url;
            newImage.setAttribute('src', getGifURL)
            console.log('alma')
        });
        getDiv.appendChild(newImage)
    }
}
