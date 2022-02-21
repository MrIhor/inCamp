const router = require('express').Router({ mergeParams: true });
const taskRouter = require('./taskRoutes');
const listRouter = require('./listRoutes');
const dashboardRouter = require('./dashboardRoutes');
const collectionRouter = require('./collectionRoutes');

router.use('', taskRouter);
router.use('/lists', listRouter);
router.use('/dashboard', dashboardRouter);
router.use('/collection', collectionRouter);

module.exports = router;