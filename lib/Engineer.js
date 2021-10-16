/*
extend Employee
In addition to Employee's properties and methods, Engineer will also have the following:
github—GitHub username
getGithub()
getRole()—overridden to return 'Engineer'
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) { //do i need the first three?
        super(name, id, email, username) //do we need this?

        function getGithub() {
            this.username = username;
        }
        function getRole() {
            return Engineer;
        }

    }
}