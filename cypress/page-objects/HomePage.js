class HomePage {

    elements = {
        image: () => cy.get('form').find('img').should('have.attr', 'src').should('include', 'serverestlogo1.532833ba'),
    }

    visit() {
        const baseUrl = Cypress.config('baseUrl');
        cy.visit(baseUrl);
    }

    verifyPageLoad() {
        this.elements.image();
    }
}

export default new HomePage();
