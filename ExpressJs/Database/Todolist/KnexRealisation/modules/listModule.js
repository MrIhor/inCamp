const db = require('../db');

async function getAllLists(req, res) {
  const lists = await db('lists').select('*');

  res.json(lists);
}

async function getList(req, res) {
  const { id } = req.params;

  const list = await db('lists')
    .select('*')
    .where('id', id);

  res.json(list);
}

async function getTasksInList(req, res) {
  const { id } = req.params;
  const { all } = req.query;

  if (all) {
    const allListTasks = await db('todos')
      .select('*')
      .where('list_id', id);

    if (allListTasks) {
      res.json(allListTasks);
    } else {
      res.json('Tasks in this list not found');
    }
  } else {
    const filterTask = await db('todos')
      .select('*')
      .where({
        list_id: id,
        done: false
      })

    if (filterTask) {
      res.json(filterTask);
    } else {
      res.json('Tasks in this list not found');
    }
  }
}

async function createList(req, res) {
  const { title } = req.body;

  const newList = await db('lists')
    .insert({ listname: title })
    .returning('*');

  res.json(newList[0]);
}

async function editList(req, res) {
  const { title } = req.body;
  const { id } = req.params;

  const editedList = await db('lists')
    .where('id', id)
    .update({ listname: title })
    .returning('*');

  if (editedList) {
    res.json(editedList);
  } else {
    res.json("List not found");
  }
}

async function updateList(req, res) {
  const { id } = req.params;
  const { title } = req.body;

  const oldList = await db('lists')
    .select('*')
    .where('id', id)

  if (oldList) {
    await db('lists')
      .where('id', id)
      .del()

    const updatedList = await db('lists')
      .insert({ listname: title })
      .returning('*');

    res.json(updatedList);
  } else {
    res.json('List not found');
  }
}

async function deleteList(req, res) {
  const { id } = req.params;

  const list = await db('lists')
    .select('*')
    .where('id', id);

  if (list) {
    const deletedList = await db('lists')
      .where('id', id)
      .del()

    res.json(list[0]);
  }
}

module.exports = { getAllLists, getList, getTasksInList, createList, editList, updateList, deleteList };