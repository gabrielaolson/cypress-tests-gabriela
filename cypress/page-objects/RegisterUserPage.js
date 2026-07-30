class RegisterUserPage {

    elements = {
        nameInput: () => cy.get('#nome'),
        emailInput: () => cy.get('#email'),
        passwordInput: () => cy.get('#password'),
        checkBoxAdmin: () => cy.get('[data-testid="checkbox"]'),
        registerButton: () => cy.get('[data-testid="cadastrar"]'),
        registerUserButton: () => cy.get('[data-testid="cadastrarUsuario"]'),
    }

    openSignUp() {
        this.elements.registerButton().click();

    }

    fillData(name, email, password) {
        this.elements.nameInput().type(name);
        this.elements.emailInput().type(email);
        this.elements.passwordInput().type(password);

    }

    registerUserFromHomePage(typeUser, name, email, password) {
        this.fillData(name, email, password)
        if (typeUser === "admin") {
            this.elements.checkBoxAdmin().click();
            this.elements.registerButton().click();
            cy.url().should('include', '/cadastrarusuarios');
            cy.wait(300);
            cy.url().should('include', '/admin/home');
        } else {
            this.elements.registerButton().click();
            cy.url().should('include', '/cadastrarusuarios');
            cy.wait(300);
            cy.url().should('include', '/home');
        }
    }

    registerUserByRole(typeUser, name, email, password) {
        this.fillData(name, email, password)
        if (typeUser === "admin") {
            this.elements.checkBoxAdmin().click();
        } else {
        }
        this.elements.registerUserButton().click();

        cy.url().should('include', '/cadastrarusuarios');
        cy.wait(300);
        cy.url().should('include', '/listarusuarios');
    }

}

export default new RegisterUserPage();
