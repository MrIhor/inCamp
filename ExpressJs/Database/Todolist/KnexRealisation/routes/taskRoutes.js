const router = require('express').Router();
const controller = require('../controllers/TaskController');

router.get('/knex/tasks', controller.getAllTasks);

router.get('/knex/:listId/tasks/:taskId', controller.getTask);

router.post('/knex/tasks', controller.createTask);

router.patch('/knex/tasks/:id', controller.editTask);

router.put('/knex/tasks/:id', controller.updateTask);

router.delete('/knex/tasks/:id', controller.deleteTask);

module.exports = router;