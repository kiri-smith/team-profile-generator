

// create the team
const generateTeam = newTeam => {

    // create the manager html
    const generateManager = newManager => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newManager.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newManager.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newManager.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newManager.getEmail()}">${newManager.getEmail()}</a></li>
                <li class="list-group-item">Office number: ${newManager.getOfficeNumber()}</li>
            </ul>
        </div>
    </div>
        `;
    };

    // create the engineer html
    const generateEngineer = newEngineer => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newEngineer.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newEngineer.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newEngineer.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newEngineer.getEmail()}">${newEngineer.getEmail()}</a></li>
                <li class="list-group-item"> Github: <a href="https://github.com/${newEngineer.getGithub()}" target="_blank">${newEngineer.getGithub()}</a></li> 
            </ul>
        </div>
    </div>
        `;
    };

    // create the intern html
    const generateIntern = newIntern => {
        return `
        <div class="card employee-card">
        <div class="card-header">
            <h2 class="card-title">${newIntern.getName()}</h2>
            <h3 class="card-title"><i class="fas fa-mug-hot mr-2"></i>${newIntern.getRole()}</h3>
        </div>
        <div class="card-body">
            <ul class="list-group">
                <li class="list-group-item">ID: ${newIntern.getId()}</li>
                <li class="list-group-item">Email: <a href="mailto:${newIntern.getEmail()}">${newIntern.getEmail()}</a></li>
                <li class="list-group-item"> School: ${newIntern.getSchool()}</li> 
            </ul>
        </div>
    </div>
        `;
    };

    const html = [];

    html.push(newTeam
        .filter(employee => employee.getRole() === "Manager")
        .map(newManager => generateManager(newManager))
    );

    html.push(newTeam
        .filter(employee => employee.getRole() === "Engineer")
        .map(newEngineer => generateEngineer(newEngineer))
    );

    html.push(newTeam
        .filter(employee => employee.getRole() === "Intern")
        .map(newIntern => generateIntern(newIntern))
    );


    return html.join("");

};

module.exports = generateTeam;