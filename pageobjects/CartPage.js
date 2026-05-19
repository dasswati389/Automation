import {expect} from '@playwright/test';
export class CartPage{

    constructor(page){
        this.page = page;
        this.cartButton = page.locator('button[routerlink*="cart"]');
        this.cartItemName = page.locator('.cartSection h3');
        this.checkOutButton = page.locator('text=Checkout');
    }

    async checkCart(productName){
    //Open cart, verify selected product and proceed to checkout
         await this.cartButton.click();
         
         expect(await this.cartItemName.textContent()).toContain(productName);
         //await page.locator('.subtotal ul button.btn').click();
         await this.checkOutButton.click();
}
}
//module.exports ={CartPage};