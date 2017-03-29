# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# fill the canvas with lines from the edges, every 20 px, to the center.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def drawing(x, y):
    canvas.create_line(x, y, 150, 150)
    return

drawing(0,0)

x = 0
y = 0

for i in range(16):
    for j in range(16):
        drawing(20*i, 20*j)
        x +=20
        y +=20
root.mainloop()
