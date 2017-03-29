# divide the canvas into 4 equal parts
# and repeat this pattern in each quarter:
# [https://github.com/greenfox-academy/teaching-materials/blob/master/exercises/drawing/line-play/r1.png]


from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

for i in range(0, 150, 10):
    canvas.create_line(i, 0, 150, i, fill = 'purple')
    canvas.create_line(i, 150, 0, i, fill = 'green')

    canvas.create_line(150+i, 150, 300, 150+i, fill = 'purple')
    canvas.create_line(150+i, 300, 150, 150+i, fill = 'green')

    canvas.create_line(150+i, 0, 300, i, fill = 'purple')
    canvas.create_line(150+i, 150, 150, i, fill = 'green')

    canvas.create_line(0, 150+i , i, 300, fill = 'green')
    canvas.create_line(i, 150, 150, 150+i, fill = 'purple')

root.mainloop()
