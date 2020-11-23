const Employee = require("./Employee.js");

class Manager extends Employee {
    constructor(name, id, email, phone) {
        super(name, id, email);
        this.phone = phone;
        this.position = "Manager";
    }
    getPosition() {
        return this.position;
    }

}

module.exports = Manager;