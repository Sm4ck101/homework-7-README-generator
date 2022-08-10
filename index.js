const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'What is your Github username?',
    },
    {
      type: 'input',
      name: 'email',
      message: 'What is your email address?',
    },
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'How would you describe your project?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Does your application require any dependencies to be installed? If so, list them here:',
    },
    {
      type: 'input',
      name: 'test',
      message: 'Please provide testing instructions for this app:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Please provide usage instructions: ',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Which license is this application covered under?',
      choices: ['MIT','Apache License 2.0', 'GPL','BSD License','None']
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Are there any other contributers to your project? If so, list them here:'
    }
  ])
  .then((answers) => {
    console.log(answers);
      let result = generateMarkdown(answers);
      writeToFile('./dist/readme.md', result)
    })
    .catch((error) => {
      console.log(error)
    })
};

function writeToFile(fileName, data) {
  try {
    fs.writeFileSync(fileName, data);
    console.log(`${fileName} generated successfully`)
  } catch (err) {
    console.error(err);
  }
}

function init() {
  promptUser();
}

init();