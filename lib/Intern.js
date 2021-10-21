/* extend employee
n addition to Employee's properties and methods, Intern will also have the following:
school
getSchool()
getRole()—overridden to return 'Intern'
*/

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email)
        this.school = school;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
    generateEmployee() {
        return `
        <div class="card employee-card" style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
        <div class="card-header">
            <h2 class="card-title">${this.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user-graduate mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
                <li class="list-group-item"> School: ${this.getSchool()}</li> 
            </ul>
        </div>
    </div>
        `;
    }
}

module.exports = Intern;