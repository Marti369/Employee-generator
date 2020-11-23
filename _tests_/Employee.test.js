const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee.js");

test("creates a new employee", () => {
    const employee = new Employee("Ricardo", 101, "ricardo@gmail.com");

    expect(employee.name).toBe('Ricardo');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.position).toEqual(expect.any(String));
});