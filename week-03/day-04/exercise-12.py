from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def polygon(x, y, size):

    canvas.create_polygon(x-size, y, x-size/2, y-size*3**0.5/2, x+size/2, y-size*3**0.5/2, x+size, y, x+ size/2, y+size*3**0.5/2, x-size/2, y+size*3**0.5/2, fill = '', outline = 'black')

def polygons(x, y, size):
    polygon(x, y, size)
    if size <=20:
        return ''
    else:
        polygons(x-size/4, y-size*3**0.5/4, size/2)
        polygons(x+size/2, y, size/2)
        polygons(x-size/4, y+size*3**0.5/4, size/2)

polygons(300, 300, 300)


root.mainloop()
