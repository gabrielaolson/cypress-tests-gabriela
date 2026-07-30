class NavBarAdmin {

    elements = {
        homeNavButton: () => cy.get('[data-testid="home"]'),
        registerUsersNavButton: () => cy.get('[data-testid="cadastrar-usuarios"]'),
        listUsersNavButton: () => cy.get('[data-testid="listar-usuarios"]'),
        registerProductsNavButton: () => cy.get('[data-testid="cadastrar-produtos"]'),
        listProductsNavButton: () => cy.get('[data-testid="listar-produtos"]'),
        reportsNavButton: () => cy.get('[data-testid="link-relatorios"]'),
    }

    registerUserNav() {
        this.elements.registerUsersNavButton().click();
    }

    openListUsersNav() {
        this.elements.listUsersNavButton().click();
    }

    openRegisterProductNav() {
        this.elements.registerProductsNavButton().click();
    }

}

export default new NavBarAdmin();
