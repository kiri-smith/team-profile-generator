const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateFile = require('./utils/generateFile');

// obtain user input
const teamInput = [

    {
        type: 'input',
        message: "What is your team member's name?",
        name: 'name',
        validate: (value) => { if (value) { return true } else { return 'Must input a name to continue.' } }
    },

    {
        type: 'input',
        message: "What is their employee ID number?",
        name: 'idnumber',
        validate: (value) => { if (value) { return true } else { return 'Must input an ID to continue.' } }
    },

    {
        type: 'input',
        message: 'What is their email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'input',
        message: 'What is their office number?',
        name: 'office',
        validate: (value) => { if (value) { return true } else { return 'Must input office number to continue.' } }
    },

];

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    })
}

// Function call to initialize app
init();