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

describe('End user registration flow  - from Home Page', () => {

    it('Should open the Home Page', () => {
        HomePage.verifyPageLoad();
    });
    it('Should go to the register screen - fill in the details and complete the registration successfully', () => {
        emailUser = createEmail();
        RegisterUserPage.openSignUp();
        RegisterUserPage.registerUserFromHomePage("admin", nameUser, emailUser, password);
    });
});

describe('Admin user registration flow - from Home Page', () => {
    it('Should open the Home Page', () => {
        HomePage.verifyPageLoad();
    });
    it('Should go to the register screen - fill in the details and complete the registration successfully', () => {
        emailAdmin = fixedEmailAdmin;
        RegisterUserPage.openSignUp();
        RegisterUserPage.registerUserFromHomePage("admin", nameAdmin, emailAdmin, password);
    });
});

describe('End user registration flow by admin user - Admin Page', () => {
    it('Should open the Home Page', () => {
        HomePage.verifyPageLoad();
    });

    it('Admin user should successfully register an end user', () => {
        LoginPage.loginAdmin(fixedEmailAdmin, password);
        AdminHomePage.registerUser()
        emailUser = createEmail();
        RegisterUserPage.registerUserByRole("user", nameUser, emailUser, password);
        ListUsersPage.verifyPageLoadListaUsuarios();
        ListUsersPage.searchUserByName(nameUser);
    })

});


describe('Admin user registration flow by admin user - Admin Page', () => {
    it('Should open the Home Page', () => {
        HomePage.verifyPageLoad();
    });

    it('Admin user should successfully register an admin user', () => {
        LoginPage.loginAdmin(fixedEmailAdmin, password);
        AdminHomePage.registerUser()
        emailAdmin = createEmail();
        RegisterUserPage.registerUserByRole("admin", nameAdmin, emailAdmin, password);
        ListUsersPage.verifyPageLoadListaUsuarios();
        ListUsersPage.searchUserByName(nameUser);
    })
});

describe('Delete end users that were created in the tests', () => {
    it('Admin user should delete users successfully', () => {
        HomePage.visit();
        LoginPage.loginAdmin(fixedEmailAdmin, password);
        AdminHomePage.openListUsers();
        ListUsersPage.verifyPageLoadListaUsuarios();
        ListUsersPage.deleteUserByName(nameUser);
        ListUsersPage.deleteUserByName(nameUser);
    });
});







