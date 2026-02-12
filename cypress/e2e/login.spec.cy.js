import credentials from '../fixtures/credentials.json'

describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    dashBoardGrid: '.orangehrm-dashboard-grid',  
    wrongCredentialAlert: '[role="alert"]'
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
})