# - Create a function called `factorio`
#   that returns it's input's factorial

def factorio(n):
    num = 1
    while n >= 1:
        num = num * n
        n = n - 1
    print(num)

factorio(5)
