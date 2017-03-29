# create a square drawing function that takes 1 parameter:
# the square size
# and draws a square of that size to the center of the canvas.
# draw 3 squares with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def square_drawer(size):
    canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2, fill = 'green')

square_drawer(150)
square_drawer(90)
square_drawer(60)

root.mainloop()
