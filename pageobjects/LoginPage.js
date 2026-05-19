export class LoginPage{

constructor(page){
  this.page = page;
  this.userEmail =  page.locator('#userEmail');
  this.userPassword =  page.locator('input[formcontrolname="userPassword"]');
  this.submitBtn =  page.locator("[value='Login']");
}

async goTo(){
await this.page.goto('https://rahulshettyacademy.com/client/#/auth/login');
}

async validLogin(username,password){
    
    await this.userEmail.fill(username);
    await this.userPassword.fill(password);
    await this.submitBtn.click();
    await this.page.waitForLoadState('networkidle');// this method was not working intermittently
}

}

//module.exports ={LoginPage};