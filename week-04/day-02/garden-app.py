class Garden(object):
    def __init__(self, types, color, water):
        self.types = types
        self.color = color
        self.water = water

    def water(self):
        self.quantity = 40:

class Flower(Garden):
    def __init__(self, types, color, water):
        self.types = types
        self.color = color
        self.water = water

    def printing(self):
        if self.water < 5:
            print("The " + self.color + " " +  self.types + " needs water.")
        else:
            print("The " + self.color + " " +  self.types + " doesnt need water.")


#class Tree(Garden):
#    def __init__(self, color, wasser):
#        self.color = color
#        self.wasser = wasser
#        if wasser < 10:
#            print("The " + self.color + " Tree needs water")
#        else:
#            print("The " + self.color + " Tree doesnt need water")



flower1 = Flower('flower', 'yellow', 10)
flower2 = Flower('flower', 'blue', 20)
#tree1 = Tree('tree', 'purple', 20)
#tree2 = Tree('tree', 'orange', 20)
flower1.printing()
flower2.printing()
