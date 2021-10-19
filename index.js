const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
//const generateFile = require('./utils/generateFile');
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
//const newTeam = [];
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
    fs.writeFile('NewIndex.html', generateFile(), (err) =>
        err ? console.error(err) : console.log('You have successfully created a team roster!')
    );
}

//Call it to initialize app
addTeam();


function generateTeam() {
    newEngineer.forEach(responses => {
        generateEngineer(responses);
    });
    newIntern.forEach(responses => {
        generateIntern(responses);
    });
    newManager.forEach(responses => {
        generateManager(responses);
    });
    /*if (newEngineer !== []) {
        generateEngineer();
    }
    if (newIntern !== []) {
        generateIntern();
    }
    if (newManager !== []) {
        generateManager();
    }*/
};

function generateManager(responses) {

    return `
    
        <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${responses.managerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
                <p class="row">ID: ${responses.managerIdNumber}</p>
                <p class="row">Email:
                <a href="mailto:${responses.managerEmail}">${responses.managerEmail}</a></p>
                <p class="row">Office Number: ${responses.office}</p>
            </div>
        </div>
    `
};

function generateEngineer(responses) {

    return `
    
        <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${responses.engineerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Engineer</h3>
                <p class="row">ID: ${responses.engineerIdNumber}</p>
                <p class="row">Email:
                <a href="mailto:${responses.engineerEmail}">${responses.engineerEmail}</a></p>
                <p> Github: <a href="https://github.com/${responses.username}" target="_blank">${responses.username}</a></p> 
            </div>
        </div>
    `
};

function generateIntern(responses) {

    return `
    
        <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${responses.internName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Intern</h3>
                <p class="row">ID: ${responses.internIdNumber}</p>
                <p class="row">Email:
                <a href="mailto:${responses.internEmail}">${responses.internmanagerEmail}</a></p>
                <p class="row">School: ${responses.school}</p>
            </div>
        </div>
    `
};

function generateFile() {
    return `

    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
    </head>

    <header class="header" style="text-align: center; background-color: darkblue; color: white;">
        <h1>My Team</h1>
    </header>

    ` +
        generateTeam();
};

//generateFile();


