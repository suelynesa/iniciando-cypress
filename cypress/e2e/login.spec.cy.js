import credentials from '../fixtures/credentials.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()

describe('Login Orange HRM Tests', () => {

  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.invalid.username, credentials.invalid.password)
    loginPage.wrongCredentialAlert()  
  })

  it('Login - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.valid.username, credentials.valid.password)
    dashboardPage.checkDashboardPage()
  })

})