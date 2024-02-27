// EstudianteRepository.ts
import { Student } from "../models/Student";

export class StudentRepository {
    async registrar(student: Student): Promise<boolean> {
        const response = await fetch('http://localhost:8000/gestion_escolar/api_students/register_student', {
            method: 'POST',
            body: JSON.stringify(student),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await response.json();
        return data.success;
    }
}
