const Employee = require("../lib/Employee")

test('creates new employee', () => {
    let employee = new Employee('John', 1023, 'johndoe@coding.com');

    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('retrives employee name', () => {
    let employee = new Employee('John', 1023, 'johndoe@coding.com');

    expect(employee.getName()).toEqual(expect.any(String));
});

test('retrives employee ID', () => {
    let employee = new Employee('John', 1023, 'johndoe@coding.com');

    expect(employee.getId()).toEqual(expect.any(Number));
});

test('retrives employee email', () => {
    let employee = new Employee('John', 1023, 'johndoe@coding.com');

    expect(employee.getEmail()).toEqual(expect.any(String));
});

test('retrives employee role', () => {
    let employee = new Employee('John', 1023, 'johndoe@coding.com');

    expect(employee.getRole()).toEqual("Employee");
    
});

    
    