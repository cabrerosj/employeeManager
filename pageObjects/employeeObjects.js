var employeeCommands = {
    createNDelete: function (data) {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', data.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', data.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', data.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', data.title)
            .click('@saveBtn')
            .verify.containsText('@employeeTitle', data.name)
            .verify.valueContains('@phoneEntry', data.phone)
            .verify.valueContains('@emailEntry', data.email)
            .verify.valueContains('@titleEntry', data.title)
            .pause(1000)
            .click('@deleteBtn')
            .pause(1000)
            .api.acceptAlert()
            .pause(1000)
            .refresh()
            .verify.not.containsText('body', data.name)
        return this
    },
    createNEdit: function (data, newData) {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', data.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', data.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', data.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', data.title)
            .click('@saveBtn')
            .verify.containsText('@employeeTitle', data.name)
            .verify.valueContains('@phoneEntry', data.phone)
            .verify.valueContains('@emailEntry', data.email)
            .pause(1000)
            .verify.valueContains('@titleEntry', data.title)
            .click('@employee')
            .pause(1000)
            .click('@snelling')
            .pause(1000)
            .clearValue('@nameEntry')
            .setValue('@nameEntry', newData.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', newData.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', newData.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', newData.title)
            .click('@saveBtn')
            .pause(1000)
            .click('@employee')
            .click('@snells')
            .verify.containsText('@employeeTitle', newData.name)
            .verify.valueContains('@phoneEntry', newData.phone)
            .verify.valueContains('@emailEntry', newData.email)
            .verify.valueContains('@titleEntry', newData.title)
            .click('@deleteBtn')
            .pause(1000)
            .api.acceptAlert()
            .pause(1000)
            .refresh()
            .verify.not.containsText('body', data.name)
        return this
    },
    minReq: function () {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', 'J')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', '7072591381')
            .clearValue('@emailEntry')
            .setValue('@emailEntry', 's')
            .pause(1000)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', 'D')
            .click('@saveBtn')
            .pause(1000)
            .verify.containsText('@employeeTitle', 'J')
            .verify.valueContains('@phoneEntry', '7072591381')
            .verify.valueContains('@emailEntry', 's')
            .verify.valueContains('@titleEntry', 'D')
            .click('@deleteBtn')
            .pause(1000)
            .api.acceptAlert()
            .pause(1000)
            .refresh()
        return this
    },
    errorMessage: function () {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .clearValue('@phoneEntry')
            .pause(5000)
            .setValue('@phoneEntry', '707259138')
            .pause(5000)
            .clearValue('@emailEntry')
            .clearValue('@titleEntry')
            .pause(1000)
            .verify.valueContains('@phoneEntry', '707259138')
            .click('@saveBtn')
            .verify.elementPresent('@nameError')
            .verify.elementPresent('@phoneError')
            .verify.elementPresent('@emailError')
            .verify.elementPresent('@titleError')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', 'J')
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', '7072591381')
            .clearValue('@emailEntry')
            .setValue('@emailEntry', 's')
            .pause(1000)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', 'D')
            .click('@saveBtn')
            .pause(1000)
            .click('@deleteBtn')
            .pause(1000)
            .api.acceptAlert()
            .pause(1000)
        return this
    },
    maxReq: function (data) {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', data.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', data.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', data.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', data.title)
            .click('@saveBtn')
            .pause(1000)
            .verify.containsText('@employeeTitle', data.name)
            .verify.valueContains('@phoneEntry', data.phone)
            .verify.valueContains('@emailEntry', data.email)
            .verify.valueContains('@titleEntry', data.title)
            .click('@deleteBtn')
            .pause(1000)
            .api.acceptAlert()
            .pause(1000)
            .refresh()
        return this
    },
    changeNcancel: function (data, newData) {
        this
            .click('@addEmployee')
            .click('@newEmployee')
            .clearValue('@nameEntry')
            .setValue('@nameEntry', data.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', data.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', data.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', data.title)
            .click('@saveBtn')
            .pause(1000)
            .verify.containsText('@employeeTitle', data.name)
            .verify.valueContains('@phoneEntry', data.phone)
            .verify.valueContains('@emailEntry', data.email)
            .verify.valueContains('@titleEntry', data.title)
            .click('@employee')
            .pause(1000)
            .click('@snelling')
            .pause(1000)
            .clearValue('@nameEntry')
            .setValue('@nameEntry', newData.name)
            .clearValue('@phoneEntry')
            .setValue('@phoneEntry', newData.phone)
            .clearValue('@emailEntry')
            .setValue('@emailEntry', newData.email)
            .clearValue('@titleEntry')
            .setValue('@titleEntry', newData.title)
            .click('@cancelBtn')
            .pause(1000)
            .verify.containsText('@employeeTitle', data.name)
            .verify.valueContains('@phoneEntry', data.phone)
            .verify.valueContains('@emailEntry', data.email)
            .verify.valueContains('@titleEntry', data.title)
            .click('@cancelBtn')
            .click('@deleteBtn')
            .pause(1000)
            .api.acceptAlert()
            .pause(1000)
            .refresh()
        return this
    }
}
module.exports = {
        url: 'https://devmountain-qa.github.io/employee-manager-v2/build/index.html',
        commands: [employeeCommands],
        elements: {
            searchBar: '[name="searchBox"]',
            clearBtn: '[name="clearSearch"]',

            employeeList: 'ul[class="listContainer"]',

            employee: {
                selector: '//li[text() = "Son Goku"]',
                locateStrategy: 'xpath'
            },

            addEmployee: 'li[name="addEmployee"]',
            newEmployee: {
                selector: '//li[text() = "New Employee"]',
                locateStrategy: 'xpath'
            },
            snelling: {
                selector: '//li[text() = "Jerry Snelling"]',
                locateStrategy: 'xpath'
            },
            snells: {
                selector: '//li[text() = "Jerry Snells"]',
                locateStrategy: 'xpath'
            },

            employeeTitle: 'p[name="employeeName"]',
            employeeID: '#employeeID',
            nameEntry: 'input[name="nameEntry"]',
            phoneEntry: 'input[name="phoneEntry"]',
            emailEntry: 'input[name="emailEntry"]',
            titleEntry: 'input[name="titleEntry"]',
            saveBtn: '#saveBtn',
            cancelBtn: '.neutralButton',
            deleteBtn: '[name="delete"]',

            nameError: '//*[text() = "The name field must be between 1 and 30 characters long. "]',
            phoneError: '//*[text() = "The phone number must be 10 digits long. "]',
            emailError: '//*[text() = "The email field must be between 1 and 30 characters long. "]',
            titleError: '//*[text() = "The title field must be between 1 and 30 characters long. "]'
        }
    }