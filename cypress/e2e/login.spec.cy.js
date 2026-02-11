describe('Orange HRM Tests', () => {
  
  const selectorsList = {
    usernameField: '[name="username"]',
    passwordField: '[name="password"]',
    loginButton: '[type="submit"]',
    dashBoardGrid: '.orangehrm-dashboard-grid',  
    wrongCredentialAlert: '[role="alert"]'
  }
  
    it('Login - Sucess', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
  })
  it('Login - Failed', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('Test')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)

})
})