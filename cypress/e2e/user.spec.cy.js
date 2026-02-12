import credentials from '../fixtures/credentials.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    dashBoardGrid: '.orangehrm-dashboard-grid',  
    wrongCredentialAlert: '[role="alert"]',
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: "[placeholder='yyyy-dd-mm']",
    dateCloseButton: '.--close',
    genericDropdown: '.oxd-select-text',
    genderButton: '.oxd-radio-wrapper',
    saveButton: '[type="submit"]'
    
  }

  it('Login - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(credentials.valid.username)
    cy.get(selectorsList.passwordField).type(credentials.valid.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
  })
  it('Login - Failed', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(credentials.invalid.username)
    cy.get(selectorsList.passwordField).type(credentials.invalid.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })
  it.only('User Info Update - Sucess', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(credentials.valid.username)
    cy.get(selectorsList.passwordField).type(credentials.valid.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employee')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriversLicenseNumberTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2030-01-01')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.genericDropdown).eq(0).contains('South African').click()
    cy.get(selectorsList.genericDropdown).eq(1).contains('Single').click()
    cy.get(selectorsList.genderButton).eq(1).click({ force: true })
    cy.get(selectorsList.saveButton).eq(0).click()
    cy.get('body').should('contain', 'Successfully Updated')
})
})