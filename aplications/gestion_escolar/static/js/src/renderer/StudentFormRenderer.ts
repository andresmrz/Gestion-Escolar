import { Student } from "../models/Student";

export class StudentFormRenderer {
    render(student: Student): void {
        // Returns the HTML of the form based on the Student model
        // Implement form generation here
        const formularioHtml = `
            <form id="formRegister">
                <input type="text" id="nombre" placeholder="Nombre" value="${student.name}" />
                <input type="text" id="apellido" placeholder="Apellido" value="${student.last_name}" />
                <input type="email" id="email" placeholder="Email" value="${student.email}" />
                <input type="date" id="fechaNacimiento" value="${this.formatDate(student.birth_date)}" />
                <button type="submit">Registrar</button>
            </form>
        `;

        if(document.getElementById('formRegisterStudents'))
        {
            document.getElementById('formRegisterStudents').innerHTML = formularioHtml;
        }

        this.attachFormSubmitEvent();
    }

    private formatDate(date: Date): string {
        // Formato de fecha como YYYY-MM-DD para input[type=date]
        return date.toISOString().split('T')[0];
    }

    private attachFormSubmitEvent(): void 
    {
        if(document.getElementById('formRegister'))
        {
            const form = document.getElementById('formRegister');
            form.addEventListener('submit', (e) => 
            {
                e.preventDefault();
                // Lógica para manejar la presentación del formulario
                console.log('Formulario enviado');
            });
        }
    }
}
