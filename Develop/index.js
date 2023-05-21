// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const questions = [
  inquirer
    .prompt([
    {
      type: 'input',
      message: 'What is the title of your project?',
      name: 'project',
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
      name: 'usage',
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
    {
    type: 'list',
    message: 'Which liscense are you using?',
    choices: ['Apache', 'CCO', 'MIT', 'GNU', 'None'],
    name: 'license',
    },
    {
    type: 'input',
    message: 'Enter you GitHub username.',
    name: 'github',
    },
    {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    },  
  ])  
  .then(response => {
    const userResponse = generateMarkdown(response);
    console.log(userResponse)
    fs.writeFile('README.md', userResponse, (error) =>
    error ? console.error (error) : console.log('Success')
    )
  }
)];


// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
