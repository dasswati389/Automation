import {expect, Locator, Page} from '@playwright/test';
export class OrderConfirmationPage{
    page : Page;
    rawOrderID : Locator;
    confirmationText : Locator;
    myOrdersLink : Locator;


constructor(page:Page){
    this.page = page;
    this.rawOrderID = page.locator('label.ng-star-inserted');
    this.confirmationText = page.locator('.hero-primary');
    this.myOrdersLink = page.locator('label[routerlink*="myorders"]');

}

async ordeConfirmation(){
    let rawOrderId : any;
 //place order and capture order number from screen and click order history link
      rawOrderId = await this.rawOrderID.textContent();
      const rawOrderId1 = rawOrderId.split(" ");
      const rawOrderId2 = rawOrderId1[2].split(" ");
      const orderID = rawOrderId2[0];
      
      expect(this.confirmationText).toHaveText(" Thankyou for the order. ");
      console.log('Thankyou for the order. Your orderId is '+ orderID)
      await this.myOrdersLink.click();
      return orderID;
}

}

module.exports ={OrderConfirmationPage};