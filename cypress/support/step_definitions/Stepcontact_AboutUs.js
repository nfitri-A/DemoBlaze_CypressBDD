import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import Contact_AboutUsPage from '../../e2e/pages/Contact_AboutUsPage'

const contact_AboutUsPage = new Contact_AboutUsPage()

beforeEach( () => {
    cy.visit('https://www.demoblaze.com/', { timeout: 10000});
});

When('I input an email address and type a message', () => {
    contact_AboutUsPage.clickOnContactMenu()
    contact_AboutUsPage.typeInContactEmailField()
    contact_AboutUsPage.typeInContactNameField()
    contact_AboutUsPage.typeInMessageField()
})
Then('the message is successfully sent and displays a notification Thanks for the message!!', () => {
    contact_AboutUsPage.verifySuccessSendingMessage()
})
When('I click the about us menu', () => {
    contact_AboutUsPage.clickOnAboutUsButton()
    contact_AboutUsPage.clickOnArrow()
})
Then('I can see the demoblaze introduction video', () => {
    contact_AboutUsPage.verifySuccessPlayVidio()
})