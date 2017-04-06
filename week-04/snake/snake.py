from tkinter import *
#from circle import Circle

class App():

	def __init__(self, width, height):
		self.root = Tk()
		self.width = width
		self.height = height
		self.canvas = Canvas(self.root, width=self.width, height=self.height)
		self.canvas.pack()

	#	self.ball = Circle(self.canvas,10,10,10)
	#	self.ball.draw()

		self.root.mainloop()

game = App(500, 500)
