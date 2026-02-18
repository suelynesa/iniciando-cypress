import credentials from '../fixtures/credentials.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('Login - Failed', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.invalid.username, credentials.invalid.password)
    loginPage.wrongCredentialAlert()
        
  })
  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.valid.username, credentials.valid.password)
    dashboardPage.checkDashboardPage()    
    menuPage.accessMyInfo()
    myInfoPage.fillPersonalDetails('First Name', 'Last Name')
    myInfoPage.fillEmployeeDetails('12345', 'Other ID', 'DL-123456789', '2026-11-09')
    myInfoPage.fillStatusDetails('Brazil', 'Married')
    myInfoPage.saveForm()

})
})