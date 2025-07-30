import { select } from "async";

class MyInfoPage {
    selectorsList(){
        const selectors = {
            FirstNameField: "[name='firstName']",
            LastnameField: "[name='lastName']",
            MiddleName: "[name='middleName']",
            GenericField: ".oxd-input",
            DataCloseButton: ".oxd-button--ghost",
            SubmitButton: '.oxd-toast',
            GenericCombobox: ".oxd-select-text-input",
            secondItemCombobox:".oxd-select-dropdown > :nth-child(3) > span",
            tirdItemCombobox:".oxd-select-dropdown > :nth-child(3) > span",
            xicxicbahia:':nth-child(3) > span',
            TomaTomaTeste: ':nth-child(2) > :nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-input',
            TomaTomaToma: ':nth-child(1) > .oxd-form > .oxd-form-actions',
            TomaTomaTomaToma:'.orangehrm-card-container > .oxd-form > .oxd-form-actions > .oxd-button',


    }
return selectors
        
}
accessMyInfoPage() {
    cy.get(this.selectorsList().FirstNameField).clear().type(chance.first())
    cy.get(this.selectorsList().LastnameField).clear().type(chance.last())
    cy.get(this.selectorsList().MiddleName).clear().type(chance.string())
}
accessMyInfoPage2(){
    cy.get(this.selectorsList().GenericField).eq(3).clear().type('Employee')
    cy.get(this.selectorsList().GenericField).eq(4).clear().type('Other Id')
    cy.get(this.selectorsList().GenericField).eq(5).clear().type('DriversLicensteste')
     cy.get(this.selectorsList().TomaTomaTeste).type('TomaTomaTeste')
    cy.get(this.selectorsList().GenericField).eq(6).clear().type('2025-08-30')
   // cy.get(this.selectorsList().DataCloseButton).click()
   cy.get(this.selectorsList().TomaTomaToma).click()
   cy.get(this.selectorsList().TomaTomaTomaToma).click()
    cy.get(this.selectorsList().SubmitButton).click()
}
    //cy.get(this.selectorsList().GenericCombobox).eq(0).click({force:true})
   //  cy.get(this.selectorsList().secondItemCombobox).click()
     //cy.get(this.selectorsList().GenericCombobox).eq(1).click({force:true})
     //cy.get(this.selectorsList().DataCloseButton).click()

    

}
export default MyInfoPage