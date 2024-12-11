import AdminHomePage from "../support/page-objects/AdminHomePage";
import RegisterProductPage from "../support/page-objects/RegisterProductPage";
import HomePage from "../support/page-objects/HomePage";
import ListProductsPage from "../support/page-objects/ListProductsPage";
import LoginPage from "../support/page-objects/LoginPage";
import NavBarAdmin from "../support/page-objects/NavBarAdmin";
import RegisterUserPage from "../support/page-objects/RegisterUserPage";
import { createEmail } from "../support/createEmail";

let timestamp = Date.now();
let nameProduct = `notebook${timestamp}`;
let emailAdmin;
let nameAdmin = "Test-3"
let password = "test123";
const price = "20";
const description = "New test";
const quantity = "5";


beforeEach(() => {
    HomePage.visit();
    emailAdmin = createEmail();
});

describe('6 - Flow User Admin register a product', () => {
    it('Should register a product sucessfully', () => {
        HomePage.verifyPageLoad();
        RegisterUserPage.openSignUp();
        RegisterUserPage.registerUserFromHomePage("admin", nameAdmin, emailAdmin, password);
        NavBarAdmin.openRegisterProductNav();
        RegisterProductPage.registerProduct(nameProduct, price, description, quantity);
        cy.wait(3000);
        cy.reload();
        ListProductsPage.searchProductByName(nameProduct);
    });
});



