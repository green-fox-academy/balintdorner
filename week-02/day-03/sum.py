# - Write a function called `sum` that sum all the numbers
#   until the given parameter

def sum(*args):
    summa = 0
    for arg in args:
        summa += arg
    print(summa)

sum(1, 2, 8, 15, 66)
