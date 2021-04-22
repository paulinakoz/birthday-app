describe('Birthday App', () => {
    beforeEach(() => {
        cy.visit("/");
    });

    it('shows the heading of the app', () => {
        cy.contains('Hello there!');
    })

    it('asks for the users name', () => {
        cy.contains('What\'s your name?');
    })

    it('has an input box for the name', () => {
        cy.get('#input-name').should('be.visible');
    })

    it('should ask for the users birthday', () => {
        cy.contains('When\'s your birthday?');
    })

    it('shows an input for day', () => {
        cy.get('#input-day').should('be.visible');
    })

    it('shows dropdown menu to chose the month', () => {
        cy.get('#input-month').should('be.visible');
    })

    it('shows a button', () => {
        cy.get('#submit-button').should('contain', 'Go!');
    })

    it("name shows up after submitting", function(){
        cy.get("#input-name").type("Paulina");
        cy.get("#submit-button").click();
        cy.url().should("include", "/birthday");
        cy.contains("Happy Birthday Paulina! 🥳");
    })
})