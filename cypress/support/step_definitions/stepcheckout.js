import { Given, When, Then, DataTable } from '@badeball/cypress-cucumber-preprocessor'
import CheckoutPage from '../../e2e/pages/CheckoutPage'

const checkoutPage = new CheckoutPage()

beforeEach( () => {
    cy.visit('https://www.demoblaze.com/index.html', { timeout: 10000});
});

Given('I successfully login', () => {
    cy.Login1("fitri", "123456")
})
When('I selected some items', () => {
    checkoutPage.typePhonesCategories()
    checkoutPage.typeSamsungGalaxyX6()
    checkoutPage.typeAddToCartButton()
    checkoutPage.typeHomeButton()
    checkoutPage.typeLaptopsCategories()
    checkoutPage.typeSonyVaio5()
    checkoutPage.typeAddToCartButton()
    checkoutPage.typeHomeButton()
    checkoutPage.typeMonitoresCategories()
    checkoutPage.typeAppleMonitor24()
    checkoutPage.typeAddToCartButton()
})
Then('The selected item is successfully added to the cart', () => {
    checkoutPage.typeCartButton()
})

Given('I successfully entered the cart page', () => {
    cy.Login1("fitri", "123456")
    checkoutPage.typeCartButton()
})
When('I delete one of the items and continue filling in my personal details for payment', () => {
    checkoutPage.typePlaceOrderButton()
    checkoutPage.typeInNameField()
    checkoutPage.typeInCountryField()
    checkoutPage.typeInCityField()
    checkoutPage.typeInCreditcartField()
    checkoutPage.typeInMonthField()
    checkoutPage.typeInYearField()
    checkoutPage.typePurchaseButton()
    // cy.PlaceOrder("Fitri", "Indonesia", "Bogor", "123456", "September", "2024")
  
})
Then('the transaction is successful and displays a message', () => {
    checkoutPage.verifySuccessPurchase()
    checkoutPage.typeOkButtonInPurchase()
    checkoutPage.clickOnCloseButton()
})