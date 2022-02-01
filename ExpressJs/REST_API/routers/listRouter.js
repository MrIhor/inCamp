const router = require('express').Router();
const controller = require('../controllers/ListController');

router.get('', function (req, res) {
    let list = controller.getAll(req);
    res.status(200);
    res.send(list);
    res.end();
})

module.exports = router;