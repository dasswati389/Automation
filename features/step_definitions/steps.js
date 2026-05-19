import { When, Given, Then } from '@cucumber/cucumber';
import {POManager} from '../../pageobjects/POManager.js';
let poManager;

Given('Login page of ecommerce website with credentials {string} and {string}', async function (username, password) {
    // Write code here that turns the phrase above into concrete actions
    

    poManager = new POManager(this.page);
    const loginPage = poManager.getLoginPage();
    await loginPage.goTo();
    await loginPage.validLogin(username,password);
});

When('Add {string} to cart', async function (productName) {
    this.dashboardPage = poManager.getDashboardPage();    
    await this.dashboardPage.addToCart(productName);
    
});



Then('Verify {string} is present on cart page', async function (productName) {
    this.cartPage = poManager.getCartPage();
    await this.cartPage.checkCart(productName)
});



When('Enter card details, verify {string} and checkout', async function (username) {
     this.checkoutPage = poManager.getCheckoutPage();
   await this.checkoutPage.fillDetailsToCheckout(username);
    
});



Then('Verify order on Order History page', async function () {
    this.orderconfirmationPage = poManager.getOrderConfirmationPage();
    this.orderhistoryPage = poManager.getOrderHistoryPage();
    this.orderID = await this.orderconfirmationPage.ordeConfirmation();
     await this.orderhistoryPage.searchOrder(this.orderID);
});



Then('Verify order Id, {string} and {string} on Order Details page', async function (username,productName) {
    
    this.orderdetailsPage = poManager.getOrderDetailsPage();
     await this.orderdetailsPage.verifyOrderDetails(this.orderID,username,productName);
});
