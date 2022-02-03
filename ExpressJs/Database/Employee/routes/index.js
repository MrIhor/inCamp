const router = require('express').Router();
const testRouter = require('./employeeRoutes');

router.use('/', testRouter);

module.exports = router;