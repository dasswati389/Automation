import {test, expect} from '@playwright/test';

test('@Web Testing playwright locators', async({page})=>{

    await page.goto('https://rahulshettyacademy.com/angularpractice/');
    await page.getByLabel('Check me out if you Love IceCreams!').click();
    await page.getByLabel('Gender').selectOption('Female');
    await page.getByLabel('Employed').click();
    await page.getByPlaceholder('Password').fill('Test User');
    await page.getByRole('button', {name: 'Submit'}).click();
    expect(await page.getByText('Success! The Form has been submitted successfully!.').isVisible()).toBeTruthy();
    await page.getByRole('link', {name: 'Shop'}).click();
    await page.locator('app-card').filter({ hasText: 'Samsung Note 8'}).getByRole('button').click();




})