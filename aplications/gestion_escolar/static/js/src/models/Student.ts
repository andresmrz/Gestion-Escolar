export class Student {
    constructor(
        public name: string,
        public last_name: string,
        public email: string,
        public birth_date: Date,
    ) 
    {
        this.name = name;
        this.last_name = last_name;
        this.email = email;
        this.birth_date = birth_date;
    }
}
