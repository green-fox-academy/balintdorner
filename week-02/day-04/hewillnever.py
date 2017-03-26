# Things are a little bit messed up
# Your job is to decode the notSoCrypticMessage by using the hashmap as a look up table
# Assemble the fragments into the out variable

out = "";
notSoCrypticMessage = [1, 12, 1, 2, 11, 1, 7, 11, 1, 49, 1, 3, 11, 1, 50, 11]

hashmap = [
    {7: "run around and desert you"}, # 0
    {50: "tell a lie and hurt you"}, # 1
    {49: "make you cry,"}, # 2
    {2: "let you down"}, # 3
    {12: "give you up,"}, # 4
    {1: "Never gonna"}, # 5
    {11: "\n"}, # 6
    {3: "say goodbye"} # 7
]

for num not
    for map in hashmap
        if map.has_key(num):
            print
