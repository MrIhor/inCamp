const router = require('express').Router();
const controller = require('../controllers/TaskController');

router.get('/:id/tasks', (req, res) => {
    const taskId = parseInt(req.params.id);
    const tasks = controller.getTask(taskId);
    res.status(200);
    res.send(tasks);
    res.end();
})

router.get()

module.exports = router;