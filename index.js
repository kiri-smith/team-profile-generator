const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateFile = require('./utils/generateFile');

// obtain user input


const managerQuestions = [

    {
        type: 'input',
        message: "What is your team manager's name?",
        name: 'name',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is your team manager's employee ID number?",
        name: 'idnumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: "What is your team manager's email address?",
        name: 'email',
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
        name: 'role',
        message: "Select the employee type you would like to add or select 'Finish Building My Team' to exit.",
        choices: ['Engineer', 'Intern', 'Finish Building My Team'],
        validate: (value) => { if (value) { return true } else { return 'Must choose a value to continue.' } }
    },
];

const engineerQuestions = [

    {
        type: 'input',
        message: "What is the engineer's name?",
        name: 'name',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is the engineer's employee ID number?",
        name: 'idnumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: "What is the engineer's email address?",
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'input',
        message: "What is the engineer's Github username?",
        name: 'username',
        validate: (value) => { if (value) { return true } else { return 'Must input a username to continue.' } }
    },
];

const internQuestions = [

    {
        type: 'input',
        message: "What is the intern's name?",
        name: 'name',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is the intern's employee ID number?",
        name: 'idnumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: "What is the intern's email address?",
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'input',
        message: "What is the name of the intern's school?",
        name: 'school',
        validate: (value) => { if (value) { return true } else { return 'Must input a school to continue.' } }
    },
];

function newEmployee() {
    inquirer.prompt(managerQuestions)
        .then((responses) => {

            if (responses.role === 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then((responses) => {
                        newTeam.push(new Engineer(responses.name, responses.id, responses.email, responses.username))
                    });
            } else if (responses.role === 'Intern') {
                inquirer.prompt(internQuestions)
                    .then((responses) => {
                        newTeam.push(new Intern(responses.name, responses.id, responses.email, responses.school))
                    });
            } else {
                newTeam.push(new Manager(responses.name, responses.id, responses.email, responses.office))

            }
        });
};

newEmployee();

const newTeam = [];
//ASK ARM:
//newEmployee function does not go through all prompts
//init function:  does this look okay?
//adding it to specific components on html page -- check

//repeat the questions for more employees??
//exit when "finish..." selected??



// Create a function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    newEmployee((responses) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    })
}

//Call it to initialize app
//init();


/*function init() {
    newTeam.push(newEmployee -- how do I put them all here? ).then((newTeam) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    }
}

*/

/*function newEngineer() {
    inquirer
        .prompt(engineerQuestions)
        .then((responses) => {
            return new Engineer();
        })
};

function newIntern() {
    inquirer.prompt(internQuestions)
        .then((responses) => {
            return new Intern();
        })
};*/
