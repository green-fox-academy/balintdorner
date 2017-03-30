# Write a recursive function that takes one parameter: n and adds numbers from 1 to n.

def countdown(n):
    if n <= 0:
        return n
    else:
        return countdown(base, n-1)

print(countdown(6))
