class RegisterProductPage {

    elements = {
        cadastroTitlePage: () => cy.contains('Cadastro de Produtos'),
        nameProductInput: () => cy.get('[data-testid="nome"]'),
        priceInput: () => cy.get('[data-testid="preco"]'),
        descriptionInput: () => cy.get('[data-testid="descricao"]'),
        quantityInput: () => cy.get('[data-testid="quantity"]'),
        imageInput: () => cy.get('[data-testid="imagem"]'),
        registerButton: () => cy.get('[data-testid="cadastarProdutos"]'),
    }

    verifyRegisterPageLoad() {
        this.elements.cadastroTitlePage();
    }

    registerProduct(name, price, description, quantity) {
        this.elements.nameProductInput().type(name);
        this.elements.priceInput().type(price);
        this.elements.descriptionInput().type(description);
        this.elements.quantityInput().type(quantity);
        this.elements.registerButton().click();
    }
}

export default new RegisterProductPage();
