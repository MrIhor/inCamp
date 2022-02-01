const express = require("express");
const listRouter = require('./listRouter');
const taskRouter = require('./taskRouter');
const router = express.Router();

router.use('/lists', listRouter, taskRouter);

module.exports = router; 