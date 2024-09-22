class LogoutPage {
    clickOnLogoutButton() {
        return cy.get('#logout2').click()
    }
    verifyLogout() {
        return cy.get('#login2').should('contain.text', 'Log in').and('be.visible');
    }
}

export default LogoutPage