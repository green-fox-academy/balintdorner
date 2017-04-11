from tkinter import *

class Ball():

	def __init__(self, canvas, x, y, size, color='black'):
		self.x = x
		self.y = y
		self.dx = 3 # speed x
		self.dy = 3 # speed y
		self.size = size
		self.color = color
		self.canvas = canvas
		self.circle = None
		self.draw()

	def draw(self):
		x1 = self.x
		x2 = self.x + self.size
		y1 = self.y
		y2 = self.y + self.size
		self.circle = self.canvas.create_oval(x1,y1,x2,y2, fill=self.color)

	def get_coords(self):
		coords = self.canvas.coords(self.circle)
		return { 'x': coords[0], 'y': coords[1] }

	def move(self):
		self.canvas.move( self.circle, self.dx, self.dy )

class App():

	def __init__(self, width, height):
		self.dx = 1
		self.dy = 1
		self.root = Tk()
		self.width = width
		self.height = height
		self.canvas = Canvas(self.root, width=self.width, height=self.height)
		self.canvas.pack()

		self.ball = Ball(self.canvas,10,10,10)
		self.animate()
		self.root.mainloop()

	def animate(self):
		self.check_collision()
		self.ball.move(self.dx, self.dy)
		self.canvas.after(16, self.animate)

	def check_collision(self):
		coords = self.ball.get_coords()

		if coords['x'] >= self.width - self.ball.size // 2:
			self.dx = -self.dx

		if coords['y'] >= self.height - self.ball.size // 2:
			self.dy = -self.dy

		if coords['y'] <= 0:
			self.dy = -self.dy

		if coords['x'] <= 0:
			self.dx = -self.dx

game = App(500, 300)
