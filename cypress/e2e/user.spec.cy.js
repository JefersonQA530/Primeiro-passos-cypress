import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPages from '../pages/dashboardPages'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const Chance = require('chance')

const chance = new Chance()
const loginPage = new LoginPage()
const dashboardPages = new DashboardPages()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

  it('User Info Update- Success', () => {
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSucces.username, userData.userSucces.password)
    
    dashboardPages.checkDashBoardPage()

    menuPage.accessMyInfo()

    myInfoPage.accessMyInfoPage()
    myInfoPage.accessMyInfoPage2()

    {
    
   }

  

  })
})

