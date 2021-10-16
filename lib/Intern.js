/* extend employee
n addition to Employee's properties and methods, Intern will also have the following:
school
getSchool()
getRole()—overridden to return 'Intern'
*/

const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) { //do i need the first three?
        super(name, id, email, school) //do we need this?
        function getSchool() {
            this.school = school;
        }
        function getRole() {
            return Intern;
        }
    }
}