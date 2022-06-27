
// TODO: Write code to define and export the Employee class
class Employee {
    constructor(name, employeeId, email) {
       this.name = name;
       this.employeeId = employeeId;
       this.email = email;
    }
    // getters and setters
    getName() {
        return this.name;
    }

    getEmployeeId() {
        return this.employeeId;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee; 