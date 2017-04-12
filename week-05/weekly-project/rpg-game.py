from tkinter import *

class Box(object):
    def __init__(self):
        self.testBoxX = 0
        self.testBoxY = 0
        self.background = [
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 1, 1, 1, 1, 0, 0, 1, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
        ]
        self.map()
#        self.check_if_wall_is_coming()
    def draw(self, canvas):
        self.main_character = PhotoImage(file = 'hero-down.png')
        character = canvas.create_image(self.testBoxX, self.testBoxY, anchor = NE, image = self.main_character)
        return character

    def map(self):
        self.wall = PhotoImage(file = 'wall.png')
        self.floor = PhotoImage(file = 'floor.png')
        for line in range(len(self.background)):
            for element in range(len(self.background[line])):
                if self.background[line][element] == 1:
                    canvas.create_image(element*72, line*72, anchor = NW, image = self.floor)
                else:
                    canvas.create_image(element*72, line*72, anchor = NW, image = self.wall)

    #def check_if_wall_is_coming(self):
    #    coords = canvas.coords(character)
    #    print(coords)



# Create the tk environment as usual
root = Tk()
canvas = Canvas(root, width=720, height=792)

# Creating a box that can draw itself in a certain position
box = Box()

# Create a function that can be called when a key pressing happens
class MainLoop():
    def on_key_press(self, e):
        # When the keycode is 111 (up arrow) we move the position of our box higher
        if e.keycode == 38:
            if box.testBoxY > 0:
                box.testBoxY = box.testBoxY - 72
        elif e.keycode == 40:
            if box.testBoxY < 720:
                box.testBoxY = box.testBoxY + 72
        elif e.keycode == 39:
            if box.testBoxX <= 648:
                box.testBoxX = box.testBoxX + 72
        elif e.keycode == 37:
            if box.testBoxX > 72:
                box.testBoxX = box.testBoxX - 72

        # and lower if the key that was pressed the down arrow
        # draw the box again in the new position
        box.draw(canvas)
mainloop = MainLoop()
# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", mainloop.on_key_press)
canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()

# Draw the box in the initial position
box.draw(canvas)
root.mainloop()
