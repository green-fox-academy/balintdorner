import unittest
from balint_dorner_work import *

class TestApple(unittest.TestCase):
    def test_get_apple(self):
        apple = Apple()
        self.assertEqual(apple.get_apple(), 'apple')

class TestSumList(unittest.TestCase):
    def test_summa_empty_list(self, integer = []):
        summa = SumList()
        integer = []
        self.assertEqual(summa.sum(integer), 0)

    def test_summa_one_element(self, integer = []):
        summa = SumList()
        integer = [5]
        self.assertEqual(summa.sum(integer), 5)

    def test_summa_multiple_element(self, integer = []):
        summa = SumList()
        integer = [5, 6, 7]
        self.assertEqual(summa.sum(integer), 18)

    def test_summa_null(self, integer = []):
        summa = SumList()
        integer = [0]
        self.assertEqual(summa.sum(integer), 0)

class TestAnagram(unittest.TestCase):
    def test_anagram_true(self):
        ana = Anagram()
        self.assertEqual(ana.check_anagram('bela' , 'aleb'), True)

    def test_anagram_false(self):
        ana = Anagram()
        self.assertEqual(ana.check_anagram('kati' , 'robi'), False)

class TestCountLetters(unittest.TestCase):
    def test_count_letters(self):
        counting = CountLetters()
        word = 'alma'
        self.assertEqual(counting.count_letters(word), {'m':1, 'l':1, 'a':2})

class TestFibonacci(unittest.TestCase):
    def test_fibonacci_zero(self):
        fibi = Fibonacci()
        self.assertEqual(fibi.fibo(0), 0)

    def test_fibonacci_one(self):
        fibi = Fibonacci()
        self.assertEqual(fibi.fibo(1), 1)

    def test_fibonacci_two(self):
        fibi = Fibonacci()
        self.assertEqual(fibi.fibo(2), 1)

    def test_fibonacci_three(self):
        fibi = Fibonacci()
        self.assertEqual(fibi.fibo(3), 2)

    def test_fibonacci_five(self):
        fibi = Fibonacci()
        self.assertEqual(fibi.fibo(10), 55)



if __name__ == '__main__':
    unittest.main()
