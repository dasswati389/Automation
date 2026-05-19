/* const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');
const { CartPage } = require('./CartPage');
const { CheckoutPage } = require('./CheckoutPage');
const { OrderConfirmationPage } = require('./OrderConfirmationPage');
const { OrderHistoryPage } = require('./OrderHistoryPage');
const { OrderDetailsPage } = require('./OrderDetailsPage'); */

import {LoginPage} from './LoginPage.js';
import {DashboardPage} from './DashboardPage.js';
import {CartPage} from './CartPage.js';
import {CheckoutPage} from './CheckoutPage.js';
import {OrderConfirmationPage} from './OrderConfirmationPage.js';
import {OrderHistoryPage} from './OrderHistoryPage.js';
import {OrderDetailsPage} from './OrderDetailsPage.js';

export class POManager {


    constructor(page) {
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
//module.exports = { POManager };