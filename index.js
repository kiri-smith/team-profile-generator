const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'Provide a description of the project:',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'Must input a description to continue.' } }
    },

    {
        type: 'input',
        message: 'What are the installation instructions for this project?',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'Must input installation instructions to continue.' } }
    },

    {
        type: 'input',
        message: 'Describe the usage information:',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'Must input usage information to continue.' } }
    },

    {
        type: 'input',
        message: 'What are the contribution guidelines for this project?',
        name: 'contribution',
        validate: (value) => { if (value) { return true } else { return 'Must input contribution guidelines to continue.' } }
    },

    {
        type: 'input',
        message: 'Describe the test instructions:',
        name: 'test',
        validate: (value) => { if (value) { return true } else { return 'Must input test instructions to continue.' } }
    },

    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'username',
        validate: (value) => { if (value) { return true } else { return 'Must input a Github username to continue.' } }
    },

    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Must input an email address to continue.' } }
    },

    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application.',
        choices: ['MIT License', 'GNU General Public License', 'Eclipse Public License', 'none'],
        validate: (value) => { if (value) { return true } else { return 'Must choose a value to continue.' } }
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