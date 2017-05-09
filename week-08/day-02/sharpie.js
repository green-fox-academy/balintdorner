/*Create a Sharpie constructor

We should know about each sharpie their color (which should be a string), width (which will be a floating point number), inkAmount (another floating point number)
When creating one, we need to specify the color and the width
Every sharpie is created with a default 100 as inkAmount
We can use() the sharpie objects
which decreases inkAmount by the width*/

function sharpie(color, width, inkAmount=100) {
    this.color = color;
    this.width = width;
    this.inkAmount = inkAmount;
}

function use(sharpie) {
    sharpie.inkAmount -= sharpie.width;
}

sharpie1 = new sharpie('yellow', 10)
console.log(sharpie1)
use(sharpie1)
console.log(sharpie1)
