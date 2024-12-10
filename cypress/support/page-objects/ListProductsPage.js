class ListProductsPage{
        
    elements = {
        titlePage: () => cy.contains('Lista dos Produtos'),
    }

    verifyPageListProductsLoad(){
        this.elements.titlePage();
    }
    searchProductByName(name){
        cy.contains('td', name).parents('tr');
    }

    deleteProductByName(name){
        cy.contains('td', name).parents('tr').find('button.btn-danger').click();
        cy.wait(400);
        cy.reload();
    }

  }

    export default new ListProductsPage();
    