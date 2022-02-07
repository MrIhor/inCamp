const dashboardModules = require('../modules/dashboardModules');

class DashboardController {
  getDashboard(req, res) {
    return dashboardModules.getDashboard(req, res);
  }
}

module.exports = new DashboardController();