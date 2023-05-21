// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (license) => {
  const Apache = '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  const CCO = '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)'
  const MIT = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  const GNU = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  const None = '';

  if (license === 'None') {
    return None;
  } else if (license === 'Apache') {
    console.log()
    return Apache;
  } else if (license ==='CCO') {
    return CCO;
  } else if (license === 'MIT') {
    return MIT;
  } else if (license ==='GNU') {
    return GNU;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenseAPI = 'https://api.github.com/licenses';



  if (license === 'None') {
    return '';
  } else if (license === 'Apche') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else if (license === 'CC0') {
    return '[![License: CC0-1.0](https://licensebuttons.net/l/zero/1.0/80x15.png)](http://creativecommons.org/publicdomain/zero/1.0/)';
  } else if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'GNU') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
};

// TODO: Create a function to generate markdown for README
const generateMarkdown = ({ project, description, installation, usage, contributing, test, license, github, email}) =>
  `# ${project}
## ${description}
## ${installation}
## ${usage}
## ${contributing}
## ${test}
## ${license}
## ${github}
## ${email}`

module.exports = 
  generateMarkdown, renderLicenseBadge
