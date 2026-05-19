import {test} from '@playwright/test';
import {POManager} from '../pageobjects_ts/POManager';
const dataset = JSON.parse(JSON.stringify(require("../Utils_ts/EndToEndShoppingCartPOTestData.json")));



test('@smoketest End to end shopping cart flow', async({page})=>{

  
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    const cartPage = poManager.getCartPage();
    const checkoutPage = poManager.getCheckoutPage();
    const orderconfirmationPage = poManager.getOrderConfirmationPage();
    const orderhistoryPage = poManager.getOrderHistoryPage();
    const orderdetailsPage = poManager.getOrderDetailsPage();

    await loginPage.goTo();
    await loginPage.validLogin(dataset.username,dataset.password);
    await dashboardPage.addToCart(dataset.productName);
    await cartPage.checkCart(dataset.productName)
    await checkoutPage.fillDetailsToCheckout(dataset.username);
    const orderID = await orderconfirmationPage.ordeConfirmation();
    await orderhistoryPage.searchOrder(orderID);
    await orderdetailsPage.verifyOrderDetails(orderID,dataset.username,dataset.productName);
  

})