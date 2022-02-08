const db = require('../db');

async function getDashboard(req, res) {
  const dashboard = {};
  const current_date = new Date();

  const undoneTasks = await db('todos')
    .count('id')
    .where('done', false)
    .andWhere('due_date', '<=', current_date);

  const lists = await db
    .select('lists.listname', 'lists.id', db.raw('count(done)::integer'))
    .from('todos')
    .rightJoin('lists', 'todos.list_id', 'lists.id')
    .groupBy('lists.listname', 'lists.id', 'done')
    .where('done', false)
    .orWhere('done', null);

  dashboard.undoneCount = Number(undoneTasks[0].count);
  dashboard.allLists = lists;
  res.json(dashboard);
}

module.exports = { getDashboard };