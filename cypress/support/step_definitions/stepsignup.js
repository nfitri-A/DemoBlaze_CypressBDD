import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import SignupPage from '../../e2e/pages/SignupPage'

const signupPage = new SignupPage()

beforeEach( () => {
    cy.visit('https://www.demoblaze.com/', { timeout: 10000});
});

When('I dont not input username and password', () => {
    signupPage.typeSignupButton()
    signupPage.typeSignupButton2()
})
Then('I can not create an account when the username and password is blank', () => {
    signupPage.typeAllertFailedSignUp()
})
When('I just input the password',() => {
    signupPage.typeSignupButton()
    signupPage.typeInPassordField()
    signupPage.typeSignupButton2()
})
Then('I can not create an account when the username is blank', () => {
    signupPage.typeAllertFailedSignUp()
})
When('I just input the username',() => {
    signupPage.typeSignupButton()
    signupPage.typeInUsernameField()
    signupPage.typeSignupButton2()
})
Then('I can not create an account when the password is blank', () => {
    signupPage.typeAllertFailedSignUp()
})
When('I input username and password', () => {
    signupPage.typeSignupButton()
    signupPage.typeInPassordField()
    signupPage.typeInUsernameField()
    signupPage.typeSignupButton2()
})
Then('I successfully created a demoblaze account', () => {
    signupPage.typeAllertSuccessSignUp()
})