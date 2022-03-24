// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
// source for license badges and links: https://gist.github.com/lukas-h/2a5d00690736b4c3a7ba

function renderLicenseBadge(license) {
  switch(license) {
    case 'Apache 2.0':
      return '![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)';
      break;
    case 'BSD 3-Clause':
      return '![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)';
      break;
    case 'BSD 2-Clause':
      return '![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)';
      break;  
    case 'Eclipse Public License 1.0':
      return '![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)';
      break;
    case 'GNU GPL v3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)';
      break;
    case 'GNU GPL v2':
      return '![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)';
      break;
    case 'IBM Public License Version 1.0':
      return '![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)';
      break;
    case 'ISC License (ISC)':
      return '![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)';
      break;
    case 'MIT License':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';
      break;
    case 'Mozilla Public License 2.0':
      return '![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)';
      break;
    case 'Attribution License (BY)':
      return '![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)';
      break;
    case 'Public Domain Dedication and License (PDDL)':
      return '![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)';
      break;
  }
}

// console.log(renderLicenseBadge("MIT License"));

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const license = renderLicenseBadge(data.license);

  return `# ${data.title}
${license}

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## License
${data.license}

## Contributing
${data.contribute}

## Tests
${data.test}

## Questions
If you have any questions, please don't hesitate to contact me:
 * Github - [github.com/${data.username}](https://github.com/${data.username})
 * Email - ${data.email}

`
}

module.exports = generateMarkdown;
