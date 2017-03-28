# Create a method that decrypts the texts/duplicated_chars.txt
myfile = open("duplicated_chars.txt", "r")

def decrypt(file_name):

# ************* Solution one ***************
# print(text[::2])

# ************* Solution two ****************
#    index = ""
#    for i in range(845):
#        index += text[2*i]
#    print(index)
#    pass

# ************** Solution three ***************
    text = myfile.read()
    printing = ""
    for char in range(len(text)):
        if char % 2 == 0:
            printing += text[char]
    return printing
print(decrypt(myfile))
