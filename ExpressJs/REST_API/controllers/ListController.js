const listModel = require('../models/index');

class ListController {
    getAll() {
        return listModel.getAll();
    }

    getList(listId) {
        return listModel.getList(listId);
    }

    getTask(taskId) {
        return listModel.getTask(taskId);  
    }

    createList(data) {
        return listModel.createList(data);
    }

    createTask(taskId, data) {
        return listModel.createTask(taskId, data);
    }

    deleteList(listId) {
        return listModel.deleteList(listId);
    }

    deleteTask(listId, taskId) {
        return listModel.deleteTask(listId, taskId);
    }

    updateTask(listId, taskId, data) {
        return listModel.updateTask(listId, taskId, data);
    }

    updateList(listId, data) {
        return listModel.updateList(listId, data);
    }

    updateFullTask(listId, taskId, data) {
        return listModel.updateFullTask(listId, taskId, data);
    }

    updateFullList(listId, data) {
        return listModel.updateFullList(listId, data);
    }
}

module.exports = new ListController();