import { Page, Locator } from '@playwright/test';
export class LoginPage{
  page: Page;
  userEmail : Locator;
  userPassword : Locator;
  submitBtn : Locator;

constructor(page:Page){
  this.page = page;
  this.userEmail =  page.locator('#userEmail');
  this.userPassword =  page.locator('input[formcontrolname="userPassword"]');
  this.submitBtn =  page.locator('input[id="login"]');
}

async goTo(){
await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
}

async validLogin(username:any,password:any){
    
    await this.userEmail.fill(username);
    await this.userPassword.fill(password);
    await this.submitBtn.click();
    await this.page.waitForLoadState('networkidle');// this method was not working intermittently
}

}

module.exports ={LoginPage};