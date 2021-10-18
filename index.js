const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateFile = require('./utils/generateFile');

// obtain user input


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

function newEmployee() {
    inquirer.prompt(managerQuestions)
        .then((responses) => {

            if (responses.role === 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then((responses) => {
                        let Engineer = (responses.engineerName, responses.engineerIdNumber, responses.engineerEmail, responses.username);
                        newTeam.push(Engineer);
                        //return new Engineer;
                        //newTeam.push(new Engineer(responses.engineerName, responses.engineerIdNumber, responses.engineerEmail, responses.username));
                    });
            } else if (responses.role === 'Intern') {
                inquirer.prompt(internQuestions)
                    .then((responses) => {
                        let Intern = (responses.internName, responses.internIdNumber, responses.internEmail, responses.school)
                        newTeam.push(Intern);
                        //return new Intern;
                        // newTeam.push(new Intern(responses.internName, responses.internIdNumber, responses.internEmail, responses.school));
                    });
            } else {
                //return new Manager;
                let Manager = (responses.managerName, responses.managerIdNumber, responses.managerEmail, responses.office);
                newTeam.push(Manager);
                //newTeam.push(new Manager(responses.managerName, responses.managerIdNumber, responses.managerEmail, responses.office));

            }

        });
};


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
/*function init() {
    newEmployee((responses) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    })
}

function init() {
    newEmployee((responses) => {
        writeToFile('NewIndex.html', generateFile({ newTeam }))
    })
}*/

function init() {
    newEmployee((responses) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    }
    )
};

//Call it to initialize app
init();


/*function init() {
    newTeam.push(newEmployee).then((newTeam) => {
        writeToFile('NewIndex.html', generateFile({ ...responses }))
    }
}

*/


