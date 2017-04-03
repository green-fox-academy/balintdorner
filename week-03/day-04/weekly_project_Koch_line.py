from tkinter import *

root = Tk()

canvas = Canvas(root, width='600', height='600')
canvas.pack()

#def line(x, y, size):

#canvas.create_line(x, y, x+size, y)
canvas.create_line(100, 100, 150, 100)
canvas.create_line(150, 100, 175, 100-100*3**0.5/4)
canvas.create_line(175, 100-100*3**0.5/4,200, 100)
canvas.create_line(200, 100,250, 100)
canvas.create_line(175, 100,175, 50)
#canvas.create_line(175, 75, 200, 100)
#canvas.create_line(200, 100, 250, 100)
    #canvas.create_line(x, y, x+size, y)

def lines(x, y, size, recur):
    line(x, y, size)
    if recur<= 10:
        return ''
    else:
        lines(x, y+size/3*2, size, recur/2)


#lines(100, 100, 30, 20)

root.mainloop()
