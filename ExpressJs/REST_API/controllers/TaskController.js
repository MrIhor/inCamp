const taskModel = require('../models/taskModel');

class TaskController {
    getTask(id) {
        return taskModel.getTask(id);
    }
}

module.exports = new TaskController();