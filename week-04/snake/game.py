from tkinter import *
import random
import threading

class Kinter():

    def __init__(self, width, height):
        self.dx = 1
        self.dy = 1
        self.count = 0
        self.root = Tk()
        self.width = width
        self.height = height
        self.canvas = Canvas(self.root, width=self.width, height=self.height)
        self.canvas.pack()

        self.snake = Snake(self.canvas, 10, 10, 10)

        self.direction = 'down'
        self.root.bind('<Up>', self.up)
        self.root.bind('<Left>', self.left)
        self.root.bind('<Down>', self.down)
        self.root.bind('<Right>', self.right)
        self.moving()
        self.root.mainloop()

    def moving(self):
        if self.direction == 'down':
            self.snake.down(self.dx, self.dy)

        elif self.direction == 'right':
            self.snake.right(self.dx, self.dy)

        elif self.direction == 'up':
            self.snake.up(self.dx, self.dy)

        elif self.direction == 'left':
            self.snake.left(self.dx, self.dy)

        self.canvas.after(128, self.moving)

    def down(self, event):
        self.direction = 'down'

    def right(self, event):
        self.direction = 'right'

    def up(self, event):
        self.direction = 'up'

    def left(self, event):
        self.direction = 'left'

class Snake():
    def __init__(self, canvas, x, y, size):
        self.x = x
        self.y = y
        self.dx = 3 #speed
        self.dy = 3 #speed
        self.size = size
        self.canvas = canvas
        self.rect = None
        self.head()
        self.first_random_food()
        self.new_food()
        self.get_coords()


    def head(self):
        x1 = self.x
        y1 = self.y
        x2 = self.x + self.size
        y2 = self.y + self.size
        self.rect = self.canvas.create_rectangle(x1, y1, x2, y2, fill = 'green')

    def right(self, dx, dy):

        self.canvas.move( self.rect, 10, 0)
        self.new_food()


    def down(self, dx, dy):

        self.canvas.move( self.rect, 0, 10)
        self.new_food()

    def up(self, dx, dy):

        self.canvas.move( self.rect, 0, -10)
        self.new_food()

    def left(self, dx, dy):

        self.canvas.move( self.rect, -10, 0)
        self.new_food()

    def get_coords(self):
        self.coords = self.canvas.coords(self.rect)

    def first_random_food(self):
        self.first = random.randint(10, 240)//10*10
        self.second = random.randint(10, 240)//10*10
        self.food = self.canvas.create_oval(self.first,self.second, self.first+10, self.second+10, fill = 'black')

    def new_food(self):
        self.food_coords = self.canvas.coords(self.food)
        self.snake_coords = self.canvas.coords(self.rect)
        if self.food_coords == self.snake_coords:
            self.canvas.delete(self.food)
            self.first_random_food()


game = Kinter(250, 250)
