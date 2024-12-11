import HomePage from '../support/page-objects/HomePage';
import RegisterUserPage from '../support/page-objects/RegisterUserPage';
import LoginPage from '../support/page-objects/LoginPage';
import AdminHomePage from '../support/page-objects/AdminHomePage';
import ListUsersPage from '../support/page-objects/ListUsersPage';
import { createEmail } from '../support/createEmail';

let emailAdmin;
let emailUser;
const nameUser = "Test-3-novo"
const password = "test123";
const nameAdmin = "Test-3-User-admin"
let fixedEmailAdmin = "test_gabriela@mailinator.com";


beforeEach(() => {
    HomePage.visit();
});

describe('1 - End user registration flow  - from Home Page', () => {
    it('Should go to the register screen - fill in the details and complete the registration successfully', () => {
        HomePage.verifyPageLoad();
        emailUser = createEmail();
        RegisterUserPage.openSignUp();
        RegisterUserPage.registerUserFromHomePage("admin", nameUser, emailUser, password);
    });
});

describe('2 - Admin user registration flow - from Home Page', () => {
    it('Should go to the register screen - fill in the details and complete the registration successfully', () => {
        HomePage.verifyPageLoad();
        emailAdmin = fixedEmailAdmin;
        RegisterUserPage.openSignUp();
        RegisterUserPage.registerUserFromHomePage("admin", nameAdmin, emailAdmin, password);
    });
});

describe('3 - End user registration flow by admin user - Admin Page', () => {
    it('Admin user should successfully register an end user', () => {
        HomePage.verifyPageLoad();
        LoginPage.loginAdmin(fixedEmailAdmin, password);
        AdminHomePage.registerUser()
        emailUser = createEmail();
        RegisterUserPage.registerUserByRole("user", nameUser, emailUser, password);
        ListUsersPage.verifyPageLoadListaUsuarios();
        ListUsersPage.searchUserByName(nameUser);
    })

});


describe('4 - Admin user registration flow by admin user - Admin Page', () => {
    it('Admin user should successfully register an Admin user', () => {
        HomePage.verifyPageLoad();
        LoginPage.loginAdmin(fixedEmailAdmin, password);
        AdminHomePage.registerUser()
        emailAdmin = createEmail();
        RegisterUserPage.registerUserByRole("admin", nameAdmin, emailAdmin, password);
        ListUsersPage.verifyPageLoadListaUsuarios();
        ListUsersPage.searchUserByName(nameUser);
    })
});

describe('5 - Delete 2 End users that were created in the tests', () => {
    it('Admin user should delete users successfully', () => {
        HomePage.verifyPageLoad();
        LoginPage.loginAdmin(fixedEmailAdmin, password);
        AdminHomePage.openListUsers();
        ListUsersPage.verifyPageLoadListaUsuarios();
        ListUsersPage.deleteUserByName(nameUser);
        ListUsersPage.deleteUserByName(nameUser);
    });
});







