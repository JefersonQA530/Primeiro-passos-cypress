import userData from '../fixtures/user-data.json'

const { select, selectLimit } = require("async")

describe('Orange HRM Test', () => {

  const selectorsList = {
    usernameField: "[name='username']",
    passwordField: "[name='password']",
    loginButton: ".oxd-button[type='submit']",
    sectionTitleTopBar: ".oxd-topbar-header-breadcrumb-module",
    dashBoardGrid: ".orangehrm-dashboard-grid",
    wrongCredentialAlert:".oxd-alert-content",
    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    FirstNameField:"[name='firstName']",
    LastnameField: "[name='lastName']",
    MiddleName: "[name='middleName']",
    GenericField: ".oxd-input--active",
    DateField:"[placeholder='yyyy-dd-mm']",
    DataCloseButton: ".--close",
    SubmitButton: "[type='submit']"



  }
 


  it.only('User Info Update- Success', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userSucces.username)
    cy.get(selectorsList.passwordField).type(userData.userSucces.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashBoardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.FirstNameField).clear().type('NomeTeste')
    cy.get(selectorsList.LastnameField).clear().type('TesteLastName')
    cy.get(selectorsList.MiddleName).clear().type('TesteMiddleName')
    cy.get(selectorsList.GenericField).eq(3).clear().type('Employee')
     cy.get(selectorsList.GenericField).eq(4).clear().type('Other Id')
      cy.get(selectorsList.GenericField).eq(5).clear().type('DriversLicensteste')
      cy.get(selectorsList.GenericField).eq(6).clear().type('2025-08-30')
      cy.get(selectorsList.DataCloseButton).click()
      cy.get(selectorsList.SubmitButton).eq(0).click()
      cy.get('body').should('contain', 'Successfully Updated')
  
  

})
it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
   
    
  })

})