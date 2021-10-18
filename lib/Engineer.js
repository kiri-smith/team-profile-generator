/*
extend Employee
In addition to Employee's properties and methods, Engineer will also have the following:
github—GitHub username
getGithub()
getRole()—overridden to return 'Engineer'
*/

const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, username) {
        super(name, id, email)
        this.username = username;
    }


    getGithub() {
        return this.username;
    }

    getRole() {
        return "Engineer";
    }

}