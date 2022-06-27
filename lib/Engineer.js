const Employee = require('./Employee')

class Engineer extends Engineer {
    constructor(name, employeeId, email, githubInput) {
        super(name, id, email);

        //this.officeNumber = officeNumber;
    }
    //getOfficeNumber() {
        //return this.officeNumber;
    //}
    getRole() {
        return "Engineer";
    }
}
module.exports = Engineer;