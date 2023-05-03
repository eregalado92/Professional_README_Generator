function generateMarkdown(data) {
  const licenseContent = data.license !== 'None'
    ? `## License  
    Copyright @ ${data.license}. All rights reserved.
    Licensed under the ${data.license} license.`
    : '';

  return `# ${data.title}
  ${data.license !== 'None' ? `![License](https://img.shields.io/badge/license-${data.license}-blue.svg)` : ''}
  
  ## Description 
  ${data.description}

  ## Table of Contents 🗒
  * [Installations](#installations)
  * [Usage](#usage)
  * [Contributors](#contributors)
  * [Tests](#tests)
  * [Questions](#questions)
  ${data.license !== 'None' ? `* [License](#license)` : ''}
  
  ## Installations 
  To install dependencies, run these commands:
  
  \`\`\`
  ${data.dependencies}
  \`\`\`
  
  ## Usage 
  ${data.usage}
  ${licenseContent}

  ## Contributors 
  ${data.contributors}

  ## Tests 
  To run tests, run these commands:

  \`\`\`
  ${data.test}
  \`\`\`
  
  ## Questions
  For additional questions, please contact me at the email provided below. 
  - GitHub: [${data.github}](https://github.com/${data.github}/)
  - Email:  ${data.email}
`;
}

module.exports = generateMarkdown;
