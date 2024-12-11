import chaiJsonSchema from 'chai-json-schema';
chai.use(chaiJsonSchema);

let emailAdmin = "test_gabriela@mailinator.com";
let password = "test123";
let timestamp = Date.now();
let authToken;
let nameProduct = `Product Test ${timestamp}`

describe('1 - Contract Test - GET Products', () => {

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
    it('Should return the correct Response', () => {
      const schema = {
        type: "object",
        properties: {
          quantidade: {
            type: "integer"
          },
          produtos: {
            type: "array",
            items: {
              type: "object",
              properties: {
                nome: {
                  type: "string"
                },
                preco: {
                  type: "integer"
                },
                descricao: {
                  type: "string"
                },
                quantidade: {
                  type: "integer"
                },
              },
              required: ["nome", "preco", "descricao", "quantidade"]
            }
          }
        },
        required: ["quantidade", "produtos"]
      };
      cy.get('@getProducts').then((response) => {
        expect(response.status).to.eq(200); 
        cy.log(response.body);
        expect(response.body).to.be.jsonSchema(schema);
      });
    });
  });

describe('2 - Contract Test - POST products', () => {
    before(() => {
        cy.loginViaApi(emailAdmin, password).then((token) => {
            authToken = token;
        });
    });

    beforeEach(() => {
        var timestamp = Date.now();
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/produtos',
            headers: {
                Authorization: authToken,
            },
            body: {
                nome: nameProduct,
                preco: 45,
                descricao: "Mouse",
                quantidade: 387
            },
        }).as("insertProducts");
    })
    it('Should return the correct Response', () => {
        const schema = 
            {
                type: "object",
                properties: {
                  message: {
                    type: "string"
                  },
                  _id: {
                    type: "string"
                  }
                },
                required: ["message", "_id"]
              }
              cy.get('@insertProducts').then((response) => {
                expect(response.status).to.eq(201); 
                cy.log(response.body);
                expect(response.body).to.be.jsonSchema(schema);
              });
              cy.get('@insertProducts');
              cy.get('@insertProducts');
            });
        });
