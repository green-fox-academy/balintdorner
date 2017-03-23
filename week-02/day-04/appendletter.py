# Add "a" to every string in far

far = ["kuty", "macsk", "kacs", "rók", "halacsk"]
a = []
for i in range(len(far)):
    a += far[i] + i*"a"
print(a)
