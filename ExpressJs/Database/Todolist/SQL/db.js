const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'todolist_app',
    password: 'secret',
    host: 'localhost',
    port: 5432,
    database: 'todolist'
});

module.exports = pool;