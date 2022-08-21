const Engineer = require("../lib/Engineer")
const Employee = require("../lib/Employee");

test('creats new engineer', () => {
    let engineer = new Engineer('John', 1023, 'johndoe@coding.com');

    expect(engineer.name).toEqual(expect.any(String));
    expect(engineer.id).toEqual(expect.any(Number));
    expect(engineer.email).toEqual(expect.any(String));
});

test('retrives employee name', () => {
    let engineer = new Employee('John', 1023, 'johndoe@coding.com');

    expect(engineer.getName()).toEqual(expect.any(String));
});

test('retrives employee ID', () => {
    let engineer = new Employee('John', 1023, 'johndoe@coding.com');

    expect(engineer.getId()).toEqual(expect.any(Number));
});

test('retrives employee email', () => {
    let engineer = new Employee('John', 1023, 'johndoe@coding.com');

    expect(engineer.getEmail()).toEqual(expect.any(String));
});

test('retrives employee role', () => {
    let engineer = new Employee('John', 1023, 'johndoe@coding.com');

    expect(engineer.getRole()).toEqual("Employee");
    
});
