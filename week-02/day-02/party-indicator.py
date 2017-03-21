print("Please enter two numbers")
girls = int(input())
boys = int(input())

if girls == boys and boys+girls > 20:
    print("The party is excellent")
if girls != boys and boys+girls > 20 and girls!=0:
    print("Quite cool party")
if girls+boys < 20:
    print("Average party...")
if girls == 0:
    print("Sausage party")
