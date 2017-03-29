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

for i in range(0, 301, 20):
    drawing(0, i)
    drawing(i, 0)
    drawing(300, i)
    drawing(i, 300)

root.mainloop()
