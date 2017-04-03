#Create Station and Car classes
#Station
#gas_amount
#refill(car) -> decreases the gasAmount by the capacity of the car and increases #the cars gas_amount
#Car
#gas_amount
#capacity
#create constructor for Car where:
#initialize gas_amount -> 0
#initialize capacity -> 100

class Station(object):
    def __init__(self, gas_amount = 1000):
        self.gas_amount = gas_amount

    def refill(self):
        return self.gas_amount - 100


class Car(object):
    def __init__(self, capacity=100, current=0):
        self.capacity = capacity
        self.current = current
        self.needs = capacity-current

    def refill(self):
        self.current += self.needs
        return self.current

station = Station()
car = Car()
print(station.refill())
print(car.refill())
