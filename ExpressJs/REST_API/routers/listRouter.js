const router = require('express').Router();
const controller = require('../controllers/ListController');

router.get('', function (req, res) {
    const list = controller.getAll(req);
    res.status(200);
    res.send(list);
    res.end();
})

router.get('/:id/tasks', (req, res) => {
    const listId = parseInt(req.params.id);
    const tasks = controller.getTask(listId);
    res.status(200);
    res.send(tasks);
    res.end();
})

router.get('/:listId', (req, res) => {
    const listId = parseInt(req.params.listId);
    
    const list = controller.getList(listId);
    res.status(200);
    res.send(list);
    res.end();
})

router.post('', (req, res) => {
    const newList = controller.createList(req.body); 

    res.status(201);
    res.send(newList);
    res.end();
})

router.post('/:id/tasks', (req, res) => {
    const listId = parseInt(req.params.id);
    const data = req.body;
    const tasks = controller.createTask(listId, data);
    res.status(201);
    res.send(tasks);
    res.end();
})

router.delete('', (req, res) => {
    const listId = parseInt(req.body.id);
    const newList = controller.deleteList(listId);
    res.status(202);
    res.send(newList);
    res.end();
})

router.delete('/:id/tasks', (req, res) => {
    const listId = parseInt(req.params.id);
    const taskId = req.body.id; 
    const newTasksList = controller.deleteTask(listId, taskId);
    res.status(202);
    res.send(newTasksList);
    res.end();
})

router.patch('/:listId/tasks/:taskId', (req, res) => {
    const listId = parseInt(req.params.listId);
    const taskId = parseInt(req.params.taskId);

    const updatedTask = controller.updateTask(listId, taskId, req.body);
    res.status(200);
    res.send(updatedTask);
    res.end();
})

router.patch('/:listId', (req, res) => {
    const listId = parseInt(req.params.listId);

    const updatedList = controller.updateList(listId, req.body);
    res.status(200);
    res.send(updatedList);
    res.end();
})

router.put('/:listId/tasks/:taskId', (req, res) => {
    const listId = parseInt(req.params.listId);
    const taskId = parseInt(req.params.taskId);

    const updatedTask = controller.updateFullTask(listId, taskId, req.body);
    res.status(200);
    res.send(updatedTask);
    res.end();
})

router.put('/:listId', (req, res) => {
    const listId = parseInt(req.params.listId);

    const updatedList = controller.updateFullList(listId, req.body);
    res.status(200);
    res.send(updatedList);
    res.end();
})

module.exports = router;