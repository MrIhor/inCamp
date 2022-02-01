const listModel = require('../models/index');

class ListController {
    getAll() {
        return listModel.getAll();
    }

    getTask(id) {
        return listModel.getTask(id);  
    }

    createList(data) {
        return listModel.createList(data);
    }

    createTask(id, data) {
        return listModel.createTask(id, data);
    }

    deleteList(listId) {
        return listModel.deleteList(listId);
    }

    deleteTask(listId, taskId) {
        return listModel.deleteTask(listId, taskId);
    }
}

module.exports = new ListController();