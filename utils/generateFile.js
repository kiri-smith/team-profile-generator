// TODO: Create a function to generate markdown for README
// text literal using backticks ... it allows us to combine html or text with js or jquery 
function generateFile(data) {
    return `


# ${data.title}

${renderLicenseBadge(data.license)}

## Description

${data.description}

## Table of Contents
* [Title](#${data.title})
* [Description](##Description)
* [Installation](##Installation)
* [Usage](##Usage)
* [License](##License)
* [Contributing](##Contributing)
* [Tests](##Tests)
* [Questions](##Questions)

## Installation

${data.installation}

## Usage

${data.usage}

## License

${data.license}

## Contributing

${data.contributing}

## Tests

${data.test}

## Questions

Please reach out to me by email with any questions you may have:
${data.email}

You may also follow me on Github, to view other repositories:
${data.username}

`;
}

module.exports = generateFile;