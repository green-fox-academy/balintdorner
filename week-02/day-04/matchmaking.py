# Join the two lists by matching one girl with one boy in the order list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ["Eve","Ashley","Bözsi","Kat","Jane"]
boys = ["Joe","Fred","Béla","Todd","Neef","Jeff"]
# order = [girls[0], boys[0]]
order = []
for i in range(len(girls)):
    order += girls[i], boys[i]
order.append(boys[5])
print(order)
