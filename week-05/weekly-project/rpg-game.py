from tkinter import *
import random

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
        self.draw_skeleton()
        self.draw_boss()
        self.label()
#        self.check_if_wall_is_coming()
    def draw(self, canvas):
        self.main_character = PhotoImage(file = 'hero-down.png')
        self.up = PhotoImage(file = 'up.png')
        self.right = PhotoImage(file = 'right.png')
        self.left = PhotoImage(file = 'left.png')
        self.character = canvas.create_image(self.testBoxX*72, self.testBoxY*72, anchor = NW, image = self.main_character)
        return self.character

    def map(self):
        self.wall = PhotoImage(file = 'wall.png')
        self.floor = PhotoImage(file = 'floor.png')
        for line in range(len(self.background)):
            for element in range(len(self.background[line])):
                if self.background[line][element] == 1:
                    canvas.create_image(element*72, line*72, anchor = NW, image = self.floor)
                else:
                    canvas.create_image(element*72, line*72, anchor = NW, image = self.wall)

    def move(self, x, y, picture):
        if 0 <= x <= 9 and 0 <= y <= 10:
            if self.background[y][x] == 1:
                canvas.delete(self.character)
                self.testBoxX = x
                self.testBoxY = y
                self.character = canvas.create_image(72*self.testBoxX, 72*self.testBoxY, anchor=NW, image = picture)

    def draw_skeleton(self):
        skeleton_coords = [[6, 1], [4, 10], [9, 8]]
        self.skeleton = PhotoImage(file = 'skeleton.png')
        for i in range(3):
            canvas.create_image(skeleton_coords[i][0]*72, skeleton_coords[i][1]*72, anchor = NW, image = self.skeleton)


    def draw_boss(self):
        self.boss_coords = [9, 0]
        self.boss = PhotoImage(file = 'boss.png')
        canvas.create_image(self.boss_coords[0]*72, self.boss_coords[1]*72, anchor = NW, image = self.boss)

    def label(self):
        self.w = Label(root, text="Hello Tkinter!")
        self.w.pack()
        self.w.place(anchor = E, width = 500, height = 200)

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
                box.move(box.testBoxX, box.testBoxY-1, box.up)
        #        box.testBoxY = box.testBoxY - 72
        elif e.keycode == 40:
            if box.testBoxY < 792:
                box.move(box.testBoxX, box.testBoxY+1, box.main_character)
        #        box.testBoxY = box.testBoxY + 72
        elif e.keycode == 39:
            if box.testBoxX <= 720:
                box.move(box.testBoxX+1, box.testBoxY, box.right)
        #        box.testBoxX = box.testBoxX + 72
        elif e.keycode == 37:
            if box.testBoxX > 0:
                box.move(box.testBoxX-1, box.testBoxY, box.left)
        #        box.testBoxX = box.testBoxX - 72

        # and lower if the key that was pressed the down arrow
        # draw the box again in the new position
mainloop = MainLoop()
# Tell the canvas that we prepared a function that can deal with the key press events
canvas.bind("<KeyPress>", mainloop.on_key_press)
canvas.pack()

# Select the canvas to be in focused so it actually recieves the key hittings
canvas.focus_set()

# Draw the box in the initial position
box.draw(canvas)
root.mainloop()
