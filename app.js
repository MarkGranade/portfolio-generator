const fs = require('fs');
const generatePage = require('./src/page-template.js');

const profileDataArgs = process.argv.slice(2, process.argv.length);

// Using assignment destructuring to assign elements of an array to variable names in a single expression
const [name, github] = profileDataArgs;



// first argument is file name that will be created
// the second argument is the data thats being written: HTML string template
// third argument is the callback function that will handle any errors as well as the success message
fs.writeFile('./index.html', generatePage(name, github), err => {
    if (err) throw new Error(err);

    console.log('Portfolio complete! Check out index.html to see the output!');
});