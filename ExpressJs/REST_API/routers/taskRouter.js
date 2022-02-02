const router = require('express').Router();
const controller = require('../controllers/TaskController');

function parseToNumber(string) {
    return parseInt(string);
}

router.get('', (req, res) => {
    const listId = parseToNumber(req.query.listId); 

    const tasks = controller.getTask(listId);
    checkStatus(tasks, res, 200, 404);
})

router.post('', (req, res) => {
    const listId = parseToNumber(req.query.listId);

    const newTask = controller.createTask(listId, req.body);
    checkStatus(newTask, res, 201, 400); 
})

router.delete('', (req, res) => {
    const listId = parseToNumber(req.query.listId);
    const taskId = parseToNumber(req.body.id);  

    const newTasksList = controller.deleteTask(listId, taskId);
    checkStatus(newTasksList, res, 202, 400); 
})

router.patch('/:id', (req, res) => {
    const listId = parseToNumber(req.query.listId); 
    const taskId = parseToNumber(req.params.id); 

    const updateTask = controller.updateTask(listId, taskId, req.body);
    checkStatus(updateTask, res, 200, 400); 
})

router.put('/:id', (req, res) => {
    const listId = parseToNumber(req.query.listId); 
    const taskId = parseToNumber(req.params.id);

    const updateFullTask = controller.updateFullTask(listId, taskId, req.body);
    checkStatus(updateFullTask, res, 200, 400); 
})

function checkStatus(result, res, goodStatus, badStatus) {
    if (result) {
        res.status(goodStatus);
        res.send(result);
        res.end();
    } else {
        res.status(badStatus).json({error: `Error ${badStatus}`});
        res.end();
    }
}

module.exports = router;