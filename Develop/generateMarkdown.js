
// Function that returns the license badge based on the users choice
const renderLicenseBadge = (license) => {
  if (license === 'None') {
    return 'This repository is unlicensed';
  } else if (license === 'Apache 2.0') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license ==='CCO') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license ==='GNU 3.0') {
    return'[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  }
};

// Function that returns the link to the choosen license
function renderLicenseLink(license) {
  if (license === 'None') {
    return 'This repository is unlicensed';
  } else if (license === 'Apache 2.0') {
    return 'https://choosealicense.com/licenses/apache-2.0/';
  } else if (license === 'CCO') {
    return 'https://choosealicense.com/licenses/cc0-1.0/';
  } else if (license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/';
  } else if (license === 'GNU 3.0') {
    return 'https://choosealicense.com/licenses/gpl-3.0/';
  }
}

// Function that generates the README
const generateMarkdown = ({ project, description, installation, usage, contributing, test, license, github, email}) =>
`${renderLicenseBadge(license)}
# ${project}
## Description
### ${description}
## Table of Contents
### • [Installation](#installation)
### • [Usage Information](#usage-information)
### • [Contribution Guidelines](#contribution-guidelines)
### • [Test Instructions](#test-instructions)
### • [License](#license)
### • [Questions](#questions)    
## Installation
### ${installation}
## Usage Information
### ${usage}
## Contribution Guidelines 
### ${contributing}
## Test Instructions
### ${test}
## License
### ${license}  
### ${renderLicenseLink(license)}
## Questions  
### https://github.com/${github}  
### ${email}`;

// Export generateMarkdown to the index.js
module.exports = {
  generateMarkdown,
}

