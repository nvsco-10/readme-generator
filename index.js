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
    message: "Provide a short description of your project."    
    },
    {
    name: 'install',
    type: 'input',
    message: "What are the steps required to install your project?"    
    },
    {
    name: 'license',
    type: 'list',
    message: "Choose a license for your software.",
    choices: [
        'MIT License',
        'Apache 2.0'
    ]    

    }
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
