#Reuse your Sharpie class
#Create SharpieSet class
#it contains a list of Sharpie
#count_usable() -> sharpie is usable if it has ink in it
#remove_trash() -> removes all unusable sharpies
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

sharpie1 = Sharpie('red', 1)
sharpie2 = Sharpie('blue', 2)
sharpie3 = Sharpie('green', 3)
sharpie4 = Sharpie('yellow', 4)
sharpie5 = Sharpie('orange', 5)

sharpie_list = [sharpie1.use(), sharpie2.use(), sharpie3.use(), sharpie4.use(), sharpie5.use()]

print(sharpie_list)

class SharpieSet(object):
    def __init__(self):
        for i in range(5):
            

    def counter(self):
        y = 0
        for i in range(len(x)):
            if x[i]> 0:
                y += 1

sharpies = SharpieSet()
print(sharpies.counter)
