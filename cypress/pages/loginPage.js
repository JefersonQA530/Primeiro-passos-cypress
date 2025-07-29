class LoginPage {
    
selectorsList() {
    const selectors = {
        usernameField: "[name='username']",
        passwordField: "[name='password']",
        loginButton: ".oxd-button[type='submit']",
        wrongCredentialAlert:".oxd-alert-content",

    }
    return selectors
}
accessLoginPage (){
    cy.visit('/auth/login')
}
LoginWithUser(username, password){
    cy.get(this.selectorsList().usernameField).type(username)
    cy.get(this.selectorsList().passwordField).type(password)
    cy.get(this.selectorsList().loginButton).click()
    }

}
export default LoginPage