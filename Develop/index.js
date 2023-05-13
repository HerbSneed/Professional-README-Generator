// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'project-title',
    },
    {
      type: 'input',
      message: 'What is the description of your project?',
      name: 'description',
    },
    {
      type: 'input',
      message: 'What are the installation instrutions?',
      name: 'installation',
    },
    {
      type: 'input',
      message: 'What will your application be used for?',
      name: 'ussage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'contributing',
    },
    {
    type: 'input',
    message: 'How will you test the application?',
    name: 'test',
    }, 
  ])  
];



// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {
//   fs.writeFile('README.md')
// }

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
