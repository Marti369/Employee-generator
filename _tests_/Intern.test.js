const { test, expect } = require('@jest/globals');
const Intern = require('../lib/Intern.js');

test("application creates an Intern employee", () => {
    const employee = new Intern("Daniela", 81144, "daniela@gmail.com", "UCB")

    expect(employee.name).toBe("Daniela");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.school).toEqual(expect.any(String));
})

//this tests the position of the employee like Manager
test('function get position works', () => {
        const employee = new Intern("Mary", 10, 'Mary@gmail.com', "mary369");

        expect(employee.getPosition()).toEqual(expect.stringContaining('Intern'));
    })
    //test to see if getSchool function works
test('to see if school works', () => {
    const employee = new Intern("Daniela", 81144, "daniela@gmail.com", "UCB")
    expect(employee.school).toEqual(expect.any(String));
});