#Create a function named create palindrome following your current language's style guide. It should take a string, create a palindrome from it and then return it.

word = input()
anagram = word + word[::-1]
print(anagram)
