var paragraphs = document.querySelectorAll('p');

for (var i = 0; i < paragraphs.length; i++) {
    paragraphs[i].textContent = paragraphs[3].textContent;
}
