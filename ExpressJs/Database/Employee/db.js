const Pool = require('pg').Pool;

const pool = new Pool({
    user: 'todolist_app',
    password: 'secret',
    host: 'localhost',
    port: 5432,
    database: 'todolist'
});

async function getEmployees(req, res) {
    const employees = await pool.query('select * from employees');
    return employees.rows;
}

module.exports = getEmployees;