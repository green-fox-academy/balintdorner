# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/triangles/r5.png]

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()


for i in range(0, 260, 10):
    canvas.create_line(150-i/3**0.5, 40+i, 300-i*1.15, 300)
    canvas.create_line(150+i/3**0.5, 40+i, 0+i*1.15, 300)
    canvas.create_line(150-i/3**0.5, 40+i, 150+i/3**0.5, 40+i )
    #canvas.create_line(150+i, 100+i, 20+i, 280)

root.mainloop()
