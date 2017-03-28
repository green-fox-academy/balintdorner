# Create a method that returns the five most frequent lottery number in a pretty table format
myfile = open("otos.txt", "r")
text = myfile.readlines()

for j in range(len(text)):
    for i in range(4):
        while text[j] == "t":
            text[j] = ""
print(text)
