from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

canvas.create_rectangle(0, 0, 600, 600, fill = 'yellow')

def square(x, y, size):
    canvas.create_rectangle(x, y, x+size, y+size)

def squares(x,y,size):
    square(x,y, size)
    if size <= 5:
        return ''
    else:
        squares(x+size*1/3, y, size/3)
        squares(x+2/3*size, y+1/3*size, size/3)
        squares(x, y+1/3*size, size/3)
        squares(x+1/3*size, y+2/3*size, size/3)

squares(0, 200, 200)
squares(200, 0, 200)
squares(400, 200, 200)
squares(200, 400, 200)
root.mainloop()
