const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
//const Employee = require('./lib/Employee');
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

const whichEmployee = [
    {

        type: 'list',
        message: "Do you want to add an employee? Select type or select 'Finish' to exit.",
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern', 'Finish Building My Team'],
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
const newManager = [];
const newIntern = [];
const newEngineer = [];

//function to create team
function addTeam() {

    //prompt user if they want to add an employee to the roster
    inquirer.prompt(whichEmployee)
        .then((responses) => {

            //if they answer yes, prompt manager questions
            if (responses.role === 'Manager') {
                inquirer.prompt(managerQuestions)
                    .then((responses) => {
                        const addedManager = new Manager(responses.managerName, responses.managerIdNumber, responses.managerEmail, responses.office);
                        newManager.push(addedManager);
                        addTeam();
                    })


                //if they choose to add engineer, prompt engineer questions
            } else if (responses.role === 'Engineer') {
                inquirer.prompt(engineerQuestions)
                    .then((responses) => {
                        const addedEngineer = new Engineer(responses.engineerName, responses.engineerIdNumber, responses.engineerEmail, responses.username);
                        newEngineer.push(addedEngineer);
                        addTeam();
                    });

                //if they choose to add intern, prompt engineer questions
            } else if (responses.role === 'Intern') {
                inquirer.prompt(internQuestions)
                    .then((responses) => {
                        const addedIntern = new Intern(responses.internName, responses.internIdNumber, responses.internEmail, responses.school);
                        newIntern.push(addedIntern);
                        addTeam();
                    });

                //if they choose to finish, return back to beginning and ask if they want to add another
            } else {
                console.log("Thanks for your input!");
                return init();
            }
        });
};


function init() {
    fs.writeFile('NewIndex.html', generateHTML(), (err) =>
        err ? console.error(err) : console.log('You have successfully created a team roster!')
    );
}

//Call it to initialize app
addTeam();



//Generate HTML using the input from the user
const generateHTML = () => {

    let template = ``
    const team = [...newManager, ...newEngineer, ...newIntern];
    team.forEach(employee => template += employee.generateEmployee())

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

<body>
    
${template}
    
</body>
</html>
`
}

