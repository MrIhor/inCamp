const router = require('express').Router();
const taskRouter = require('./taskRoutes');

router.use('/', taskRouter);

module.exports = router;