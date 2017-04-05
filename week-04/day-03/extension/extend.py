# Adds a and b, returns as result
def add(a, b):
    return a + b

# Returns the highest value from the three given params
def max_of_three(a, b, c):
        return max(a, b, c)

# Returns the median value of a list given as param
def median(pool):
    pool.sort()
    if len(pool) % 2 == 1:
        index = int(len(pool) / 2)
        return pool[index]
    else:
        pool.sort()
        index1 = int(len(pool)/2-1)
        index2 = int(len(pool)/2)
        result = (pool[index1] + pool[index2])/2
        return result
# Returns true if the param is a vovel
def is_vovel(char):
    return char.lower() in 'aäeiouéáőűúöüóí'

# Create a method that translates hungarian into the teve language
def translate(hungarian):
    teve = hungarian
    for char in teve:
        if is_vovel(char):
            teve = (char+'v'+char).join(teve.split(char))
    return teve
