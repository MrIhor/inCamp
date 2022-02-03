const db = require('../db');

async function createEmployee(req, res) {
    const {employee, birthday} = req.body;
    const newEmployee = await db.query('insert into employees (employee, birthday) values ($1, $2) returning *', [employee, birthday]);
    res.json(newEmployee.rows[0]);
}

async function getAllEmployees(req, res) {
    const employees = await db.query('select * from employees');
    res.json(employees.rows);
}

async function getEmployee(req, res) {
    const id = req.params.id;
    const employee = await db.query('select * from employees where id=$1', [id]);
    res.json(employee.rows[0]);
}

async function deleteEmployee(req, res) {
    const id = req.params.id;
    const employee = await db.query('delete from employees where id=$1', [id]);
    res.json(employee.rows[0]);
}

module.exports = {createEmployee, getAllEmployees, getEmployee, deleteEmployee};