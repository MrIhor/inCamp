const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'todolist_app',
    password: 'secret',
    host: 'localhost',
    port: 5432,
    database: 'todolist'
});

// async function getEmployees() {
//     const employees = await pool.query('select * from employees');
//     return employees.rows;
// }

module.exports = pool;