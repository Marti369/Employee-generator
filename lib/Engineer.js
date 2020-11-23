const Employee = require("./Employee.js");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
        this.position = "Engineer";
    }
    getGitHub() {
        return this.github;
    }
    getPosition() {
        return this.position;
    }
}
module.exports = Engineer;