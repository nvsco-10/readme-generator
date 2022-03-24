const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
    name: 'title',
    type: 'input',
    message: "What is the title of your project?"
    },
    {
    name: 'description',
    type: 'input',
    message: "Provide a description of your project."    
    },
    {
    name: 'install',
    type: 'input',
    message: "What are the steps required to install your project?"    
    },
    {
    name: 'usage',
    type: 'input',
    message: "Provide instructions and examples on how to use your application."    
    },
    {
    name: 'contribute',
    type: 'input',
    message: "Can other developers contribute to your project? Please provide guidelines for how to do so."    
    },
    {
    name: 'test',
    type: 'input',
    message: "Does your application have tests? Please provide examples on how to run them."    
    },
    {
    name: 'license',
    type: 'list',
    message: "Choose a license for your application.",
    choices: [
        'Apache 2.0',
        'BSD 3-Clause',
        'BSD 2-Clause',
        'Eclipse Public License 1.0',
        'GNU GPL v3',
        'GNU GPL v2',
        'IBM Public License Version 1.0',
        'ISC License (ISC)',
        'MIT License',
        'Mozilla Public License 2.0',
        'Attribution License (BY)',
        'Public Domain Dedication and License (PDDL)',
        'No License'
        ],    
    },
    {
    name: 'username',
    type: 'input',
    message: "Enter your GitHub username."    
    },
    {
    name: 'email',
    type: 'input',
    message: "Enter your email address."    
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, e => {
        if(e) {
            console.log(e + " this is write to file error")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(response => {
        // console.log(response);

        const markdownData = generateMarkdown(response);
        // console.log(markdownData);

        writeToFile("test", markdownData);
    })
}

// Function call to initialize app
init();
