import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given ('I open login page', () => {
   //  cy.visit ('http://zero.webappsecurity.com/login.html')
   LoginPage.visit()
})

When ('I fill username with {string}', username => {
   LoginPage.fillUsername (username)
})
And ('I fill password with {string}.', password => {
    LoginPage.fillPassword (password)
 })

Then ('I click on submit login', () => {
    LoginPage.submit()
 })


Then ('I should see homepage', () => {
    cy.get('#account_summary_tab').should('be.visible')
})

Then ('I should see error message', () => {
    LoginPage.shouldShowErrorMessage()
})


// When ('I submit login', () => {
    //fill username
    // cy.get('#user_login').type('username')
    //fill password
   // cy.get('#user_password').type('password')
    //submit form
    //cy.get('input[name="submit"]').click()

   // LoginPage.fillUsername('username')
   // LoginPage.fillPassword('password')
   // LoginPage.submit()})