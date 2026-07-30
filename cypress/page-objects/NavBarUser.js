class NavBarUser {

    elements = {

        homeButton: () => cy.get('[data-testid="home"]'),
        listShoppingButton: () => cy.get('[data-testid="lista-de-compras"]'),
        cartButton: () => cy.get('[data-testid="carrinho"]'),
        logoutButton: () => cy.get('[data-testid="logout"]'),
    }

    openListShopping() {
        this.elements.listShoppingButton().click();
    }

}

export default new NavBarUser();
