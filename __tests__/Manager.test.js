const Manager = require("../lib/Manager");
const Employee = require("../lib/Manager");

test('retrieves manager office number', () => {
    const numberValue = 50;
    const manager = new Manager('John', 1023, 'johndoe@coding.com', numberValue);
    
    expect(manager.officeNumber).toBe(numberValue);
});

test('retrieves employee role', () => {
    const roleValue = "Manager";
    const role = new Manager('John', 1023, 'johndoe@coding.com');

    expect(role.getRole()).toBe(roleValue);
}); 