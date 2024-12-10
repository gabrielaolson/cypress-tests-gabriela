const name = "Test-3";
const password = "test123";

export function createUserApi(authToken, email) {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/cadastro',
      body: {
        nome: name,
        email: email,
        password: password,
        administrador: true,
      },
      headers: {
        Authorization: authToken,
    },

    }).then((response) => {
      expect(response.status).to.eq(201);
      return response;
    });
  }

  