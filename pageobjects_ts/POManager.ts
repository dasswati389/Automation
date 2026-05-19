import {Page} from '@playwright/test';
import {LoginPage} from './LoginPage';
import {DashboardPage} from './DashboardPage';
import {CartPage} from './CartPage';
import {CheckoutPage} from './CheckoutPage';
import {OrderConfirmationPage} from './OrderConfirmationPage';
import {OrderHistoryPage} from './OrderHistoryPage';
import {OrderDetailsPage} from './OrderDetailsPage';


export class POManager {

  page : Page;
  loginPage : LoginPage;
  dashboardPage : DashboardPage;
  cartPage : CartPage;
  checkoutPage : CheckoutPage;
  orderconfirmationPage : OrderConfirmationPage;
  orderhistoryPage : OrderHistoryPage;
  orderdetailsPage : OrderDetailsPage;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
        this.cartPage = new CartPage(page);
        this.checkoutPage = new CheckoutPage(page);
        this.orderconfirmationPage = new OrderConfirmationPage(page);
        this.orderhistoryPage = new OrderHistoryPage(page);
        this.orderdetailsPage = new OrderDetailsPage(page);

    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {

        return this.dashboardPage;
    }

    getCartPage() {
        return this.cartPage;
    }
    getCheckoutPage() {
        return this.checkoutPage;
    }
    getOrderConfirmationPage() {
        return this.orderconfirmationPage;
    }
    getOrderHistoryPage() {
        return this.orderhistoryPage;
    }
    getOrderDetailsPage() {
        return this.orderdetailsPage;
    }

}
module.exports = { POManager };