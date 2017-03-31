from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def circle(x, y, size):

    canvas.create_oval(x-size, y-size, x+size, y+size, fill = '', outline = 'black')

def circles(x, y, size):
    circle(x, y, size)
    if size <=20:
        return ''
    else:
        circles(x, y-size/2, size/2)
        circles(x+size*3**0.5/5, y+size*3**0.5/5, size/2)
        circles(x-size*3**0.5/5, y+size*3**0.5/5, size/2)

circles(300, 300, 300)


root.mainloop()
