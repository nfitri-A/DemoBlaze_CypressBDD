import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import LogoutPage from '../../e2e/pages/LogoutPage'

const logoutPage = new LogoutPage()

beforeEach( () => {
    cy.visit('https://www.demoblaze.com/index.html', { timeout: 10000});
});

When('I successfully log in and log out of the demoblaze website', () => {
    cy.Login1("fitri", "123456")
    logoutPage.clickOnLogoutButton()
})

Then('I see the login button', () => {
    logoutPage.verifyLogout()
})