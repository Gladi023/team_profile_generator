const Employee = require('./Employee')

class Intern extends Intern {
    constructor(name, employeeId, email, githubInput) {
        super(name, id, email);

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