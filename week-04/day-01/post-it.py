#Create a PostIt class that has
#a backgroundColor
#a text on it
#a textColor
#Create a few example post-it objects:
#an orange with blue text: "Idea 1"
#a pink with black text: "Awesome"
# yellow with green text: "Superb!"

class PostIt():
    blackgrund_color = ''
    text = ''
    text_color = ''

postit1 = PostIt()
#postit3 = Postit()


postit1.blackgrund_color = 'orange'
postit1.text = 'Idea 1'
postit1.text_color = 'blue'

print(postit1.blackgrund_color + ' ' + postit1.text + ' ' + postit1.text_color)

postit2 = PostIt()

postit2.blackgrund_color = 'pink'
postit2.text = 'Awesome'
postit2.text_color = 'black'

print(postit2.blackgrund_color + ' ' + postit2.text + ' ' + postit2.text_color)

postit3 = PostIt()

postit3.blackgrund_color = 'yellow'
postit3.text = 'SuperB!'
postit3.text_color = 'green'

print(postit3.blackgrund_color + ' ' + postit3.text + ' ' + postit3.text_color)
