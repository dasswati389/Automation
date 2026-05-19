const {test,expect} = require("@playwright/test");

test ('@Web Select date in calendar', async({page})=>{

    const day = "12";
    const month = "9";
    const year = "2026";

await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
await page.locator('.react-date-picker__inputGroup').click();
await page.locator('.react-calendar__navigation__label').click();
await page.locator('.react-calendar__navigation__label').click();
await page.getByText(year).click();
await page.locator('.react-calendar__year-view__months__month').nth(Number(month)-1).click();
await page.locator("//abbr[text()='"+day+"']").click();

await page.locator('input[name="month"]').waitFor();
expect(await page.locator('input[name="month"]').getAttribute('value')).toEqual(month);
expect(await page.locator('input[name="day"]').getAttribute('value')).toEqual(day);
expect(await page.locator('input[name="year"]').getAttribute('value')).toEqual(year);

})