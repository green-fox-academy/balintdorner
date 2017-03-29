# create a square drawing function that takes 2 parameters:
# the x and y coordinates of the square's top left corner
# and draws a 50x50 square from that point.
# draw 3 squares with that function.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

def square_drawer(x_zero, y_zero):
    canvas.create_rectangle(x_zero, y_zero, x_zero+50, y_zero+50, fill = 'green')

square_drawer(10,10)
square_drawer(60,60)
square_drawer(110,110)

root.mainloop()
