example = "In a dishwasher far far away";

# I would like to replace "dishwasher" with "galaxy" in this example
# Please fix it for me!
# Expected ouput: In a galaxy far far away

# not recommended solution
new = example.replace("dishwasher", "galaxy")
print(new)

# recommended solution
slicing = example[:5] + "galaxy " + example[16:]
print(slicing)
