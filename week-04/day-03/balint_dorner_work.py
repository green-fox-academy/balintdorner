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
