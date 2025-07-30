import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPages from '../pages/dashboardPages'


const loginPage = new LoginPage()
const dashboardPages = new DashboardPages()


describe('Login Orange HRM Test', () => {
  
  
  
  it('User Info Update- Success', () => {
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSucces.username, userData.userSucces.password)
    dashboardPages.checkDashBoardPage()
   


  it('Login - Fail', () => {
   loginPage.accessLoginPage()
   loginPage.LoginWithUser(userData.userFail.username, userData.userFail.password)
   loginPage.checkAccessInvalid()
  
  })
})
})
