const db = require('../db');

async function getToday(req, res) {
  const collection = await db.query('select todos.id, todos.title, todos.done, todos.due_date, lists.listname from lists right join todos on lists.id=todos.list_id group by todos.id, todos.title, lists.listname, todos.done, todos.due_date having todos.due_date = current_date');

  res.json(collection.rows);
}

module.exports = { getToday };