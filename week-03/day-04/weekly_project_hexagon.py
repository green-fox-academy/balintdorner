from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

def polygon(x, y, size):

    canvas.create_polygon(x-size, y, x-size/2, y-size*3**0.5/2, x+size/2, y-size*3**0.5/2, x+size, y, x+ size/2, y+size*3**0.5/2, x-size/2, y+size*3**0.5/2, fill = '', outline = 'black')

def polygons(x, y, size):
    polygon(x, y, size)
    if size <=10:
        return ''
    else:
        polygons(x-size/3*2, y, size/3)
        polygons(x+size/3*2, y, size/3)
        polygons(x-size/3*1,y+size*3**0.5/3, size/3)
        polygons(x+size/3*1,y+size*3**0.5/3, size/3)
        polygons(x-size/3*1,y-size*3**0.5/3, size/3)
        polygons(x+size/3*1,y-size*3**0.5/3, size/3)

polygons(300, 300, 300)


root.mainloop()
