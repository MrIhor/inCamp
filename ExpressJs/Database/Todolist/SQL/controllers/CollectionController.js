const collectionModules = require('../modules/collection');

class CollectionController {
  getToday(req, res) {
    return collectionModules.getToday(req, res);
  }
}

module.exports = new CollectionController();