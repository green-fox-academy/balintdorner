# create a line drawing function that takes 2 parameters:
# the x and y coordinates of the line's starting point
# and draws a 50 long horizontal line from that point.
# draw 3 lines with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()
def linedrawer(x_zero, y_zero):
    canvas.create_line(x_zero, y_zero, x_zero + 50, y_zero, fill ='green')
    return

linedrawer(10, 10)
linedrawer(50, 50)
linedrawer(0, 100)
linedrawer(100, 200)
root.mainloop()
