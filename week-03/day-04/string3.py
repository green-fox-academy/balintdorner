# Given a string, compute recursively a new string where all the
# adjacent chars are now separated by a "*".
def star_separator(string):
    if len(string) == 0:
        return ''
    else:
        return string[0] + '*' + star_separator(string[1:])

print(star_separator("almfsdjfskdsjzzcxtrttyxxx"))
