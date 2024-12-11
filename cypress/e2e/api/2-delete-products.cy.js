let emailAdmin = "test_gabriela@mailinator.com";
let password = "test123";
let authToken;

describe('3 - DELETE Products', () => {
    

    before(() => {
        cy.loginViaApi(emailAdmin, password).then((token) => {
            authToken = token;
        });
    });

    beforeEach(() => {
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/produtos',
            headers: {
                Authorization: authToken,
            },
        }).as("getProducts");
    })
   
    it('Get products that have Product Test in the name and DELETE them', () => {
        cy.get("@getProducts").then((response) => {
            expect(response.body.produtos).to.be.an("array");
            expect(response.status).to.eq(200)
            const productIds = [];
            response.body.produtos.forEach((product) => {
                if (product.nome.includes('Product Test')) {
                    var toDelete = product._id;
                    cy.request({
                        method: 'DELETE',
                        url: `https://serverest.dev/produtos/${toDelete}`,
                        headers: {
                            'Authorization': authToken,
                          },
                    })
                    productIds.push(product._id);
                }
            });
            expect(productIds).to.have.length.greaterThan(0); 
            expect(response.status).to.eq(200)
            cy.log('IDs found:', productIds);


        })
    });

})
