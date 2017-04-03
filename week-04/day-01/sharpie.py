#Create Sharpie class
#We should know about each sharpie their color (which should be a string), width (which #will be a floating point number), ink_amount (another floating point number)
#When creating one, we need to specify the color and the width
#Every sharpie is created with a default 100 as ink_amount
#We can use() the sharpie objects
#which decreases inkAmount
import random

class Sharpie(object):

    def __init__(self, color, width, ink_amount = 10):
        self.color = color
        self.width = float(width)
        self.ink_amount = float(ink_amount)

    def use(self):
        random_usage = [5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
        x = random.choice(random_usage)
        self.ink_amount -= x
        return self.ink_amount

sharpie1 = Sharpie('red', 200.5)
sharpie2 = Sharpie('red', 200.5)
sharpie3 = Sharpie('red', 200.5)
sharpie4 = Sharpie('red', 200.5)
sharpie5 = Sharpie('red', 200.5)

print(sharpie1.color, sharpie1.width, sharpie1.use())
print(sharpie2.color, sharpie2.width, sharpie2.use())
