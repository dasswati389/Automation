import { test, expect } from '@playwright/test';

test('Launch Playwright Url', async ({page})=>{
await page.goto('https://playwright.dev/');
console.log(await page.title());
await expect(page).toHaveTitle(/Playwright/);
 
});

test('Verify error message on Login Page.', async ({page})=>{
await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
console.log(await page.title());
//Testing page title.
await expect(page).toHaveTitle(/Rahul Shetty Academy/);
//Testing error message for incorrect username or password
await page.locator('#username').fill('rahulshetty');
await page.locator("[id='password']").fill('Learning@830$3mK2');
await page.locator('input.btn').click();
const loc = page.locator("div[style*='block']");
console.log(await loc.textContent());
await expect(loc).toContainText('Incorrect');
});

test('Client Login', async({page})=>{

    /* const context = await browser.newContext();
    const page = context.newPage(); */
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');

    const registerLink = page.locator('.login-wrapper.my-auto.p-5 a.text-reset');
    const firstName = page.locator('#firstName');
    const lastName = page.locator('#lastName');
    const userEmail = page.locator('#userEmail');
    const userMobile = page.locator('#userMobile');
    const gender = page.locator('input[value="Female"]');
    const userPassword = page.locator('input[formcontrolname="userPassword"]');
    const confirmPassword = page.locator('input[formcontrolname="confirmPassword"]');
    const ageCheckBox = page.locator('[type="checkbox"]');
    const submitBtn = page.locator('input[id="login"]');
    const loginBtn =  page.locator('.btn-primary');
 
    /* await registerLink.click();
    await firstName.fill('Playwright');
    await lastName.fill('TestUser');
    await userEmail.fill('testuser@gmail.com');
    await userMobile.fill('5764328976');
    await gender.click();
    await userPassword.fill('Testuser@123');
    await confirmPassword.fill('Testuser@123');
    await ageCheckBox.click();
    await submitBtn.click();
    await loginBtn.click(); */

    await userEmail.fill('bzbztest@gmail.com');
    await userPassword.fill('Test@123');
    await submitBtn.click();
  //  console.log(await page.locator('div.card-body b').nth(0).textContent());
  //  console.log(await page.locator('div.card-body b').last().textContent());
    await page.waitForLoadState('networkidle');
    console.log(await page.locator('div.card-body b').allTextContents());

})