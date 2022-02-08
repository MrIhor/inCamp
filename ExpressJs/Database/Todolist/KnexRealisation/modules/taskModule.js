const db = require('../db');

async function getAllTasks(req, res) {
  const tasks = await db('todos')
    .select('*')

  res.json(tasks);
}

async function getTask(req, res) {
  const { listId, taskId } = req.params;

  const task = await db('todos')
    .select('*')
    .where({
      id: taskId,
      list_id: listId
    });

  if (task[0]) {
    res.json(task[0]);
  } else {
    res.json("Task not found");
  }
}

async function createTask(req, res) {
  const { title, listId, date } = req.body;

  const list = await db('lists')
    .select('*')
    .where('id', listId);

  if (list) {
    const newTask = await db('todos')
      .insert({
        title: title,
        done: false,
        list_id: listId,
        due_date: date
      })
      .returning('*');

    res.json(newTask[0]);
  } else {
    res.json("You don't have list with this id");
  }
}

async function editTask(req, res) {
  const { id } = req.params;
  const { title, done, date } = req.body;

  const task = await db('todos')
    .where('id', id);

  if (task[0]) {
    const currentTask = task[0];
    const editedTask = await db('todos')
      .where('id', id)
      .update({
        title: title ? title : currentTask.title,
        done: done ? done : currentTask.done,
        due_date: date ? date : currentTask.date
      })
      .returning('*');

    res.json(editedTask[0]);
  } else {
    res.json("You don't have task with this id");
  }
}

async function updateTask(req, res) {
  const { title, listId, date } = req.body;
  const { id } = req.params;

  const task = await db('todos')
    .where('id', id);

  if (task[0]) {
    await db('todos')
      .where('id', id)
      .del()

    const updatedTask = await db('todos')
      .insert({
        title: title,
        done: false,
        list_id: listId,
        due_date: date
      })
      .returning('*');

    res.json(updatedTask[0]);
  } else {
    res.json("You don't have task with this id");
  }
}

async function deleteTask(req, res) {
  const { id } = req.params;
  const task = await db('todos')
    .where('id', id);

  if (task[0]) {
    const deletedTask = await db('todos')
      .where('id', id)
      .del()
      .returning('*');

    res.json(deletedTask[0]);
  } else {
    res.json("You don't have task with this id");
  }
}

module.exports = { getAllTasks, createTask, getTask, editTask, updateTask, deleteTask }