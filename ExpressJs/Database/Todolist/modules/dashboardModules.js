const db = require('../db');

async function getDashboard(req, res) {
  const dashboard = {};

  const task = await db.query(
    "select lists.title, lists.id, count(done) from todos right join lists on todos.list_id = lists.id GROUP BY lists.title, lists.id, done HAVING done=false OR done is null;"
  );


  dashboard.allLists = task.rows;
  res.json(dashboard);
}

module.exports = { getDashboard };
