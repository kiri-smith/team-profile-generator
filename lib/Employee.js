/*
The first class is an Employee parent class with the following properties and methods:
name
id
email
getName()
getId()
getEmail())
getRole()—returns 'Employee'
*/

class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return "Employee";
    };

    generateEmployee() {
        return `
        <div class="card employee-card" style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
        <div class="card-header">
            <h2 class="card-title">${this.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-user mr-2"></i>${this.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${this.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${this.getEmail()}">${this.getEmail()}</a></li>
            </ul>
        </div>
    </div>
        `;
    }
}

module.exports = Employee;
