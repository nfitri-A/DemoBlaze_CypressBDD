import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import LoginPage from '../../e2e/pages/LoginPage'

const loginPage = new LoginPage()

beforeEach( () => {
    cy.visit('https://www.demoblaze.com/', { timeout: 10000});
});

When('I did not input username and password', () => {
    loginPage.typeButtonLogin()
    loginPage.clickonloginButton2()
})
Then('failed to log in and displays the message Please fill out Username and Password', () => {
    loginPage.typeallertFailedLogin()
})
When('I just input the username field', () => {
    loginPage.typeButtonLogin()
    loginPage.typeInUsernameField()
    loginPage.clickonloginButton2()
})
Then('I failed to enter the demoblaze website', () => {
    loginPage.typeallertFailedLogin()
})
When('I just input the password field', () => {
    loginPage.typeButtonLogin()
    loginPage.typeInPasswordField()
    loginPage.clickonloginButton2()  
})
Then('I can not log in when username empety', () => {
    loginPage.typeallertFailedLogin()
})
When('I input username and password incorrectly', () => {
    loginPage.typeButtonLogin()
    loginPage.typeInUsernameField()
    loginPage.typeInPasswordField()
    loginPage.clickonloginButton2()
})
Then('failed to log in and displays the message Wrong password', () => {
    loginPage.typeallertFailedLogin2()
})
When('I input username and password correctly', () => {
    cy.Login1("fitri", "123456")
})
Then('I should successfully entered the product page', () => {
    loginPage.verifySuccessLogin()
})