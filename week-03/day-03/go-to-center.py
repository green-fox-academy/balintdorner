# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a line from that point to the center of the canvas.
# draw 3 lines with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def linedrawer(x_zero, y_zero):
    canvas.create_line(x_zero, y_zero, 150, 150, fill ='green')
    return
linedrawer(0, 0)
linedrawer(300, 0)
linedrawer(0, 300)
root.mainloop()
