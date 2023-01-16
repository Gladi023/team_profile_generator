test('creates an employee object', () => {
    const employee = new Employee('Joe', "", "");

    expect(employee.name).toBe('Joe');
    expect(employee.employeeId).toBe("");
    expect(employee.email).toBe("");
});
