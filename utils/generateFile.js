/*function createBase() {
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

    `
};

function generateTeam(responses) {
    if (responses.role === "Engineer") {
        generateEngineer(responses);
    }

    if (responses.role === "Intern") {
        generateIntern(responses);
    }

    if (responses.role === "Finish Building My Team") {
        generateManager(responses);
    }

};

function generateManager(responses) {

    return `

        <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${responses.managerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
                <p class="row">ID: ${responses.managerIdNumber}</p>
                <p class="row">Email: ${responses.managerEmail}</p>
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
                <p class="row">Email: ${responses.engineerEmail}</p>
                <p class="row">Office Number: ${responses.username}</p>
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
                <p class="row">Email: ${responses.internEmail}</p>
                <p class="row">Office Number: ${responses.school}</p>
            </div>
        </div>
    `
};

function generateFile() {
    createBase();
    generateTeam();
};

generateFile();*/

