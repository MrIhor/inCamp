const listModel = require('../modules/listModules');

class ListController {
  getAllLists(req, res) {
    return listModel.getAllLists(req, res);
  }

  getList(req, res) {
    return listModel.getList(req, res);
  }
}

module.exports = new ListController();