# Given a string, compute recursively (no loops) a new string where all the
# lowercase 'x' chars have been changed to 'y' chars.

def x_changer(string):
    if len(string) == 0:
            return ''
    else:
        if string[0] == "x":
            return "y" + x_changer(string[1:])
        else:
            return string[0] + x_changer(string[1:])

print(x_changer("almfsdjfskdsjzzcxtrttyxxx"))
