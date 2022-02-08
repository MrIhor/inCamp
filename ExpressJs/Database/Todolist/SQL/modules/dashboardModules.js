const db = require('../db');

async function getDashboard(req, res) {
  const dashboard = {};

  const undoneTasks = await db.query('select count(id) from todos where done=false and due_date <= current_date');

  const lists = await db.query(
    "select lists.title, lists.id, cast(count(done) as int) from todos right join lists on todos.list_id = lists.id group by lists.title, lists.id, done HAVING done=false OR done is null;"
  );

  dashboard.undoneCount = Number(undoneTasks.rows[0].count);
  dashboard.allLists = lists.rows;
  res.json(dashboard);
}

module.exports = { getDashboard };
