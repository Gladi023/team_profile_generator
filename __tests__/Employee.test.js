// const { exportNamedDeclaration, exportAllDeclaration } = require('@babel/types');
// const { default: test } = require('node:test');
// const { default: test } = require('node:test');
const Employee = require('../lib/Employee');

// jest.mock('../lib/Employee.js');

test('creates an employee object', () => {
    const employee = new Employee('Joe', "", "");

    expect(employee.name).toBe('Joe');
    expect(employee.id).toBe("");
    expect(employee.email).toBe("");
});

