# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps/r3.png]

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

size = 0

for i in range(19):
    canvas.create_rectangle(size, size, size+10, size+10, fill = 'purple')
    size += 10

root.mainloop()
