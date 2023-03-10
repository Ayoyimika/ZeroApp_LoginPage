import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps'
import LoginPage from './loginPage'

Given ('I open login page', () => {
   //  cy.visit ('http://zero.webappsecurity.com/login.html')
   LoginPage.visit()
})

When ('I fill username with {string}', username => {
   LoginPage.fillUsername (username)
})
And ('I fill password with {string}', password => {
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