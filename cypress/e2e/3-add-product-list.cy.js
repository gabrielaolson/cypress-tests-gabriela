import RegisterUserPage from "../page-objects/RegisterUserPage";
import HomePage from "../page-objects/HomePage";
import ShoppingListPage from "../page-objects/ShoppingListPage";
import UserHomePage from "../page-objects/UserHomePage";

let timestamp = Date.now();
var nameUser = "Test-3-novo"
let emailUser = `test1user${timestamp}@mailinator.com`;
let password = "test123";
let nameProduct = "notebook"
let price = "20";

beforeEach(() => {
    HomePage.visit();
});

describe('7 - Flow to Add product to the list', () => {
    it('User should add product to the list successfully', () => {
        HomePage.verifyPageLoad();
        RegisterUserPage.openSignUp();
        RegisterUserPage.registerUserFromHomePage("user", nameUser, emailUser, password);
        UserHomePage.verifyPageLoad();
        UserHomePage.searchProducts(nameProduct);
        UserHomePage.addProductToList();
        ShoppingListPage.addListItems(2);
        ShoppingListPage.verifyPriceUpdated(price, 2);
    });
});



