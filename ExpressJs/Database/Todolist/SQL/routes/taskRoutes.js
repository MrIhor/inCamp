const router = require('express').Router();
const controller = require('../controllers/TaskController');

router.get('/tasks', controller.getAllTasks);

router.get('/:listId/tasks/:taskId', controller.getTask);

router.post('/tasks', controller.createTask);

router.delete('/tasks/:id', controller.deleteTask);

router.patch('/tasks/:id', controller.editTask);

router.put('/tasks/:id', controller.updateTask);

module.exports = router;