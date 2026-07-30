class DetailsProductPage {

    elements = {
        titleProductPage: () => cy.contains('Detalhes do produto'),
    }

    verifyDetailsPageLoad() {
        this.elements.titleProductPage().click();
    }

}

export default new DetailsProductPage();
