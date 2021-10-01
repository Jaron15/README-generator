// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let temp = '';
  switch(license) {
    
    case 'MIT':
      temp+=('[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)')
      break;
      case 'Apache':
        temp+=('[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)')
        break;
      case 'GNU GPLv3':
        temp+=('[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)')
        break;
        default:   
  }
  return temp;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {license} = data
  const badge = renderLicenseBadge(license);
  return `# ${data.title} ${badge}
## Description
${data.description}

## Table of Contents 
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#Contributing)
* [License](#License)
* [Tests](#Tests)
* [Questions](#Questions)

## Installation
${data.installation}

## Usage 
${data.usage}

## Contributing
${data.contributing}

## License
${data.license}

## Tests
${data.tests}

## Questions
${data.questions}
`;
}

module.exports = generateMarkdown;
