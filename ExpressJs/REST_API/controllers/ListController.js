const listModel = require('../models/index');

class ListController {
    getAll() {
        return listModel.getAll();
    }
}

module.exports = new ListController();