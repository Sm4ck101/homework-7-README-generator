function renderLicenseBadge(license) {
  let licenseLink = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License: Apache License 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GPL: '[![License: GPL](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    BSD: '[![BSDLicense](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  }
  return licenseLink[license]
};

function renderLicenseSection(license) {
  if (!license ) {
    return '';
  } else {
    return renderLicenseBadge(license)
  }
};

function generateMarkdown(data) {
  let license = renderLicenseSection(data.license)
  return `
  # ${data.title}
  ## Table of contents
  - [project description](#Description)
  - [installation](#Installation)
  ## Description
  ${data.description}
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## Contribution guidelines
  ${data.contribution}
  ## Test instructions
  ${data.test}
  ## License
  ${license}
  ## GitHub link
  [!Profile](https://github.com/${data.username})
  ## Email
  [!Email](mailto:${data.email})
`;
}

module.exports = generateMarkdown;