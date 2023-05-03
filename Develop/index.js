// Packages required for the application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is your project title?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description about your project:',
  },
  {
    type: 'input',
    name: 'dependencies',
    message: 'What are the steps required to install your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license does your project have?',
    choices: ['MIT', 'APACHE2.0', 'Boost1.0', 'GLP3', 'None']
  },

  {
    type: 'input',
    name: 'test',
    message: 'Provide an example on how you should run tests?'
  },

  {
    type: 'input',
    name: 'usage',
    message: 'What would be the proper usage of this repo?'
  },

  {
    type: 'input',
    name: 'contributors',
    message: 'Who contributed on this project?'
  }
];

// function to write read me file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize app
function init() {
  inquirer.prompt(questions)
    .then((inquirerAnswers) => {
      console.log('Please wait....');
      writeToFile('./README.md', generateMarkdown({ ...inquirerAnswers }));
    })
}

// function call to initialize app
init();