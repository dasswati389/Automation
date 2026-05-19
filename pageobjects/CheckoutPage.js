import {expect} from '@playwright/test';
export class CheckoutPage{
constructor(page){ 
    this.page = page;
    this.userId = page.locator('.user__name input.ng-valid');
    this.fields = page.locator('div.field');
    this.input = page.locator('.field.small .input.txt');
    this.couponInput = page.locator('input[name="coupon"]');
    this.couponButton = page.locator('.btn.btn-primary.mt-1');
    this.couponText = page.locator('p[class*="mt-1"]');
    this.selectCountry = page.locator('input[placeholder="Select Country"]');
    this.dropdown = page.locator('section.ta-results');
    this.options = page.locator('button[type="button"]');
    this.placeOrderText = page.locator('a.action__submit');
    this.placeOrderButton = page.locator('div.actions a.action__submit');

}
async fillDetailsToCheckout(username){
    //Enter card details and coupon "rahulshettyacademy" and verify email address on checkout page
        expect(await this.userId.inputValue()).toContain(username);
        
        const fcount = await this.fields.count();
        //console.log(fcount);
        for(let i =0; i<fcount; ++i){
         if(await this.fields.nth(i).locator('.title').textContent()==='Name on Card '){
            await this.fields.nth(i).locator('.input').fill('Test User');
            break;
         }
        }
        await this.input.nth(0).fill('123');
        await this.couponInput.fill('rahulshettyacademy');
        await this.couponButton.click();
        expect(await this.couponText.textContent()).toContain('* Coupon Applied');
        //await page.pause();
        await this.selectCountry.pressSequentially('ind',{delay:150});
        await this.dropdown.waitFor();
       
        const optionsCount = await this.options.count();
       // console.log("Drop down is showing "+ optionsCount + " options.");
        
        for(let i =0; i<optionsCount; ++i)
        {
           const text = await this.options.nth(i).textContent();
          //console.log("Option "+ text+ " is being verified.");
          if (text === " India"){
               await this.options.nth(i).click();
               break;
          }
        }
        
        expect(await this.placeOrderText.textContent()).toContain('Place Order ');
        await this.placeOrderButton.click();
          
}


}
//module.exports ={CheckoutPage};