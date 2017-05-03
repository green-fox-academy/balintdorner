// Crate a program that draws a chess table like this
//
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
// % % % %
//  % % % %
//

for (var i = 0; i < 10; i++) {
    if (i % 2 === 1) {
        console.log('% % % %')
    } else {
        console.log(' % % % %')
    }
}
