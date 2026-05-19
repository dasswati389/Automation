import {expect} from '@playwright/test';
export class OrderDetailsPage{

    constructor(page){
    this.page = page;
    this.addressText = page.locator('.col-md-6 .address .text');
    this.orderId = page.locator('.col-text.-main');
    this.address = page.locator('div.address');
    this.productTitle = page.locator('div.artwork-card-info div.title');

    }

    async verifyOrderDetails(orderID,userId,productName){

    //await page.pause();
    //verify order details on the page
    console.log(await this.addressText.first().textContent());
    expect(await this.orderId.textContent()).toContain(orderID);
    expect(await this.address.nth(0).locator('p.text').nth(0).textContent()).toContain(userId);
    expect(await this.address.nth(1).locator('p.text').nth(0).textContent()).toContain(userId);
    expect(await this.productTitle.textContent()).toContain(productName);
    }
}
//module.exports={OrderDetailsPage};