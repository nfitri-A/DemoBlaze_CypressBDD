var elements = require('./elements')

class SignupPage {
    typeSignupButton() {
        return cy.get(elements.sign_up.ButtonSignup).click()
    }
    typeInUsernameField() {
        return cy.get(elements.sign_up.UserName).type('fitri')
    }
    typeInPassordField() {
        return cy.get(elements.sign_up.Password).type('1234567')
    }
    typeSignupButton2() {
        return cy.get('.btn-primary').contains('Sign up').click()
    }
    typeAllertFailedSignUp() {
        return cy.on('window:alert', (txt) => {
        expect(txt).to.contains('Please fill out Username and Password');
        });
    }
    typeAllertSuccessSignUp() {
        return cy.on('window:alert', (txt) => {
        expect(txt).to.contains('This user already exist.');
        });
    }
}
export default SignupPage