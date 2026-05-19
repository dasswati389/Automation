import { test, expect } from "@playwright/test"

test('Simple Form Demo', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Simple Form Demo' }).click();
    await expect(page.url()).toContain("simple-form-demo");
    const userMessage = "Welcome to TestMu AI";
    await page.locator('input#user-message').fill(userMessage);
    await page.locator('button#showInput').click();
    expect(await page.locator('p#message').textContent()).toContain(userMessage);

})

test('Drag & Drop Sliders', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Drag & Drop Sliders' }).click();
    const slider = page.locator('div#slider3 input[type="range"]');
    await slider.focus();

    // Press 'ArrowRight' multiple times to reach a value
    for (let i = 0; i < 80; i++) {
    await page.keyboard.press('ArrowRight');
    }
    await page.pause();
    await expect(page.locator('div#slider3 output')).toHaveText('95');
})

test('Input Form Submit', async ({ page }) => {

    await page.goto('https://www.testmuai.com/selenium-playground/');
    await page.getByRole('link', { name: 'Input Form Submit' }).click();
    await page.getByRole('button',{ name: 'Submit' }).click();
    const validationMessage = await page.locator('input[name="name"]').evaluate(el => el.validationMessage);
    expect(validationMessage).toBe('Please fill out this field.');
    await page.locator('input[name="name"]').fill('Swati');
    await page.locator('#inputEmail4').fill('swatitest@gmail.com');
    await page.locator('input[placeholder="Password"]').fill('test123');
    await page.locator('#company').fill('testCompany');
    await page.locator('#websitename').fill('https://www.swatitest.com');
    await page.locator('select[name="country"]').selectOption('United States');
    await page.locator('#inputCity').fill('Palm Beach');
    await page.locator('#inputAddress1').fill('Test Street');
    await page.locator('#inputAddress2').fill('Test Apt');
    await page.locator('#inputState').fill('Texas');
    await page.locator('#inputZip').fill('657432');
    await page.getByRole('button',{ name: 'Submit' }).click();
    await expect(page.getByText('Thanks for contacting us, we will get back to you shortly.').isVisible()).toBeTruthy();
})