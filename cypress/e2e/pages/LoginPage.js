var elements = require('./elements')

class LoginPage {
    typeButtonLogin() {
        return cy.get(elements.login_page.login2).click()
    }
    typeInUsernameField(value) {
        return cy.get(elements.login_page.username).type('saya')
    }
    typeInPasswordField(value) {
        return cy.get(elements.login_page.password).type('saya')
    }
    typeallertFailedLogin() {
        return cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Please fill out Username and Password');
        });
    }
    typeallertFailedLogin2() {
        return cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Wrong password');
        });
    }
    clickonloginButton2() {
        return cy.get('.btn-primary').contains('Log in').click()
    }
    verifySuccessLogin() {
        return cy.get('#nameofuser').should('contain', 'Welcome fitri');;
    }
}

export default LoginPage