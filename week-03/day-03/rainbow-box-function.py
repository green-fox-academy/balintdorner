# create a square drawing function that takes 2 parameters:
# the square size, and the fill color,
# and draws a square of that size and color to the center of the canvas.
# create a loop that fills the canvas with rainbow colored squares.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()



def square_drawer(size, color):
    firs_box = canvas.create_rectangle(150-size/2, 150-size/2, 150+size/2, 150+size/2, fill = color)
    return

color = ['#FF0000', '#FF7F00', '#FFFF00','#00FF00','#0000FF','#4B0082','#9400D3']
size = 300

for i in range(7):
    square_drawer(size, color[i])
    size += -42

root.mainloop()
