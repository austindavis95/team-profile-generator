const Intern = require("../lib/Intern")
const Employee = require("../lib/Intern");

test('retrieves interns school', () => {
    const numberValue = 50;
    const intern = new Intern('John', 1023, 'johndoe@coding.com', numberValue);
    
    expect(intern.getSchool()).toBe(numberValue);
});

test('retrieves employee role', () => {
    const roleValue = "Intern";
    const role = new Intern('John', 1023, 'johndoe@coding.com');

    expect(role.getRole()).toBe(roleValue);
}); 
