# fill the canvas with a checkerboard pattern.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


x = 300/8
y = 300/8

for i in range(8):
    for j in range(8):
        if (i+j) % 2 == 0:
            canvas.create_rectangle(i*x, j*y, (i+1)*x, (j+1)*y, fill = 'black')
root.mainloop()
