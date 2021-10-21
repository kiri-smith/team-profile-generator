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
    generateEmployee() {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${this.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-glasses mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item"> Github: <a href="https://github.com/${this.getGithub()}" target="_blank">${this.getGithub()}</a></li> 
            </ul>
        </div>
    </div>
        `;
    }
}

module.exports = Engineer;