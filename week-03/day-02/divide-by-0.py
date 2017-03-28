# create a function that takes a number,
# divides ten with it,
# and prints the result.
# it should print "fail" if the parameter is 0


def divider():
    while True:
        try:
            user_input = input()
            to_divide = 10
            result = to_divide/int(user_input)
            return result
            break
        except ZeroDivisionError:
            print("whoop")
print(divider())
