// set up included packages
const fs = require('fs');
const axios = require("axios");
const inquirer = require("inquirer");


const questions = [
    {name:"username",
     message:"Enter your GitHub username: "}
];

function writeToFile(fileName, data) {
}
//Retrieve user profile image using github api. Code taken from slack
function getGitHubData(username) {
    const queryUrl = `https://api.github.com/search/users?q=${username}`;

    return axios
        .get(queryUrl)
        .then(function (response) {
            const { avatar_url } = response.data.items[0];
            return avatar_url
        })
}

function init() {
    // get github username
    inquirer
    .prompt([
        {
            message: questions[0].message,
            name: questions[0].name
        },
        {
            type: "input",
            name: 'title',
            message:"Enter the title of your project: "
            
        },
        {
            type: "input",
            name: 'description',
            message:"Description of your project: "            
        },
        {
            type: "input",
            name: 'installation',
            message:"Installation details your application: "
            
        },
        {
            type: "input",
            name: 'usage',
            message:"Usage for your application: "
            
        },
        {
            type: "input",
            name: 'license',
            message:"What is your license information: "
           
        },
        {
            type: "input",
            name: 'contributing',
            message:"List the names of contributing: "          
        },
        {
            type: "input",
            name: 'tests',
            message:"How to run your test: "
        },
        {
            type: "input",
            name: 'questions',
            message:"Enter any additional questions: "            
        },
    ])
    .then( async function( {username, title, description, installation, usage, license, contributing, tests, questions} ) {
       const avatar = await getGitHubData(username)
        let ReadMe = `
            
# ${title}
# Username 
     ${username}
# Profile picture:
![](${avatar}})
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
