function headlineChanger() {
    var headlines = document.querySelectorAll('h1');
    for (var i = 0; i < headlines.length; i++) {
        headlines[i].textContent = 'Miss World 2017'
    }
}

headlineChanger()
