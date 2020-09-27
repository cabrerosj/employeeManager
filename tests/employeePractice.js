var employee

var jerry = require('../testAssets/EmployeeManager/EMJerryAsset')

var newJerry = require('../testAssets/EmployeeManager/EMnewJerryAsset')

var maxChar = require('../testAssets/EmployeeManager/EMmaxChar')

module.exports = {
    beforeEach: browser => {
        employee = browser.page.employeeObjects()
        employee.navigate()
    },
    afterEach: browser => {
        employee.end()
    },
    
    'New Employee': browser => {
        employee.createNDelete(jerry)
    },

    'Edit Names': browser => {
        employee.createNEdit(jerry, newJerry)
    },
    
    'Mininum Character Requirements': browser => {
        employee.minReq()
        //BUG: Title field reverts to 'abc' when 1 character is inputted and save is clicked
    },

    'Maximum Character Requirements': browser => {
        employee.maxReq(maxChar)
    },

    'changeNcancel': browser => {
        employee.changeNcancel(jerry, newJerry)
    },

    'Error Message': browser => {
        employee.errorMessage()
    }
}
