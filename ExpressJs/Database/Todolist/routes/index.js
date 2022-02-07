const router = require('express').Router();
const taskRouter = require('./taskRoutes');
const listRouter = require('./listRoutes');

router.use('/', taskRouter);
router.use('/lists', listRouter);

module.exports = router;