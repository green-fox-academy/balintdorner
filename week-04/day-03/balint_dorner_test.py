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


if __name__ == '__main__':
    unittest.main()
