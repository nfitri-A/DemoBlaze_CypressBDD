class Contact_AboutUsPage {
    
    clickOnContactMenu() {
        return cy.get('.nav-link').contains('Contact').click()
    }
    typeInContactEmailField() {
        return cy.get('#recipient-email').type('nfitri2299@gmail.com')
    }
    typeInContactNameField() {
        return cy.get('#recipient-name').type('fitri')
    }
    typeInMessageField() {
        return cy.get('#message-text').type('learn automation tester with cypress')
    }
    clickOnSendMessageButton() {
        return cy.get('.btn-primary').contains('Send message').click()
    }
    verifySuccessSendingMessage() {
        return cy.on('window:alert', (txt) => {
            expect(txt).to.contains('Thanks for the message!!');
        });
    }
    clickOnAboutUsButton() {
        return cy.get('.nav-link').contains('About us').click()
    }
    clickOnArrow() {
        return cy.get('.vjs-big-play-button').click()
    }
    verifySuccessPlayVidio() {
        return cy.get('video').then(($video) => {
            $video.get(0).pause(); // Mem-pause video secara langsung
          });
    }
}

export default Contact_AboutUsPage