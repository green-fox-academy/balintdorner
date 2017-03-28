# Create a method that decrypts texts/reversed_zen_order.txt
myfile = open("reversed_order.txt", "r")

def decrypt(file_name):
    text = myfile.readlines()

    printing = ""
    for char in range(len(text)-1, 0, -1):
        printing += text[char]
    return printing
    pass

print(decrypt(myfile))
