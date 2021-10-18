
function generateFile(data) {
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
    
    ${generateManager(data)};
    ${generateEngineer(data)};
    ${generateIntern(data)};

    `;
}

module.exports = generateFile;

function generateManager(data) {

    return `
    
    <div class="card"
    style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
        <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
            <p class="row">ID: ${data.id}</p>
            <p class="row">Email: ${data.email}</p>
            <p class="row">Office Number: ${data.office}</p>
        </div>
    </div>
`
};

function generateEngineer(data) {

    return `
    
    <div class="card"
    style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
        <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Engineer</h3>
            <p class="row">ID: ${data.id}</p>
            <p class="row">Email: ${data.email}</p>
            <p class="row">Office Number: ${data.username}</p>
        </div>
    </div>
`
};

function generateIntern(data) {

    return `
    
    <div class="card"
    style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
        <div class="card-body">
            <h2 class="card-title">${data.name}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Intern</h3>
            <p class="row">ID: ${data.id}</p>
            <p class="row">Email: ${data.email}</p>
            <p class="row">Office Number: ${data.school}</p>
        </div>
    </div>
`
};