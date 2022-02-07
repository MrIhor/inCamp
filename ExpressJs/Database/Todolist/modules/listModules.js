const db = require('../db');

async function getAllLists(req, res) {
  const { id } = req.params;
  const tasksList = await db.query('select * from lists');
  res.json(tasksList.rows);
}

async function getList(req, res) {
  const { id } = req.params.id;
  const listIsExist = await db.query('select * from lists where id=$1', [id]);

  if (listIsExist.rows[0]) {
    const list = ('select * from lists as l left join todos as t on(l.$1=t.list_id)', [id]);
    res.json(list);
  } else {
    res.json("You don't have list with this id");
  }
}

module.exports = { getAllLists, getList };