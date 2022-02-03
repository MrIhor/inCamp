const getEmployees = require('./db');

getEmployees().then(result => {
    console.log(result);
});