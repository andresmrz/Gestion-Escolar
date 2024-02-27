import { Student } from "../models/Student";

export class StudentFactory {
    static crearVacio(): Student {
        return new Student("", "", "", new Date());
    }
}
