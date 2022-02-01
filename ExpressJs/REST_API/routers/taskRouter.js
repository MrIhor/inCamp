const router = require('express').Router();
const controller = require('../controllers/TaskController');

router.get('/:id/tasks', (req, res) => {
    const listId = parseInt(req.params.id);
    const tasks = controller.getTask(listId);
    res.status(200);
    res.send(tasks);
    res.end();
})

router.get('', (req, res) => {
    const listId = req.query.listId; 
    const tasks = controller.getTask(listId);
    res.status(200);
    res.send(tasks);
    res.end(); 
}) 

module.exports = router;