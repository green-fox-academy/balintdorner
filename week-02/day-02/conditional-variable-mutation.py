a = 24
out = 0

if a%2 == 0:
    print(out + 1)


b = 13
out2 = ""

if b > 10 and b < 20:
    print("Sweet!")
if b < 10:
    print("More!")
if b > 20:
    print("Less!")


c = 123
credits = 100
is_bonus = False

if credits >= 50 and is_bonus == False:
    c -= 2
if credits < 50 and is_bonus == False:
    c -= 1
if is_bonus == True:
    c = c


d = 8
time = 120
out3 = ""

if d%4 == 0 and time <= 200:
    out3 = "check"
if time > 200:
    out3 = "Time out"
else:
    out3 = "Run Forest Run"
