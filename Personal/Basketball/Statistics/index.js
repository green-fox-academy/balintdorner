var player = document.querySelector('.players');
var statistics = document.querySelector('.statistics');
var where = document.querySelector('.where');
var sort = document.querySelector('.wheretext');
var button = document.querySelector('button')

function datasaver() {
    playerText = player.value;
    statisticsText = statistics.value;
    whereText = where.value;
    sortText = sort.value;
}

button.addEventListener('click', datasaver)
