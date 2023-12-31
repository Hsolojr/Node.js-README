// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:',
      },
      {
        type: 'input',
        name: 'description',
        message: 'Enter a project description:',
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Enter installation instructions:',
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Enter usage information:',
      },
      {
        type: 'input',
        name: 'contributing',
        message: 'Enter contribution guidelines:',
      },
      {
        type: 'input',
        name: 'tests',
        message: 'Enter test instructions:',
      },
      {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your application:',
        choices: ['MIT', 'Apache 2.0', 'GNU GPL v3', 'Other'],
      },
      {
        type: 'input',
        name: 'githubUsername',
        message: 'Enter your GitHub username:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:',
      },
    ];
    const licenses = [
			{
				name: 'MIT License',
				badge: 'https://img.shields.io/badge/License-MIT-yellow.svg',
				description: 'https://opensource.org/licenses/MIT',
			},
	
			{
				name: 'Unlicense',
				badge: 'https://img.shields.io/badge/license-Unlicense-blue.svg',
				description: 'http://unlicense.org/',
			},
	
			{
				name: 'GNU General Public License',
				badge: 'https://img.shields.io/badge/License-GPLv3-blue.svg',
				description: 'https://www.gnu.org/licenses/gpl-3.0',
			},
	
			{
				name: 'Apache License',
				badge: 'https://img.shields.io/badge/License-Apache_2.0-blue.svg',
				description: 'https://opensource.org/licenses/Apache-2.0',
			},
	
			{
				name: 'Eclipse Public License',
				badge: 'https://img.shields.io/badge/License-EPL_1.0-red.svg',
				description: 'https://opensource.org/licenses/EPL-1.0',
			},
	
			{
				name: 'BSD3 License',
				badge: 'https://img.shields.io/badge/License-BSD_3--Clause-blue.svg',
				description: 'https://opensource.org/licenses/BSD-3-Clause',
			},
	
			{
			name: 'Mozilla Public License',
			badge: 'https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg',
			description: 'https://opensource.org/licenses/MPL-2.0',
			},
	
		];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const readmeContent = `
  # ${data.title}
  
  ## Description
  ${data.description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  Before using the Readme Generator, ensure you have [Node.js](https://nodejs.org/) installed on your system. To install the required Inquirer.js library, open your terminal and run:
  ${data.installation}
  
  ## Usage
  To create a README.md file for your project, follow these steps:
  1. Navigate to the folder where you want to generate the README.md file using the cd command:
  ${data.usage}
  
  ## Contributing
  I would like to give a special thanks to ${data.contributing}
  
  ## Tests
  ${data.tests}
  
  ## License
  This application is covered under the ${data.license} ![Dynamic JSON Badge](https://img.shields.io/badge/dynamic/json)
  license.
  
  ## Questions
  GitHub: [${data.githubUsername}](https://github.com/${data.githubUsername})
  For additional questions, contact me at ${data.email}.
  `;
  
    // Write the content to the specified file
    fs.writeFileSync('README.md', readmeContent);
  }
  
  // Create a function to initialize app
  function init() {
    inquirer.prompt(questions).then((data) => {
      writeToFile('README.md', data);
      console.log('README Generated Successfully!');
    });
  }
  
  // Function call to initialize app
  init();