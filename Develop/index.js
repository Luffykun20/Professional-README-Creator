// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {

    type: 'input',
    name: 'name',
    message: 'what is the project title?' 
},
{
    type: 'input',
    name: 'description',
    message: 'Describe your project',
},
{
    type: 'input',
    name: 'table',
    message: 'what are the contents in the Readme.md '
},
{
    type: 'input',
    name: 'installation',
    message: 'what are the installation instructions for the project?',

},
{
    type: 'input',
    name: 'usage',
    message: 'what is the project usage information?',

},
{
    type: 'input',
    name: 'contributing',
    message : 'Sponsors or Contributors on the project?',

},
{
    type: 'input',
    name: 'test',
    message: 'what are the project test instructions? '
},
{
    type: 'list',
    name: 'license',
    message: 'what license are you using?',
    choices: ["Apache", "Boost", "GNU", "MIT"],

},
{
    type: 'input',
    name: 'contact1',
    message: 'What is your Github username?',

},
{
    type: 'input',
    name: 'contact2',
    message: 'What is your email address?',
}
];

// TODO: Create a function to write README file
function writeToFile ({name, description,  installation, usage, contributing, test, license, contact1, contact2}){
    return  `# ${name}

## Description

${description}
    
## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)

## Installation
    
${installation}

## Usage
    
${usage}
    
## Credits
    
${contributing}

##Tests

${test}
## License
        
${license}
    
## Badges
    
![badmath](https://img.shields.io/github/languages/top/lernantino/badmath)
    
Badges aren't necessary, per se, but they demonstrate street cred. Badges let other developers know that you know what you're doing. Check out the badges hosted by [shields.io](https://shields.io/). You may not understand what they all represent now, but you will in time.
    
## Contact me

-https://github.com/${contact1}
-You can also can contact me to ${contact2} if you have any question.
`
};



// TODO: Create a function to initialize app
function init(){
    inquirer.prompt(questions).then(responds =>{
        fs.writeFileSync("README.md", writeToFile(responds))

    })
}

// Function call to initialize app
init();
