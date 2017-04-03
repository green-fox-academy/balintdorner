#Create Student and Teacher classes
#Student
#learn()
#question(teacher) -> calls the teachers answer method
#Teacher
#teach(student) -> calls the students learn method
#answer()

class Student(object):
    def learn(self):
        print('Student is learning')
    def question(self):
        return Teacher.answer(self)


class Teacher(object):
    def teach(self):
        return Student.learn(self)
    def answer(self):
        print('Teacher is answering')

student = Student()
student.question()
teacher = Teacher()
teacher.teach()
