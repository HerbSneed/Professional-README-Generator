// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown.js');

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
      choices: ['Apche 2.0', 'MIT', 'GNU'],
      name: 'License',
    },
    {
    type: 'input',
    message: 'Enter you GitHub username.',
    name: 'Questions',
    },
    {
    type: 'input',
    message: 'What is your email address?.',
    name: 'Questions',
    },  
  ])  
  .then(response => {
    const userResponse = JSON.stringify(response);
    console.log(JSON.stringify(userResponse))
    fs.writeFile('README.md', `${userResponse}`, (error) =>
    error ? consdole.error (error) : console.log(response)
    )
  }
)];



// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
