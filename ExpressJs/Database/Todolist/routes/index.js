const router = require('express').Router({ mergeParams: true });
const taskRouter = require('./taskRoutes');
const listRouter = require('./listRoutes');
const dashboardRouter = require('./dashboardRoutes');

router.use('/lists', taskRouter);
router.use('/lists', listRouter);
router.use('/dashboard', dashboardRouter);

module.exports = router;