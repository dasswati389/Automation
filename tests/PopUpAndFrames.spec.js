const {test,expect} = require("@playwright/test");

test('@Web Popup and frames testing.', async({page})=>{
//Testing browser navigation
await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
await page.goto('https://google.com');
await page.goBack();
//await page.goForward();
//Testing element's visiblity
await expect(page.locator('#displayed-text')).toBeVisible();
await page.locator('#hide-textbox').click();
await expect(page.locator('#displayed-text')).toBeHidden();
//Testing pop up handling
page.on('dialog', dialog =>dialog.accept());
await page.locator('#confirmbtn').click();
const iframePage = page.frameLocator('#courses-iframe');
await iframePage.locator("li a[href*='lifetime-access']:visible").click();
await page.locator('#mousehover').hover();


})