const Employee = require('./Employee.js');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;
        this.position = "Intern";
    }
    getSchool() {
        return this.school;
    }
    getPosition() {
        return this.position;
    }
}
module.exports = Intern;