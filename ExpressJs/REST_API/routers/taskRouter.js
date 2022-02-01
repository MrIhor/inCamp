const router = require('express').Router();
const controller = require('../controllers/TaskController');

router.get('', (req, res) => {
    const listId = req.query.listId; 
    const tasks = controller.getTask(listId);
    res.status(200);
    res.send(tasks);
    res.end(); 
})

router.post('', (req, res) => {
    const listId = parseInt(req.query.listId);
    const data = req.body;
    const newTask = controller.createTask(listId, data);
    res.status(201); 
    res.send(newTask);
    res.end(); 
})

router.delete('', (req, res) => {
    const listId = parseInt(req.query.listId);
    const taskId = req.body.id;  
    const newTasksList = controller.deleteTask(listId, taskId);
    res.status(202);
    res.send(newTasksList);
    res.end();
})

module.exports = router;