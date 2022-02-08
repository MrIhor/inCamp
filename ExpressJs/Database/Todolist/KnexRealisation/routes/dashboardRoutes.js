const router = require('express').Router();
const controller = require('../controllers/DashboardController');

router.get('/knex', controller.getDashboard);

module.exports = router;