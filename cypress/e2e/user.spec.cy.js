import userData from '../fixtures/user-data.json'
import LoginPage from '../pages/loginPage'
import DashboardPages from '../pages/dashboardPages'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'



const loginPage = new LoginPage()
const dashboardPages = new DashboardPages()
const menuPage = new MenuPage()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Test', () => {

  const selectorsList = {
   
    
   
    
    
    FirstNameField:"[name='firstName']",
    LastnameField: "[name='lastName']",
    MiddleName: "[name='middleName']",
    GenericField: ".oxd-input--active",
    DateField:"[placeholder='yyyy-dd-mm']",
    DataCloseButton: ".--close",
    SubmitButton: "[type='submit']",
     Generi2cField: "[data-v-app='']",
     GenericCombobox: ".oxd-select-text--arrow",
     secondItemCombobox:".oxd-select-dropdown > :nth-child(3) > span",
     tirdItemCombobox:".oxd-select-dropdown > :nth-child(3) > span",
     xicxicbahia:':nth-child(3) > span',
     
    



  }
 


  it.only('User Info Update- Success', () => {
    loginPage.accessLoginPage()
    loginPage.LoginWithUser(userData.userSucces.username, userData.userSucces.password)
    dashboardPages.checkDashBoardPage()
    menuPage.accessMyInfo()
    myInfoPage.accessMyInfoPage()

    {
    
   }
//     cy.get(selectorsList.usernameField).type(userData.userSucces.username)
//     cy.get(selectorsList.passwordField).type(userData.userSucces.password)
//     cy.get(selectorsList.loginButton).click()

//     cy.get(selectorsList.dashBoardGrid)
//     cy.get(selectorsList.myInfoButton).click()
//     cy.get(selectorsList.FirstNameField).clear().type('NomeTeste')
//     cy.get(selectorsList.LastnameField).clear().type('TesteLastName')
//     cy.get(selectorsList.MiddleName).clear().type('TesteMiddleName')
//     cy.get(selectorsList.GenericField).eq(3).clear().type('Employee')
//      cy.get(selectorsList.GenericField).eq(4).clear().type('Other Id')
//       cy.get(selectorsList.GenericField).eq(5).clear().type('DriversLicensteste')
//       cy.get(selectorsList.GenericField).eq(6).clear().type('2025-08-30')
//       cy.get(selectorsList.DataCloseButton).click()
//     cy.get(selectorsList.SubmitButton).eq(0).click({force:true})
//     cy.get(selectorsList.GenericCombobox).eq(0).click({force:true})
//     cy.get(selectorsList.secondItemCombobox).click()
//     cy.get(selectorsList.GenericCombobox).eq(1).click({force:true})
//     cy.get(selectorsList.xicxicbahia).click()
    
    
    
//       cy.get('body').should('contain', 'Successfully Updated')
//       cy.get
  
  

// })
// it('Login - Fail', () => {
//     cy.visit('/auth/login')
//     cy.get(selectorsList.usernameField).type(userData.userFail.username)
//     cy.get(selectorsList.passwordField).type(userData.userFail.password)
//     cy.get(selectorsList.loginButton).click()
//     cy.get(selectorsList.wrongCredentialAlert)
   
    
  })

})