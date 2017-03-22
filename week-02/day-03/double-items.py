# - Create an array variable named `ag`
#   with the following content: `[3, 4, 5, 6, 7]`
# - Double all the values in the array

ag = [3, 4, 5, 6, 7]

n = len(ag)

for i in range(n):
    bg = ag[i]*2
    i+=1
    print(bg)
