from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def square(x, y, size, width):

    canvas.create_rectangle(x, y, x+size, y+size, width = width)

def squares(x, y, size, width):
    square(x, y, size, width)
    if size<= 40:
        return ''
    else:
        squares(x-size/4, y-size/4, size/2, width/2)
        squares(x+size/4*3, y-size/4, size/2, width/2)
        squares(x+size/4*3, y+size/4*3, size/2, width/2)
        squares(x-size/4, y+size/4*3, size/2, width/2)
        #squares(x+x/2, y+y/2, size/2, width/2)
        #squares(x-x/2, y+y/2, size/2, width/2)

squares(150, 150, 300, 20)

root.mainloop()
