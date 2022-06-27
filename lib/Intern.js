const Employee = require('./Employee')

class Intern extends Employee {
    constructor(name, employeeId, email, githubInput) {
        super(name, employeeId, email);

        //this.officeNumber = officeNumber;
    }
    //getOfficeNumber() {
        //return this.officeNumber;
    //}
    getRole() {
        return "Intern";
    }
}
module.exports = Intern;