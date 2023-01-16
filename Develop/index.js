// TODO: Include packages needed for this application

const { default: inquirer } = require("inquirer");
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
    message: 'what is the project description?',
},
{
    type: 'input',
    name: 'Table of content',
    message: 'what is the table of content of the project?'
},
{
    type: 'input',
    name: 'installation',
    message: 'what is the project installation instructions?',

},
{
    type: 'input',
    name: 'usage',
    message: 'what is the project usage information?',

},
{
    type: 'input',
    name: 'contribution',
    message : 'what is the project contributions?',

},
{
    type: 'input',
    name: 'test',
    message: 'what is the project test instructions '
},
{
    type: 'list',
    name: 'license',
    message: 'what is the project License ',
    choices: ["Apache","Boost","GNU","MIT"],

},
{
    type: 'input',
    name: 'Github',
    message: 'Enter your Github username',

},
{
    type: 'input',
    name: 'email',
    message: 'Enter your email'
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(responds =>{

    })
}

// Function call to initialize app
init();
