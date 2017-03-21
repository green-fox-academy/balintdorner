print("Please enter two numbers")
first = int(input())
second = int(input())

if second <= first:
    print("The second number should be bigger")
while second > first:
    print(first)
    first += 1
