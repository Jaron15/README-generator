// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please give a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the steps required to install your project? Provide a step-by-step description of how to get the development environment running.'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide instructions and examples for use.'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'If you created an application or package and would like other developers to contribute it, you will want to add guidelines for how to do so.'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select a license to add',
        choices: ['Apache', 'MIT', 'GNU GPLv3']
    },
    {
        type: 'input',
        name: 'tests', 
        message: 'Go the extra mile and write tests for your application. Then provide examples on how to run  them.'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Give instructions on how to contact you for further questions. (Github username and email)'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(answers => {
        writeToFile('README2.md', generateMarkdown(answers));
    })
}

// Function call to initialize app
init();
