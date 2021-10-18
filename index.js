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
        name: 'addEmployee',
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

function newManager() {
    inquirer.prompt(managerQuestions)
        .then((responses) => {
            return new Manager();
        })
};

function newEngineer() {
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
};

const newTeam = [];

//ASK ARM:
//general flow employee-manager-intern-engineer??
//push to empty array
//repeat the questions for more employees
//exit when "finish..." selected
//init function
//connecting everything together
//adding it to specific components on html page

// Create a function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// Create a function to initialize app
function init() {
    newTeam.push(newManager /* how do I put them all here? */) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    })
}

//Call it to initialize app
init();



