from tkinter import *

class Box(object):
    def __init__(self):
        self.testBoxX = 65
        self.testBoxY = 0
        self.background = [
        [1, 1, 1, 0, 1, 0, 1, 1, 1, 1],
        [1, 1, 1, 0, 1, 0, 1, 0, 0, 1],
        [1, 0, 0, 0, 1, 0, 1, 0, 0, 1],
        [1, 1, 1, 1, 1, 0, 1, 1, 1, 1],
        [0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        [1, 0, 1, 0, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 1, 1, 1, 0, 0, 0, 1],
        [1, 0, 0, 0, 1, 1, 1, 1, 0, 1],
        [1, 1, 1, 0, 1, 0, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 1, 1, 1],
        ]

    def draw(self, canvas):
        self.main_character = PhotoImage(file = 'hero-down.png')
        canvas.create_image(self.testBoxX, self.testBoxY, anchor = NE, image = self.main_character)

    def map(self):
        self.wall = PhotoImage(file = 'wall.png')
        self.floor = PhotoImage(file = 'floor.png')
        for line in self.background:
            for j in range(10):
                if self.background[line][j] == 1:
                    canvas.create_image(line*75, j*75, image = self.floor)
                else:
                    canvas.create_image(line*75, j*75, image = 'wall.png')
        root.mainloop()


# Create the tk environment as usual
root = Tk()
canvas = Canvas(root, width=750, height=825)

# Creating a box that can draw itself in a certain position
box = Box()

# Create a function that can be called when a key pressing happens
class MainLoop():
    def on_key_press(self, e):
        # When the keycode is 111 (up arrow) we move the position of our box higher
        if e.keycode == 38:
            if box.testBoxY > 0:
                box.testBoxY = box.testBoxY - 75
        elif e.keycode == 40:
            if box.testBoxY < 750:
                box.testBoxY = box.testBoxY + 75
        elif e.keycode == 39:
            if box.testBoxX < 675:
                box.testBoxX = box.testBoxX + 75
        elif e.keycode == 37:
            if box.testBoxX > 75:
                box.testBoxX = box.testBoxX - 75

        # and lower if the key that was pressed the down arrow
        # draw the box again in the new position
        box.draw(canvas)
        box.map()
mainloop = MainLoop()
# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", mainloop.on_key_press)
canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()

# Draw the box in the initial position
box.draw(canvas)
box.map()
root.mainloop()
