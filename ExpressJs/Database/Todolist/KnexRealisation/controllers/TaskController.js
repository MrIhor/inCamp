const taskModule = require('../modules/taskModule');

class TaskController {
    getAllTasks(req, res) {
        return taskModule.getAllTasks(req, res);
    }

    getTask(req, res) {
        return taskModule.getTask(req, res);
    }

    createTask(req, res) {
        return taskModule.createTask(req, res);
    }

    editTask(req, res) {
        return taskModule.editTask(req, res);
    }

    updateTask(req, res) {
        return taskModule.updateTask(req, res);
    }

    deleteTask(req, res) {
        return taskModule.deleteTask(req, res);
    }
}

module.exports = new TaskController();