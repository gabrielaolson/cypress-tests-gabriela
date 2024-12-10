
export function loginViaApi(email, password) {
    return cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: email,
        password: password,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      const authToken = response.body.authorization;
      window.localStorage.setItem('serverest/userToken', authToken );
      return authToken;
    });
  }
  
  