from tkinter import *

class Kinter():
    def __init__(self, width, height):
        self.root = Tk()
        self.width = width
        self.height = height
        self.canvas = Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.snake = Snake(self.canvas, 10, 10, 10)
        self.root.mainloop()

class Snake():
    def __init__(self, canvas, x, y, size):
        self.x = x
        self.y = y
        self.size = size
        self.canvas = canvas
        self. line = None
        self.create()

    def create(self):
        x1 = self.x
        y1 = self.y
        x2 = self.x
        y2 = self.y + self.size
        self.line = self.canvas.create_line(x1, y1, x2, y2, width = 200)

game = Kinter(500, 500)
