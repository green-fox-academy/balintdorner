import unittest
import extend

class TestExtend(unittest.TestCase):
    def setUp(self):
        pass

    def test_add_4_and_7_is_11(self):
        self.assertEqual(extend.add(4, 7), 11)

    def test_add_4_and_5_is_9(self):
        self.assertEqual(extend.add(4, 5), 9)

    def test_max_of_three_first(self):
        self.assertEqual(extend.max_of_three(8, 10, 3), 10)

    def test_max_of_three_second(self):
        self.assertEqual(extend.max_of_three(3, 3, 2), 3)

    def test_median_four(self):
        self.assertEqual(extend.median([7,6,3,4]), 5)

    def test_median_five(self):
        self.assertEqual(extend.median([1,2,3,4,5]), 3)

    def test_is_vovel_a(self):
        self.assertTrue(extend.is_vovel('ú'))

    def test_is_vovel_u(self):
        self.assertTrue(extend.is_vovel('ä'))

    def test_translate_bemutatkozik(self):
        self.assertEqual(extend.translate('teve'), 'teveve')

    def test_translate_kolbice(self):
        self.assertEqual(extend.translate('kavar'), 'kavavavar')

if __name__ == '__main__':
    unittest.main()
