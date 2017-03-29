# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/purple-steps-3d/r4.png]

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

size = [10, 20, 30, 50, 80, 130, 210]

for i in range(1, 7):
    canvas.create_rectangle(size[i-1], size[i-1], size[i], size[i], fill = 'purple')



root.mainloop()
