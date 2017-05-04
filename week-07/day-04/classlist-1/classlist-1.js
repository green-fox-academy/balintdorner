var paragraphs = document.querySelectorAll('p');

if (paragraphs[2].getAttribute('class') === 'cat') {
    alert('YEAH CAT');
}

if (paragraphs[3].getAttribute('class') === 'dolphin') {
    paragraphs[0].textContent = 'pear';
}

if (paragraphs[0].getAttribute('class') === 'apple') {
    paragraphs[2].textContent = 'dog';
    paragraphs[0].style.backgroundColor = 'red';
    paragraphs[1].style.borderRadius = '0%';
}
