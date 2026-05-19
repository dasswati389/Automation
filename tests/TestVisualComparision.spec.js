import{test,expect} from '@playwright/test';


test('Screenshot and Visual Comparison', async({page})=>{

await page.goto('https://www.rediff.com/');
expect(await page.screenshot()).toMatchSnapshot('landing.png');
})

test('Page & element Screenshot', async({page})=>{

await page.goto('https://rahulshettyacademy.com/AutomationPractice/');

await expect(page.locator('#displayed-text')).toBeVisible();
await page.locator('#displayed-text').screenshot({path: 'elementScreenshot.png'});
await page.locator('#hide-textbox').click();
await page.screenshot({path: 'pageScreenshot.png'});
await expect(page.locator('#displayed-text')).toBeHidden();
})