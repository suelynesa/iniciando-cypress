class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active',
            dateField: "[placeholder='yyyy-dd-mm']",
            dateCloseButton: '.--close',
            genericDropdown: '.oxd-select-text',
            genderButton: '.--label-right',
            saveButton: '[type="submit"]'
        }

        return selectors
    }

    fillPersonalDetails(firstName, lastName){
            cy.get(this.selectorsList().firstNameField).should('be.visible').clear().type(firstName)
            cy.get(this.selectorsList().lastNameField).clear().type(lastName)
    }
    
    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate) {
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(driversLicenseNumber)
            cy.get(this.selectorsList().dateField).eq(0).clear().type(expiryDate)
            cy.get(this.selectorsList().dateCloseButton).click()
    }        
        
    saveForm() {
            cy.get(this.selectorsList().saveButton).eq(0).click()
            cy.get('body').should('contain', 'Success')
    }

    fillStatusDetails(nationality, maritalStatus) {
            cy.get(this.selectorsList().genericDropdown).eq(0).click()
            cy.contains('.oxd-select-dropdown div', nationality).click()
            cy.get(this.selectorsList().genericDropdown).eq(1).click()
            cy.contains('.oxd-select-dropdown div', maritalStatus).click()
            cy.get(this.selectorsList().genderButton).eq(1).click()
            
            
    }
}

export default MyInfoPage