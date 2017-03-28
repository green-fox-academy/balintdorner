# Create a method that decrypts texts/encoded_zen_lines.txt
myfile = open("encoded-lines.txt", "r")

def decrypt(file_name):
    text = myfile.read()
    final = ""
    for change in range(len(text)):
        if text[change] != " " and text[change] != "\n":
            final += chr(ord(text[change]) - 1)
        else:
            final += chr(ord(text[change]) + 0)
    return final

print(decrypt(myfile))
