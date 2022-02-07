const router = require('express').Router();
const controller = require('../controllers/ListController');

router.get('/:id', controller.getAllLists);

router.get('/:id',)

module.exports = router;