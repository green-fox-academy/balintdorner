var percent = '%'
var whitespace = ' '
for (var i = 0; i <= lineCount; i++) {
    if (i === 0 || i === lineCount) {
        console.log(percent.repeat(lineCount));
    } else {
        console.log('%' + whitespace.repeat(lineCount-2) + '%');
    }
}
