const URL = 'http://zero.webappsecurity.com/login.html'
const USERNAME_INPUT = '#user_login'
const PASSWORD_INPUT = '#user_password'
const SUBMIT_BUTTON = 'input[name="submit"]'
const ERROR_MESSAGE = '.alert-error'

class LoginPage {
    // visit webpage
    static visit(){
        cy.visit(URL)
    }

    // Fill username
    static fillUsername(name) {
        cy.get (USERNAME_INPUT).type(name)
    }
    // Fill password
    static fillPassword(password) {
        cy.get (PASSWORD_INPUT).type(password)
    }
     // submit form
     static submit (){
        cy.get (SUBMIT_BUTTON).click()
     }

     static shouldShowErrorMessage() {
        cy.get(ERROR_MESSAGE).contains('Login and/or password are wrong')
     }
}

export default LoginPage