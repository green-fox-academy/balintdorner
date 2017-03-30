# Write a recursive function that takes one parameter: n and counts down from n.

#*************** Solution One ******************
#def countdown(number):
#    if number <= 0:
#        return 0
#    else:
#        print(number)
#        return countdown(number-1)



def countdown(n):
    if n <= 0:
        return n
    else:
        return countdown(n-1)

print(countdown(3))
