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
    case 'No License':
      return '';
      break;
  }
}

// console.log(renderLicenseBadge("MIT License"));

function renderLicenseLink(license) {
  switch(license) {
    case 'Apache 2.0':
      return '[Apache 2.0](https://www.apache.org/licenses/LICENSE-2.0.html)';
      break;
    case 'BSD 3-Clause':
      return '[BSD 3-Clause](https://opensource.org/licenses/BSD-3-Clause)';
      break;
    case 'BSD 2-Clause':
      return '[BSD 2-Clause](https://opensource.org/licenses/BSD-2-Clause)';
      break;  
    case 'Eclipse Public License 1.0':
      return '[Eclipse Public License 1.0](https://www.eclipse.org/legal/epl-v10.html)';
      break;
    case 'GNU GPL v3':
      return '[GNU GPL v3](https://www.gnu.org/licenses/gpl-3.0.en.html)';
      break;
    case 'GNU GPL v2':
      return '[GNU GPL v2](https://opensource.org/licenses/gpl-2.0.php)';
      break;
    case 'IBM Public License Version 1.0':
      return '[IBM Public License Version 1.0](https://opensource.org/licenses/IPL-1.0)';
      break;
    case 'ISC License (ISC)':
      return '[ISC License (ISC)](https://www.isc.org/licenses/)';
      break;
    case 'MIT License':
      return '[MIT License](https://mit-license.org/)';
      break;
    case 'Mozilla Public License 2.0':
      return '[Mozilla Public License 2.0](https://www.mozilla.org/en-US/MPL/2.0/)';
      break;
    case 'Attribution License (BY)':
      return '[Open Data Commons Attribution](https://creativecommons.org/licenses/by/3.0/)';
      break;
    case 'Public Domain Dedication and License (PDDL)':
      return '[Public Domain Dedication and License (PDDL)](https://opendatacommons.org/licenses/pddl/1-0/#:~:text=The%20Open%20Data%20Commons%20%E2%80%93%20Public%20Domain%20Dedication,or%20individually.%20Many%20databases%20are%20covered%20by%20copyright.)';
      break;
    case 'No License':
      return '';
      break;
  }
}

function renderLicenseSection(license) {
  const link = renderLicenseLink(license);

  if (license === 'No License') {
    return '';
  } else {
    return `This code is licensed under ${link}.`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseStatement = renderLicenseSection(data.license);

  return `# ${data.title}
  ${licenseBadge} 

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
${licenseStatement}

## Contributing
${data.contribute}

## Tests
${data.test}

<hr>

## Questions
If you have any questions, please don't hesitate to contact:
 * Github - [github.com/${data.username}](https://github.com/${data.username})
 * Email - ${data.email}

`
}

module.exports = generateMarkdown;
