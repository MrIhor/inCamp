const dashboardModules = require('../modules/dashBoard');

class DashboardController {
  getDashboard(req, res) {
    return dashboardModules.getDashboard(req, res);
  }
}

module.exports = new DashboardController();