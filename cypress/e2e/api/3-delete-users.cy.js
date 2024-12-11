


const emailAdmin = "test_gabriela@mailinator.com";
const password = "test123";
let authToken;

describe('4 - DELETE Users', () => {
    before(() => {
        cy.loginViaApi(emailAdmin, password).then((token) => {
            authToken = token;
        });
    });

    beforeEach(() => {
        var timestamp = Date.now();
        cy.request({
            method: 'GET',
            url: 'https://serverest.dev/usuarios',
            headers: {
                Authorization: authToken,
            },
        }).as("getUsers");
    })

    it('GET request - get users that have Test-3 in the name and DELETE them', () => {
        cy.get("@getUsers").then((response) => {
            expect(response.body.usuarios).to.be.an("array");
            expect(response.status).to.eq(200);
            const userIds = [];
            response.body.usuarios.forEach((user) => {
                if (user.nome.includes('Test-3')) {
                    var toDelete = user._id;
                    cy.request({
                        method: 'DELETE',
                        url: `https://serverest.dev/usuarios/${toDelete}`,
                        headers: {
                            'Authorization': authToken,
                        },
                    })
                    userIds.push(toDelete);
                }
            });
            expect(userIds).to.have.length.greaterThan(0);
            expect(response.status).to.eq(200);
            cy.log('User IDs found:', userIds);
        })
    });
})
