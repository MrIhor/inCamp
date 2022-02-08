const listModel = require('../modules/listModule');

class ListController {
  getAllLists(req, res) {
    return listModel.getAllLists(req, res);
  }

  getList(req, res) {
    return listModel.getList(req, res);
  }

  getTasksInList(req, res) {
    return listModel.getTasksInList(req, res);
  }

  createList(req, res) {
    return listModel.createList(req, res);
  }

  editList(req, res) {
    return listModel.editList(req, res);
  }

  updateList(req, res) {
    return listModel.updateList(req, res);
  }

  deleteList(req, res) {
    return listModel.deleteList(req, res);
  }
}

module.exports = new ListController();