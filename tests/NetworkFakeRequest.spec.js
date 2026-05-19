const {test} = require('@playwright/test');


test('@API Security reuest intercept test' , async ({page})=>{
 
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  
    const userEmail = page.locator('#userEmail');
    const userPassword = page.locator('input[formcontrolname="userPassword"]');
    const submitBtn = page.locator('input[id="login"]');
  
    const userId = "bzbztest@gmail.com";
 

    await userEmail.fill(userId);
    await userPassword.fill('Test@123');
    await submitBtn.click();
     await page.waitForLoadState('networkidle');
    await page.locator('div.card-body b').last().waitFor();
    await page.locator('button[routerlink*="myorders"]').click();
    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
     route=>route.continue({url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=69cbe406f86ba51a653at713'})
    );
    await page.locator("button:has-text('View')").first().click();
    console.log(await page.locator('p.blink_me').textContent());

    

})