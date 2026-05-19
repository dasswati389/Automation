import {expect,Page, Locator} from '@playwright/test';
export class CartPage{

    page : Page;
    cartButton : Locator;
    cartItemName : Locator;
    checkOutButton : Locator;

    constructor(page: Page){
        this.page = page;
        this.cartButton = page.locator('button[routerlink*="cart"]');
        this.cartItemName = page.locator('.cartSection h3');
        this.checkOutButton = page.locator('text=Checkout');
    }

    async checkCart(productName: string){
    //Open cart, verify selected product and proceed to checkout
         await this.cartButton.click();
         
         expect(await this.cartItemName.textContent()).toContain(productName);
         //await page.locator('.subtotal ul button.btn').click();
         await this.checkOutButton.click();
}
}
module.exports ={CartPage};