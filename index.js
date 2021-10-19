const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateFile = require('./utils/generateFile');
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

//function to create team
function addTeam() {

    //prompt user if they want to add an employee to the roster
    inquirer.prompt(newEmployee)
        .then((responses) => {

            //if they answer yes, prompt manager questions
            if (responses.addEmployee === 'yes') {
                inquirer.prompt(managerQuestions)
                    .then((responses) => {
                        newTeam.push(responses);

                        //if they choose to add engineer, prompt engineer questions
                        if (responses.role === 'Engineer') {
                            return inquirer.prompt(engineerQuestions)
                                .then((responses) => {
                                    newTeam.push(responses);
                                    return addTeam();
                                });

                            //if they choose to add intern, prompt engineer questions
                        } else if (responses.role === 'Intern') {
                            return inquirer.prompt(internQuestions)
                                .then((responses) => {
                                    newTeam.push(responses);
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
                return;
            };
        });
};

// Create a function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    addTeam((responses) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    })
};

/*function init() {
    newEmployee((responses) => {
        writeToFile('NewIndex.html', generateFile({ newTeam }))
    })
}*/


//Call it to initialize app
init();




