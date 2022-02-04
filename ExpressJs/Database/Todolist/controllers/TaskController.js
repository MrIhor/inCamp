const taskModule = require('../modules/taskModules');

class TaskController {
    createTask(req, res) {
        return taskModule.createTask(req, res);
    }

    getAllTasks(req, res) {
        return taskModule.getAllTasks(req, res);
    }

    deleteTask(req, res) {
        return taskModule.deleteTask(req, res);
    }

    editTask(req, res) {
        return taskModule.editTask(req, res);
    }

    updateTask(req, res) {
        return taskModule.updateTask(req, res);
    }
}

module.exports = new TaskController();