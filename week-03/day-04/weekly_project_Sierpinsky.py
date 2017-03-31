from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def square(x, y, size):

    canvas.create_rectangle(x-size/3, y-size/3, x+size/3, y+size/3, fill = 'red')

def squares(x, y, size):
    square(x, y, size)
    if size<= 10:
        return ''
    else:
        squares(x-size/3*2, y, size/3)
        squares(x, y-size/3*2, size/3)
        squares(x, y+size/3*2, size/3)
        squares(x+size/3*2, y, size/3)
        squares(x+size/3*2, y+size/3*2, size/3)
        squares(x-size/3*2, y+size/3*2, size/3)
        squares(x+size/3*2, y-size/3*2, size/3)
        squares(x-size/3*2, y-size/3*2, size/3)

squares(300, 300, 300)


root.mainloop()
