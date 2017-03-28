# Create a method that decrypts texts/reversed_zen_lines.txt
myfile = open("reversed_lines.txt", "r")

def decrypt(file_name):
    text = myfile.read()

    printing = ""
    for char in range(len(text)):
        printing += text[char*-1]
    return printing
    pass

print(decrypt(myfile))
