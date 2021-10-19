const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');


//ask to add new employee
const newEmployee = [
    {
        type: 'list',
        message: "Do you want to add an employee?",
        name: 'addEmployee',
        choices: ['yes', 'no'],
        validate: (value) => { if (value) { return true } else { return 'Must choose a value to continue.' } }
    },
]

//initial prompts to gather manager information
const managerQuestions = [

    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'managerName',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is your team manager's employee ID number?",
        name: 'managerIdNumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: "What is your team manager's email address?",
        name: 'managerEmail',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'input',
        message: "What is your team manager's office number?",
        name: 'office',
        validate: (value) => { if (value) { return true } else { return 'Must input office number to continue.' } }
    },

    {

        type: 'list',
        message: "Select the employee type you would like to add or select 'Finish Building My Team' to exit.",
        name: 'role',
        choices: ['Engineer', 'Intern', 'Finish Building My Team'],
        validate: (value) => { if (value) { return true } else { return 'Must choose a value to continue.' } }
    },
];

//prompts to gather information about engineers
const engineerQuestions = [

    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'engineerName',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is the engineer's employee ID number?",
        name: 'engineerIdNumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'engineerEmail',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'username',
        validate: (value) => { if (value) { return true } else { return 'Must input a username to continue.' } }
    },
];

//prompts to gather information about interns
const internQuestions = [

    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'internName',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is the intern's employee ID number?",
        name: 'internIdNumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'internEmail',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'input',
        message: "What is the name of the intern's school?",
        name: 'school',
        validate: (value) => { if (value) { return true } else { return 'Must input a school to continue.' } }
    },
];

//empty array to push new employees when added
const newTeam = [];
const newManager = [];
const newIntern = [];
const newEngineer = [];

//function to create team
function addTeam() {

    //prompt user if they want to add an employee to the roster
    inquirer.prompt(newEmployee)
        .then((responses) => {

            //if they answer yes, prompt manager questions
            if (responses.addEmployee === 'yes') {
                inquirer.prompt(managerQuestions)
                    .then((responses) => {
                        newManager.push(responses);

                        //if they choose to add engineer, prompt engineer questions
                        if (responses.role === 'Engineer') {
                            return inquirer.prompt(engineerQuestions)
                                .then((responses) => {
                                    newEngineer.push(responses);
                                    return addTeam();
                                });

                            //if they choose to add intern, prompt engineer questions
                        } else if (responses.role === 'Intern') {
                            return inquirer.prompt(internQuestions)
                                .then((responses) => {
                                    newIntern.push(responses);
                                    return addTeam();
                                });

                            //if they choose to finish, return back to beginning and ask if they want to add another
                        } else {
                            console.log("Thanks for your input!")
                            return addTeam();
                        }
                    });
                //if they choose "no" to adding a new employee, exit prompts
            } else {
                init();
            };
        });
};


function init() {
    fs.writeFile('NewIndex.html', generateTeam(newTeam), (err) =>
        err ? console.error(err) : console.log('You have successfully created a team roster!')
    );
}

//Call it to initialize app
addTeam();




// create the team
const generateTeam = newTeam => {

    // create the manager html
    const generateManager = newManager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newManager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newManager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newManager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${newManager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the engineer html
    const generateEngineer = newEngineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newEngineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newEngineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newEngineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
                <li class="list-group-item"> Github: <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li> 
            </ul>
        </div>
    </div>
        `;
    };

    // create the intern html
    const generateIntern = newIntern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newIntern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newIntern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newIntern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                <li class="list-group-item"> School: ${newIntern.getSchool()}</li> 
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(newTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(newManager => generateManager(newManager))
    );

    html.push(newTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(newEngineer => generateEngineer(newEngineer))
    );

    html.push(newTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(newIntern => generateIntern(newIntern))
    );


    return html.join("");

};