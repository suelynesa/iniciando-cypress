class LoginPage {

    selectorsList() {
        const selectors = {
            usernameField: '[name="username"]',
            passwordField: '[name="password"]',
            loginButton: '[type="submit"]',
            wrongCredentialAlert: '[role="alert"]',
        }

        return selectors
    }

    accessLoginPage() {
        cy.visit('/auth/login')
        cy.url().should('include', 'login')
    }

    loginWithAnyUser(username, password) {
        cy.get(this.selectorsList().usernameField).should('be.visible').type(username)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
    }

    wrongCredentialAlert() {
        cy.get(this.selectorsList().wrongCredentialAlert)
        
}
}

export default LoginPage