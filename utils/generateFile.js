
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

    `;

};

function generateContent(data) {
    if (data.engineerName === true) {
        return `
        <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${data.managerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
                <p class="row">ID: ${data.managerIdNumber}</p>
                <p class="row">Email: ${data.managerEmail}</p>
                <p class="row">Office Number: ${data.office}</p>
            </div>
        </div>

        <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${data.engineerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Engineer</h3>
                <p class="row">ID: ${data.engineerIdNumber}</p>
                <p class="row">Email: ${data.engineerEmail}</p>
                <p class="row">Office Number: ${data.username}</p>
            </div>
        </div>
        `;
    }
};

if (data.internName === true) {

    return `
    <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${data.managerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
                <p class="row">ID: ${data.managerIdNumber}</p>
                <p class="row">Email: ${data.managerEmail}</p>
                <p class="row">Office Number: ${data.office}</p>
            </div>
        </div>

    <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${data.internName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Intern</h3>
                <p class="row">ID: ${data.internIdNumber}</p>
                <p class="row">Email: ${data.internEmail}</p>
                <p class="row">Office Number: ${data.school}</p>
            </div>
        </div> `

} else {

    return `

    <div class="card"
        style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
            <div class="card-body">
                <h2 class="card-title">${data.managerName}</h2>
                <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
                <p class="row">ID: ${data.managerIdNumber}</p>
                <p class="row">Email: ${data.managerEmail}</p>
                <p class="row">Office Number: ${data.office}</p>
            </div>
        </div>
    `
};

generateFile();
generateContent();

module.exports = generateFile;


/*function generateManager(data) {

    return `

    <div class="card"
    style="width: 18rem; border: darkblue solid 2px; display: flex; display: inline-flex; padding: 10px;">
        <div class="card-body">
            <h2 class="card-title">${data.managerName}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Manager</h3>
            <p class="row">ID: ${data.managerIdNumber}</p>
            <p class="row">Email: ${data.managerEmail}</p>
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
            <h2 class="card-title">${data.engineerName}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Engineer</h3>
            <p class="row">ID: ${data.engineerIdNumber}</p>
            <p class="row">Email: ${data.engineerEmail}</p>
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
            <h2 class="card-title">${data.internName}</h2>
            <h3 class="card-subtitle mb-2 text-muted">Intern</h3>
            <p class="row">ID: ${data.internIdNumber}</p>
            <p class="row">Email: ${data.internEmail}</p>
            <p class="row">Office Number: ${data.school}</p>
        </div>
    </div>
`
}; */