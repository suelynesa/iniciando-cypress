import credentials from '../fixtures/credentials.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const Chance = require('chance');

const chance = new Chance();
const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(credentials.valid.username, credentials.valid.password)
    
    dashboardPage.checkDashboardPage()    
    
    menuPage.accessMyInfo()
    
    myInfoPage.fillPersonalDetails(chance.first({ gender: "male" }), chance.last())
    myInfoPage.fillEmployeeDetails('12345', 'Other ID', 'DL-123456789', '2026-11-05')
    myInfoPage.fillStatusDetails('South African', 'Married')
    myInfoPage.saveForm()
  })

})