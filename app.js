// **npm Packages**
const inquirer = require('inquirer');
// // **Core Library Modules
// const fs = require('fs');
// // **Personal Modules**
// const generatePage = require('./src/page-template.js');

// const pageHTML = generatePage(name, github);

// // first argument is file name that will be created
// // the second argument is the data thats being written: HTML string template
// // third argument is the callback function that will handle any errors as well as the success message
// fs.writeFile('./index.html', pageHTML, err => {
//     if (err) throw err;

//     console.log('Portfolio complete! Check out index.html to see the output!');
// });

inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        }
    ])
    .then(answers => console.log(answers));