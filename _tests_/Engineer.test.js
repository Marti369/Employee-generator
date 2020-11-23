const { test, expect } = require('@jest/globals');
const Engineer = require('../lib/Engineer.js');

test("application creates an Engineer employee", () => {
    const employee = new Engineer("Monica", 104, "monica@gmail.com", "marti369")

    expect(employee.name).toBe("Monica");
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
    expect(employee.github).toEqual(expect.any(String));
})

//this tests the position of the employee like Manager
test('function get position works', () => {
        const employee = new Engineer("John", 1420, 'John@gmail.com', "marti369");

        expect(employee.getPosition()).toEqual(expect.stringContaining('Engineer'));
    })
    //test to see if getgithub function works
test('to see if github works', () => {
    const employee = new Engineer("Monica", 104, "monica@gmail.com", "marti369")
    expect(employee.getGitHub()).toEqual(expect.stringContaining("marti369"));
});