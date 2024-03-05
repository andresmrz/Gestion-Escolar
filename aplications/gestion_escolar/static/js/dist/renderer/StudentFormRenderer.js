"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFormRenderer = void 0;
var StudentFormRenderer = /** @class */ (function () {
    function StudentFormRenderer() {
    }
    StudentFormRenderer.prototype.render = function (student) {
        // Returns the HTML of the form based on the Student model
        // Implement form generation here
        var formularioHtml = "\n            <form id=\"formRegister\">\n                <input type=\"text\" id=\"nombre\" placeholder=\"Nombre\" value=\"".concat(student.name, "\" />\n                <input type=\"text\" id=\"apellido\" placeholder=\"Apellido\" value=\"").concat(student.last_name, "\" />\n                <input type=\"email\" id=\"email\" placeholder=\"Email\" value=\"").concat(student.email, "\" />\n                <input type=\"date\" id=\"fechaNacimiento\" value=\"").concat(this.formatDate(student.birth_date), "\" />\n                <button type=\"submit\">Registrar</button>\n            </form>\n        ");
        if (document.getElementById('formRegisterStudents')) {
            document.getElementById('formRegisterStudents').innerHTML = formularioHtml;
        }
        this.attachFormSubmitEvent();
    };
    StudentFormRenderer.prototype.formatDate = function (date) {
        // Formato de fecha como YYYY-MM-DD para input[type=date]
        return date.toISOString().split('T')[0];
    };
    StudentFormRenderer.prototype.attachFormSubmitEvent = function () {
        if (document.getElementById('formRegister')) {
            var form = document.getElementById('formRegister');
            form.addEventListener('submit', function (e) {
                e.preventDefault();
                // Lógica para manejar la presentación del formulario
                console.log('Formulario enviado');
            });
        }
    };
    return StudentFormRenderer;
}());
exports.StudentFormRenderer = StudentFormRenderer;
