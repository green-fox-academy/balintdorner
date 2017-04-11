    self.root.bind('w', self.up)
    self.root.bind('a', self.left)
    self.root.bind('s', self.down)
    self.root.bind('d', self.right)


#        self.right('none')
#        self.down()

    self.root.mainloop()

def moving():
    if

def down(self, event):
    self.snake.down(self.dx, self.dy)
    self.canvas.after(32, self.down)

def right(self, event):
    self.snake.right(self.dx, self.dy)
    self.canvas.after(32, self.right)

def up(self, event):
    self.snake.up(self.dx, self.dy)
    self.canvas.after(32, self.up)

def left(self, event):
    self.snake.left(self.dx, self.dy)
    self.canvas.after(32, self.left)
