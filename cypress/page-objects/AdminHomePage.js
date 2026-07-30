class AdminHomePage {

    elements = {
        registerUserButton: () => cy.get('[data-testid="cadastrarUsuarios"]'),
        listUsersButton: () => cy.get('[data-testid="listarUsuarios"]'),
        registerProductButton: () => cy.get('[data-testid="cadastarProdutos"]'),
        listProductButton: () => cy.get('[data-testid="listarProdutos"]'),
        reportsButton: () => cy.get('[data-testid="relatorios"]'),
    }

    registerUser() {
        this.elements.registerUserButton().click();
    }

    openListUsers() {
        this.elements.listUsersButton().click();
    }

    enterListProducts() {
        this.elements.listProductButton().click();
    }

    openRegisterProductsPage() {
        this.elements.registerProductButton.should('be.visible');
        this.elements.registerProductButton().click();
    }

}

export default new AdminHomePage();
