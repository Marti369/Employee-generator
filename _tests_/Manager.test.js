const Manager = require('../lib/Manager.js');

//this will test that verify we get a name, id and email
test('test Manager.js to verify name, id, email', () => {
    const employee = new Manager("Edwin", 100, "edwin@gmail.com");


    //this will test name to equal string
    expect(employee.name).toBe("Edwin");
    //test if to be any number
    expect(employee.id).toEqual(expect.any(Number));
    //email is a string
    expect(employee.email).toEqual(expect.any(String));
    //position of employee is a string
    expect(employee.position).toEqual(expect.any(String));

});

//this tests the position of the employee like Manager
test('function get position works', () => {
    const employee = new Manager("Maria", 150, 'Maria@gmail.com', 760);

    expect(employee.getPosition()).toEqual(expect.stringContaining('Manager'));
})