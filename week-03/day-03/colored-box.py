# draw a box that has different colored lines on each edge.

from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

canvas.create_rectangle(50, 50, 250, 250, fill = "green") #outline = 'red')
canvas.create_line(50, 50, 50, 250, fill ='red', width = 5)
canvas.create_line(50, 50, 250, 50, fill ='yellow', width = 5)
canvas.create_line(250, 50, 250, 250, fill ='purple', width = 5)
canvas.create_line(50, 250, 250, 250, fill ='black', width = 5)
root.mainloop()
