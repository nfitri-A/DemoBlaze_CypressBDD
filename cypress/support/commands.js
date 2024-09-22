// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('Login1', (username, password) => {
    // cy.clearCookies()
    // cy.clearLocalStorage()
    cy.get('#login2').click()
    cy.get('#loginusername').clear()
    cy.get('#loginusername').type(username)

    cy.get('#loginpassword').clear()
    cy.get('#loginpassword').type(password)
    
    cy.get('button.btn-primary').contains('Log in').click();

})

Cypress.Commands.add('PlaceOrder', (Name, Country, City, Credit_card, Month,Year) => {
      // Klik tombol "Place Order" untuk membuka modal
      cy.contains('Place Order').click();
      // Tunggu hingga modal muncul dan pastikan modal terlihat
      cy.get('#orderModal', { timeout: 60000 }).should('be.visible');
      
    //  Debug the state of the modal to check for visibility issues
      cy.get('#orderModal').debug(); // Open DevTools for inspection

      // Isi form di dalam modal
      cy.get('#name', { timeout: 60000 }).should('be.visible').type(Name);
      cy.get('#country').type(Country, { force: true });
      cy.get('#city').type(City, { force: true });
      cy.get('#card').type(Credit_card, { force: true });
      cy.get('#month').type(Month, { force: true });
      cy.get('#year').type(Year, { force: true });
  
      // Klik tombol "Purchase" di dalam modal
      cy.get('.btn-primary').contains('Purchase').click();
})

Cypress.Commands.add('SignUp', (Username, Password) => {
  cy.get('#signin2').click()
  cy.get('#sign-username').clear()
  cy.get('#sign-username').type(Username)

  cy.get('#sign-password').clear()
  cy.get('#sign-password').type(Password)
  
  cy.get('.btn-primary').contains('Sign up').click();

})