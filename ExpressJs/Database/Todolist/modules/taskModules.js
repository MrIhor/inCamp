const db = require('../db');

async function createTask(req, res) {
    const { title, listId, date } = req.body;
    const done = false;

    const list = await db.query('select * from lists where id=$1', [listId]);

    if (list.rows[0]) {
        const newTask = await db.query('insert into todos (title, done, due_date, list_id) values ($1, $2, $3, $4) returning *',
            [title, done, date, listId]);
        res.json(newTask.rows[0]);
    } else {
        res.json("You don't have list with this id");
    }
}

async function getAllTasks(req, res) {
    const tasks = await db.query('select * from todos');
    res.json(tasks.rows);
}

async function getTask(req, res) {
    const { listId, taskId } = req.params;

    const task = await db.query('select * from todos where id=$1 and list_id=$2', [taskId, listId]);

    if (task.rows[0]) {
        res.json(task.rows[0]);
    } else {
        res.json("Task not found");
    }
}

async function deleteTask(req, res) {
    const { id } = req.params;
    const task = await db.query('select * from todos where id=$1', [id]);

    if (task.rows[0]) {
        const deletedTask = await db.query('delete from todos where id=$1 returning *', [id]);
        res.json(deletedTask.rows[0]);
    } else {
        res.json("You don't have task with this id");
    }
}

async function editTask(req, res) {
    const { id } = req.params;
    const { title, done, date } = req.body;

    const task = await db.query("SELECT * FROM todos where id = $1", [id]);

    if (task.rows[0]) {
        const currentTask = task.rows[0];
        const newTask = await db.query(
            "UPDATE todos set title=$2, done=$3, due_date=$4 where id=$1 RETURNING *",
            [
                id,
                title ? title : currentTask.title,
                done ? done : currentTask.done,
                date ? date : currentTask.due_data
            ]
        );

        if (newTask.rows[0]) {
            res.json(newTask.rows[0]);
        } else {
            res.json("You don't have task with this id");
        }
    } else {
        res.json("You don't have task with this id");
    }
}

async function updateTask(req, res) {
    const { title, listId, date } = req.body;
    const id = req.params.id;

    const task = await db.query('select * from todos where id=$1', [id]);

    if (task.rows[0]) {
        await db.query('delete from todos where id=$1 returning *', [id]);
        const updatedTask = await db.query('insert into todos (title, done, due_date, list_id) values($1, false, $2, $3) returning *', [title, date, listId]);
        res.json(updatedTask.rows[0]);
    } else {
        res.json("You don't have task with this id");
    }
}

module.exports = { createTask, getAllTasks, deleteTask, editTask, updateTask, getTask };