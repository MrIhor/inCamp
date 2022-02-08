const db = require('../db');

async function getToday(req, res) {
  const current_date = new Date();

  const collection = await db
    .select('todos.id', 'todos.title', 'todos.done', 'todos.due_date', 'lists.listname')
    .from('todos')
    .rightJoin('lists', 'lists.id', 'todos.list_id')
    .groupBy('todos.id', 'todos.title', 'lists.listname', 'todos.done', 'todos.due_date')
    .where('todos.due_date', '<=', current_date)
    .andWhere('todos.done', false);

  res.json(collection);
}

module.exports = { getToday };