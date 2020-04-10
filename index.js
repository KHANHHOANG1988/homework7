const fs = require('fs');
const inquirer = require("inquirer");


const questions = [
    {input:"username",
     message:"Enter your GitHub username: "}
];

function writeToFile(fileName, data) {
}

function init() {
    // get github username
    inquirer
    .prompt([
        {
            message: questions[0].message,
            input: questions[0].input
        },
        {
            message:"Enter the title of your project: ",
            input: 'title'
        },
        {
            message:"Description of your project: ",
            input: 'description'
        },
        {
            message:"Installation details your application: ",
            input: 'installation'
        },
        {
            message:"Usage for your application: ",
            input: 'usage'
        },
        {
            message:"What is your license information: ",
            input: 'license'
        },
        {
            message:"List the names of contributors: ",
            input: 'contributing'
        },
        {
            message:"How to run your test: ",
            input: 'tests'
        },
        {
            message:"Enter any additional questions: ",
            input: 'questions'
        },
    ])
    .then(function( {username, title, description, installation, usage, license, contributing, tests, questions} ) {
        
    let ReadMe = `
            
    # ${title}
    # Username 
        ${username}
    # Email: 
    # Profile picture:
    ## Description
        ${description}
    ## Table of Contents
        * [Installation](#installation)
        * [Usage](#usage)
        * [Credits](#contributing)
        * [License](#license)
    ## Installation
        ${installation}
    ## Usage
        ${usage}
    ## License
        ${license}
    ## Contributing
        ${contributing}
    ## Tests
        ${tests}
    ## Questions
        ${questions}
    `
        //creating the readme.md using writeFile
    fs.writeFile("ReadMe.md", ReadMe, function(err){
        if (err){return console.log(err);}
               })
        })
    // });
}
//run init

init();
