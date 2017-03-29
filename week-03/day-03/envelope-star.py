# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/envelope-star/r2.png]

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

for i in range(0, 150, 10):
    canvas.create_line(i, 150, 150, 150+i, fill = 'green')
    canvas.create_line(i, 150, 150, 150-i, fill = 'green')
    canvas.create_line(150+i, 150, 150, 0+i, fill = 'green')
    canvas.create_line(150+i, 150, 150, 300-i, fill = 'green')
root.mainloop()
