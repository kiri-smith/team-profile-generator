/*

The first class is an Employee parent class with the following properties and methods:


name


id


email


getName()


getId()


getEmail()


getRole()—returns 'Employee'

*/

class Employee {
    constructor(name, id, email) {
        function getName() {
            this.name = name;
        }

        function getID() {
            this.id = id;
        }

        function getEmail() {
            this.email = email;
        }

        function getRole() {
            return this;
        }
    }

    printInfo() {
        console.log(`This employee's name is ${this.name}.`);
        console.log(`This employee's ID is ${this.id}`);
        console.log(`This employee's email address is ${this.email}`);
    }
}
module.exports = Employee;
