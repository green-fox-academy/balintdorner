import unittest
from balint_dorner_work import *

class TestOddAvg(unittest.TestCase):
    def test_odd_average_empt_list(self, integer = []):
        odd_avg = OddAvg()
        integer = []
        self.assertEqual(odd_avg.odd_average(integer), 2)

    def test_odd_average_only_odd(self, integer = []):
        odd_avg = OddAvg()
        integer = [2, 6, 12]
        self.assertEqual(odd_avg.odd_average(integer), 2)

    def test_odd_average_integers(self, integer = []):
        odd_avg = OddAvg()
        integer = [1, 2, 3, 7, 12, 18]
        self.assertEqual(odd_avg.odd_average(integer), 2)
