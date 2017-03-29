# Write a program that reads a number from the standard input, then draws a
# pyramid like this:
#
#
#    *
#   ***
#  *****
# *******
#
# The pyramid should have as many lines as the number was
number = int(input())

for i in range(number+1):
    if i % 2 == 1:
        print(" " * (number-i) + "*"*i*2)
