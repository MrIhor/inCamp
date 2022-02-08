const collectionModules = require('../modules/collectionK');

class CollectionController {
  getToday(req, res) {
    return collectionModules.getToday(req, res);
  }
}

module.exports = new CollectionController();