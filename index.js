const inquirer = require("inquirer");
const fs = require('fs');

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
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
