function imageChanger() {
    var images = document.querySelectorAll('img');
    for (var i = 0; i < images.length; i++) {
        images[i].src = 'https://scontent.fomr1-1.fna.fbcdn.net/v/t1.0-9/16174426_1610572962305454_3563132471993869289_n.jpg?oh=50802c6739faaaf5f84c0d0fa0440733&oe=598BC807'
    }
}

imageChanger()
