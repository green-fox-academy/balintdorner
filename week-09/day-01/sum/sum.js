let sumElements = function(array) {
    let total = 0;
    try{
        array.forEach(function(el) {
            if (typeof el === 'number') {
            total += el;
            }
        });
    }
    catch(err) {
        return total;
    }
    return total;
};


let list = [2, 3, 4]

console.log(sumElements(list))

module.exports = sumElements;
