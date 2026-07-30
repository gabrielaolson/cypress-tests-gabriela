class LoginPage {

    elements = {
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        enterButton: () => cy.contains('Entrar'),
    }
    fillData(email, password) {
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);
    }

    loginUser(email, password) {
        this.fillData(email, password)
        this.elements.enterButton().click();
        cy.wait(300);
        cy.url().should('include', '/home');
    }

    loginAdmin(email, password) {
        this.fillData(email, password)
        this.elements.enterButton().click();
        cy.wait(300);
        cy.url().should('include', '/admin/home');
    }

}

export default new LoginPage();
