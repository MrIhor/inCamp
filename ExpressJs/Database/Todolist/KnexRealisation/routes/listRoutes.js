const router = require('express').Router();
const controller = require('../controllers/ListController');

router.get('/knex', controller.getAllLists);

router.get('/knex/:id', controller.getList);

router.get('/knex/:id/tasks', controller.getTasksInList);

router.post('/knex', controller.createList);

router.patch('/knex/:id', controller.editList);

router.put('/knex/:id', controller.updateList);

router.delete('/knex/:id', controller.deleteList);

module.exports = router;