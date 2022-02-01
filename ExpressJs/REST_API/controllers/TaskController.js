const taskModel = require('../models/taskModel');

class TaskController {
    getTask(id) {
        return taskModel.getTask(id);
    }

    createTask(id, data) {
        return taskModel.createTask(id, data);
    }

    updateTask(listId, taskId, data) {
        return taskModel.updateTask(listId, taskId, data);
    }

    deleteTask(listId, taskId) {
        return taskModel.deleteTask(listId, taskId);
    }
}

module.exports = new TaskController();