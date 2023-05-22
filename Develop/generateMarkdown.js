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

function renderLicenseLink(license) {
  if (license === 'None') {
    return 'This repository is unlicensed';
  } else if (license === 'Apache 2.0') {
    return 'https://api.github.com/licenses/apache-2.0';
  } else if (license === 'CC0') {
    return 'https://api.github.com/licenses/cc0-1.0';
  } else if (license === 'MIT') {
    return 'https://api.github.com/licenses/mit';
  } else if (license === 'GNU 3.0') {
    return 'https://api.github.com/licenses/gpl-3.0';
  }
}

const generateMarkdown = ({ project, description, installation, usage, contributing, test, license, github, email}) =>
`${renderLicenseBadge(license)}
# ${project}
## Description
${description}
## Table of Contents
### • Installation
### • Usage Information
### • Contribution Guidelines
### • Test Instructions
### • License
### • Questions
  
## Installation
${installation}
## Usage Information
${usage}
## Contribution Guidelines 
${contributing}
## Test Instructions
${test}
## License
The application is cover under ${license}  
${renderLicenseLink(license)}
## Questions
https://github.com/${github}
Feel free to email me at ${email}`;

module.exports = {
  generateMarkdown,
}

