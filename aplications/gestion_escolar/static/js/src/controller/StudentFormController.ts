import { Student } from "../models/Student";
import { StudentRepository } from "../repository/StudentRepository";
import { StudentFormRenderer } from "../renderer/StudentFormRenderer";

export class StudentFormController {
    constructor(private repository: StudentRepository, private renderer: StudentFormRenderer) {}

    init() {
        // Initialize the form, add event handlers, etc.
        // Use the renderer class
    }
}
