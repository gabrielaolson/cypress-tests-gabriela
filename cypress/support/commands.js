import { loginViaApi } from './auth';
import { createUserApi } from './createUser';


Cypress.Commands.add('loginViaApi', loginViaApi);
Cypress.Commands.add('createUserApi', createUserApi);

