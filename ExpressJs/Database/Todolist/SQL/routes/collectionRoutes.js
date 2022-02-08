const router = require('express').Router();
const controller = require('../controllers/CollectionController');

router.get('/today', controller.getToday);

module.exports = router;