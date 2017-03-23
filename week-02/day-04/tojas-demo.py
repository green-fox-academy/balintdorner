# tojas live coding
number = 10

out = 0

for i in range(number + 1): # igy jobb: for i in range(1, number + 1): igy a nullat nem adja hozza feleslegesen
    out += i

print(out)


# csinaljunk belole functiont
def sum(n):
    out = 0
    for i in range(1, n + 1): # igy jobb: for i in range(1, number + 1): igy a nullat nem adja hozza feleslegesen
        out += i
    return out

print(sum(number))
# mostantol, ha fuggvenyben printelek, az mar nem les az igazi
# for vs while: amikor varok valamire, akkor hasznaljuk a while-t, amugy inkabb for

#dictionary
pirate = {"name": "jack", "gold": 7, "has_wooden_leg": True}
print(pirate["name"])
pirate["gold"] = 8
print(pirate["gold"])

for key in pirate:
    print(key)
    print(pirate[key])

#ugyanez maskepp
for key, value in pirate.items():
    print(key)
    print(value)
