class ShoppingListPage {

    elements = {
        titlePage: () => cy.contains('Lista de Compras'),
        homePageButton: () => cy.get('[data-testid="paginaInicial"]'),
        addCartButton: () => cy.get('[data-testid="adicionar carrinho"]'),
        clearListButton: () => cy.get('[data-testid="clearShoppingList"]'),
        nameProduct: () => cy.get('[data-testid="shopping-cart-product-name"]'),
        priceProduct: () => cy.contains('p', 'Preço').parents('div'),
        quantityProduct: () => cy.get('[data-testid="shopping-cart-product-quantity"]'),
        increaseQuantity: () => cy.get('[data-testid="product-increase-quantity"]'),
        decreaseQuantity: () => cy.get('[data-testid="product-decrease-quantity"]'),
        emptyList: () => cy.contains('Seu carrinho está vazio'),
    }

    verifyShoppingPageLoad() {
        this.elements.titlePage();
    }

    clearShoppingList() {
        this.elements.clearListButton().click();
        this.elements.emptyList();
    }

    addListItems(quantityItems) {
        for (let i = 1; i <= quantityItems; i++) {
            this.elements.increaseQuantity().click();
        }
    }

    reduceListItems(quantityItems) {
        for (let i = 0; i <= quantityItems; i++) {
            this.elements.decreaseQuantity().click();
        }
    }

    verifyPriceUpdated(price, quantityItems) {
        let quantityItemsUpdated = quantityItems + 1;
        let updatedPrice = price * quantityItemsUpdated;

        let priceProd;
        this.elements.priceProduct().invoke('text')
            .then((text) => {
                priceProd = text.trim();
                cy.log(priceProd);
                expect(priceProd).to.include(updatedPrice);
            });
    };
}

export default new ShoppingListPage();
