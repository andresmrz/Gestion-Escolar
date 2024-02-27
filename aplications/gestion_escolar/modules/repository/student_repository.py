class StudentRepository:
    def __init__(self, db):
        self.db = db

    def add_student(self, student):
        return self.db.student.insert(**student)

    def update_student(self, id, student):
        return self.db(self.db.student.id == id).update(**student)
