# draw four different size and color rectangles.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_rectangle(145, 145, 155, 155, fill = 'green')
canvas.create_rectangle(175, 175, 195, 195, fill = 'blue')
canvas.create_rectangle(0, 0, 30, 30, fill = 'red')
canvas.create_rectangle(0, 200, 20, 220, fill = 'yellow')

root.mainloop()
