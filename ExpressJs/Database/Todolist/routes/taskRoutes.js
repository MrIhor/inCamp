const router = require('express').Router();
const controller = require('../controllers/TaskController');

router.get('', controller.getAllTasks);

router.post('', controller.createTask);

router.delete('', controller.deleteTask);

router.patch('/:id', controller.editTask);

router.put('/:id', controller.updateTask);

module.exports = router;