class CheckoutPage {
    typePhonesCategories() {
        return cy.get('#itemc').contains('Phones').click()
    }
    typeLaptopsCategories() {
        return cy.contains('Laptops').click();
    }
    typeMonitoresCategories() {
        return cy.contains('Monitors').click()
    }
    typeSamsungGalaxyX6() {
        return cy.get('.hrefch').contains('Samsung galaxy s6').click()
    }
    typeSonyVaio5() {
        return cy.get('.hrefch').contains('Sony vaio i5').click()
    }
    typeAppleMonitor24() {
        return cy.get('.hrefch').contains('Apple monitor 24').click()
    }
    typeAddToCartButton() {
        return cy.get('.btn-lg').contains('Add to cart').click()
    }
    typeHomeButton() {
        return cy.contains('Home').click();
    }
    typeCartButton() {
        return cy.get('#cartur').click()
    }
    typeDeleteSamsungGalaxy6() {
        return cy.get('tr').contains('Samsung galaxy s6').parent().find('a').click();
    }
    typeDeleteSonyVaio5() {
        return cy.get('tr').contains('Sony vaio i5').parent().find('a').click();
    }
    typeDeleteAppleMonitor24() {
        return cy.get('tr').contains('Apple monitor 24').parent().find('a').click();
    }
    typePlaceOrderButton() {
        return cy.get('.btn-success').contains('Place Order').click()
    }
    typeInNameField() {
        return cy.get('#name').type('Fitri')
    }
    typeInCountryField() {
        return cy.get('#country').type('Indonesia')
    }
    typeInCityField() {
        return cy.get('#city').type('Bogor')
    }
    typeInCreditcartField() {
        return cy.get('#card').type('123456789')
    }
    typeInMonthField() {
        return cy.get('#month').type('September')
    }
    typeInYearField() {
        return cy.get('#year').type('2024')
    }
    typePurchaseButton() {
        return cy.get('.btn-primary').contains('Purchase').click()
    }
    verifySuccessPurchase() {
        return cy.contains('Thank you for your purchase!').should('be.visible')
    }
    typeOkButtonInPurchase() {
        return cy.get('.btn-primary').contains('OK').click({ force: true });
    }
    clickOnCloseButton() {
        return cy.get('.btn-secondary').contains('Close').click({ force: true });
    }
}

export default CheckoutPage