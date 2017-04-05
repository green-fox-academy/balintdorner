class Apple():
    def get_apple(self):
        return 'apple'

class SumList():
    def sum(self, integer = []):
        self.integer = integer
        return sum(self.integer)

class Anagram():
    def check_anagram(self, word1, word2):
        self.word1 = word1
        self.word2 = word2
        if sorted(self.word1) == sorted(self.word2):
            return True
        else:
            return False

class CountLetters():
    def count_letters(self, word = ''):
        self.word = word
#        return dict((letter,word.count(letter)) for letter in set(word))
        self.key_list = []
        self.value_list = []
        self.dicti = {}
        for letter in word:
            self.key_list.append(letter)
            self.value_list.append(word.count(letter))

        for key, value in zip(self.key_list, self.value_list):
            self.dicti[key] = value
        return self.dicti
