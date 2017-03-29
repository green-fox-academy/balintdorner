# draw the night sky:
# - The background should be black
# - The stars should be small squares
# - The stars should have random positions on the canvas
# - The stars should have random color (some shade of grey)

import random
from tkinter import *

root = Tk()

canvas = Canvas(root, width='300', height='300')
canvas.pack()

bubble = list(range(11, 280))
colors = ["#696969", "#808080", "#A9A9A9", "#C0C0C0", "#D3D3D3", "#DCDCDC"]

canvas.create_rectangle(10, 10, 290, 290, fill = 'black')

for i in range(random.randint(300,500)):
    x= random.choice(bubble)
    y= random.choice(bubble)
    color = random.choice(colors)
    canvas.create_rectangle(x, y, x+3, y+3, fill = color)

root.mainloop()
