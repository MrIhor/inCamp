const employeeModel = require('../models/employeeModel');

class EmployeeController {
    createEmployee(req, res) {
        return employeeModel.createEmployee(req, res);
    }

    getAllEmployees(req, res) {
        return employeeModel.getAllEmployees(req, res);
    }

    getEmployee(req, res) {
        return employeeModel.getEmployee(req, res);
    }

    deleteEmployee(req, res) {
        return employeeModel.deleteEmployee(req, res);
    }
}

module.exports = new EmployeeController();