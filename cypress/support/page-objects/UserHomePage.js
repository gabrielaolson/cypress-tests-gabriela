
class UserHomePage {

    elements = {
        titlePage: () => cy.contains('Serverest Store'),
        inputsearchProducts: () => cy.get('[data-testid="pesquisar"]'),
        searchButton: () => cy.get('[data-testid="botaoPesquisar"]'),
        addToListButton: () => cy.get('[data-testid="adicionarNaLista"]'),
        detailsButton: () => cy.get('[data-testid="product-detail-link"]:first'),
        backButton: () => cy.get('[data-testid="voltarHome"]'),
    }

    verifyPageLoad() {
        this.elements.titlePage();
    }

    searchProducts(product) {
        this.elements.inputsearchProducts().type(product);
        this.elements.searchButton().click();
        cy.wait(300);
        cy.contains(product);

    }

    detailsProduct() {
        this.elements.detailsButton().click();
    }

    addProductToList() {
        this.detailsProduct();
        cy.wait(300);
        this.elements.addToListButton().click();
        cy.wait(300);
    }

    backUserHomePage() {
        this.elements.backButton().click();
    }

}

export default new UserHomePage();
