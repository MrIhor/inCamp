const taskModel = require('../models/taskModel');

class TaskController {
    getTask(id) {
        return taskModel.getTask(id);
    }

    createTask(id, data) {
        return taskModel.createTask(id, data);
    }

    deleteTask(listId, taskId) {
        return taskModel.deleteTask(listId, taskId);
    }

    updateTask(listId, taskId, data) {
        return taskModel.updateTask(listId, taskId, data);
    }

    updateFullTask(listId, taskId, data) {
        return taskModel.updateFullTask(listId, taskId, data); 
    }
}

module.exports = new TaskController();