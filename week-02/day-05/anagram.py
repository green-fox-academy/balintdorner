#An anagram is direct word switch or word play, the result of rearranging the letters of a word or phrase to produce a new word or phrase, using all the original letters exactly once; for example, the word anagram can be rearranged into nag-a-ram. [for more detail check anagram on Wikipedia]

wordone = input()
wordtwo = input()
wordonelist = list(wordone)
wordtwolist = list(wordtwo)

if sorted(wordonelist) == sorted(wordtwolist):
    print("True")
else:
    print("False")
