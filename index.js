const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./Develop/generateMarkdown.js').generateMarkdown;

// Object Array with questions of the user 
const questions = [
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
      message: 'What are the installation instructions?',
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
    message: 'Which license are you using?',
    choices: ['Apache 2.0', 'CCO', 'MIT', 'GNU 3.0', 'None'],
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
  ]

// Function that initializes the application
function init() {
  inquirer.prompt(questions)
  .then((response) => {
  const userResponse = generateMarkdown(response);
  fs.writeFile('README.md', userResponse, (error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Success!');
    }
  });
});
};

// Call the function init
init();
