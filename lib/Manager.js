/*
he other three classes will extend Employee.
In addition to Employee's properties and methods, Manager will also have the following:
officeNumber
getRole()—overridden to return 'Manager'
*/

const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) { //do i need the first three?
        super(name, id, email, officeNumber) //do we need this?
        function getOfficeNumber() {
            this.officeNumber = officeNumber;
        }
        function getRole() {
            return Manager;
        }
    }