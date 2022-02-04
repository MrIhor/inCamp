const db = require('../db');

async function createTask(req, res) {
    const { title, listId } = req.body;
    const done = false;
    const date = new Date();

    const newTask = await db.query('insert into todos (title, done, due_date, list_id) values ($1, $2, $3, $4) returning *',
        [title, done, date, listId]);
    res.json(newTask.rows[0]);
}

async function getAllTasks(req, res) {
    const tasks = await db.query('select * from todos');
    res.json(tasks.rows);
}

async function deleteTask(req, res) {
    const { taskId } = req.body;

    const deletedTask = await db.query('delete from todos where id=$1 returning *', [taskId]);
    res.json(deletedTask.rows[0]);
}

async function editTask(req, res) {
    const { title, done } = req.body;
    const id = req.params.id;

    if (title && done) {
        const editedTask = await db.query('update todos set title=$1, done=$2 where id=$3 returning *', [title, done, id]);
        res.json(editedTask.rows[0]);
    } else if (title) {
        const editedTask = await db.query('update todos set title=$1 where id=$2 returning *', [title, id]);
        res.json(editedTask.rows[0]);
    } else {
        const editedTask = await db.query('update todos set done=$1 where id=$2 returning *', [done, id]);
        res.json(editedTask.rows[0]);
    }
}

async function updateTask(req, res) {
    const { title, listId } = req.body;
    const id = req.params.id;
    const date = new Date();

    const task = await db.query('select * from todos where id=$1 returning *', [id]);

    if (task) {
        await db.query('delete from todos where id=$1 returning *', [id]);
        const updatedTask = await db.query('insert into todos (title, done, due_date, list_id) values($1, false, $2, $3) returning *', [title, date, listId]);
        res.json(updatedTask.rows[0]);
    } else {
        res.json("You don't have task with this id");
    }
}

module.exports = { createTask, getAllTasks, deleteTask, editTask, updateTask };