# reproduce this:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/line-play/r1.png]


from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

for i in range(0, 300, 20):
    canvas.create_line(i, 0, 300, i, fill = 'purple')
    canvas.create_line(i, 300, 0, i, fill = 'green')

root.mainloop()
