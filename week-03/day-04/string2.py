# Given a string, compute recursively a new string where all the 'x' chars have been removed.

def x_changer(string):
    if len(string) == 0:
            return ''
    else:
        if string[0] == "x" or string[0] == "X":
            return "" + x_changer(string[1:])
        else:
            return string[0] + x_changer(string[1:])

print(x_changer("almfsdjfskXdsjzzcxtrttyxxx"))
