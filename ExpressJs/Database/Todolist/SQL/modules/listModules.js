const db = require('../db');

async function getAllLists(req, res) {
  const list = await db.query('select * from lists');

  if (list.rows) {
    res.json(list.rows);
  } else {
    res.json("You don't have any list");
  }
}

async function getList(req, res) {
  const { id } = req.params;
  const currentList = await db.query('select * from lists where id=$1', [id]);

  if (currentList.rows) {
    res.json(currentList.rows);
  } else {
    res.json("List not found");
  }
}

async function getTasksInList(req, res) {
  const { id } = req.params;
  const { all } = req.query;

  if (all) {
    const allListTasks = await db.query('select * from todos where list_id=$1', [id]);
    if (allListTasks.rows[0]) {
      res.json(allListTasks.rows);
    } else {
      res.json("Tasks in this list not found");
    }
  } else {
    const filterTask = await db.query('select * from todos where list_id=$1 and done=false', [id]);
    if (filterTask.rows[0]) {
      res.json(filterTask.rows);
    } else {
      res.json("Tasks in this list not found");
    }
  }
}

async function createList(req, res) {
  const { title } = req.body;

  const newList = await db.query('insert into lists (title) values ($1) returning *', [title]);
  res.json(newList.rows[0]);
}

async function editList(req, res) {
  const { title } = req.body;
  const { id } = req.params;

  const editedList = await db.query('update lists set title=$1 where id=$2 returning *', [title, id]);

  if (editedList.rows[0]) {
    res.json(editedList.rows[0]);
  } else {
    res.json("List not found");
  }
}

async function updateList(req, res) {
  const { id } = req.params;
  const { title } = req.body;

  const list = await db.query('select * from lists where id=$1', [id]);

  if (list.rows[0]) {
    await db.query('delete from lists where id=$1 returning *', [id]);

    const updatedList = await db.query('insert into lists (title) values ($1) returning *', [title]);
    res.json(updatedList.rows);
  } else {
    res.json("List not found");
  }
}

async function deleteList(req, res) {
  const { id } = req.params;

  const list = await db.query('select * from lists where id=$1', [id]);

  if (list.rows[0]) {
    const deletedList = await db.query('delete from lists where id=$1 returning *', [id]);
    res.json(deletedList.rows[0]);
  }
}

module.exports = { getAllLists, getList, createList, editList, getTasksInList, updateList, deleteList };