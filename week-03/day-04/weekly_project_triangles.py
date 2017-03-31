from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def triangle(x, y, size):

    canvas.create_polygon(x, y+size, x-size, y-size*3**0.5/2,x+size, y-size*3**0.5/2, fill = '', outline = 'black')

def triangles(x, y, size):
    triangle(x, y, size)
    if size <=5:
        return ''
    else:
        triangles(x-size/2, y-size*3**0.5/4, size/2)
        triangles(x+size/2, y-size*3**0.5/4, size/2)
        triangles(x, y+size/2, size/2)

triangles(300, 300, 300)


root.mainloop()
