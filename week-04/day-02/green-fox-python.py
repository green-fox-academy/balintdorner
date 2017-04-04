class Person(object):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female'):
        self.name = name
        self.age = age
        self.gender = gender

    def introduce(self):
        print("Hi, I'm " + self.name + " , a " + str(self.age) + " year old " + self.gender + ".")

    def get_goal(self):
        print("My goal is: Live for the moment!")

class Student(Person):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', prev_org = 'The School of life', skipped_days = 0):
        super().__init__(name, age, gender)
        self.prev_org = prev_org
        self.skipped_days = skipped_days

    def get_goal(self):
        print("Be a junior software developer.")

    def introduce(self):
        print("Hi, I'm " + self.name + " , a " + str(self.age) + " year old " + self.gender + " from " + self.prev_org + " who skipped " + str(self.skipped_days) + " days from the course already. ")

    def skip_days(self, number_of_days):
        self.number_of_days = number_of_days
        self.skipped_days += self.number_of_days
        return self.skipped_days

class Mentor(Person):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', level = 'Junior'):
        super().__init__(name, age, gender)
        self.level = level

    def introduce(self):
        print("Hi, I'm " + self.name + " , a " + str(self.age) + " year old " + self.gender + " " + str(self.level) + " mentor.")

    def get_goal(self):
        print("Educate brilliant junior software developers.")

class Sponsor(Person):
    def __init__(self, name = 'Jane Doe', age = 30, gender = 'female', company = 'Google', hired_students = 0):
        super().__init__(name, age, gender)
        self.company = company
        self.hired_students = hired_students

    def introduce(self):
        print("Hi, I'm " + self.name + " , a " + str(self.age) + " year old " + self.gender + " who represtents " + self.company + " and hired " + str(self.hired_students) + ' students so far.')

    def hire(self):
        self.hired_students += 1
        return self.hired_students

    def get_goal(self):
        print("Hire brilliant junior software developers.")





person = Person()
student = Student()
mentor = Mentor()
sponsor = Sponsor()
#person.gender = 'who knows'
person.introduce()
person.get_goal()
student.introduce()
student.get_goal()
student.skip_days(5)
mentor.level = 'Intermediate'
mentor.introduce()
sponsor.introduce()
print(sponsor.hire())
