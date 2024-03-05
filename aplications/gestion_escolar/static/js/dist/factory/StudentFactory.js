"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StudentFactory = void 0;
var Student_1 = require("../models/Student");
var StudentFactory = /** @class */ (function () {
    function StudentFactory() {
    }
    StudentFactory.crearVacio = function () {
        return new Student_1.Student("", "", "", new Date());
    };
    return StudentFactory;
}());
exports.StudentFactory = StudentFactory;
