# Create a method that returns the five most frequent lottery number in a pretty table format
myfile = open("otos.txt", "r")
text = myfile.readlines()
def five_most_frequent():
    numbers = text[-1:5]
    return numbers
    pass
print(five_most_frequent())
