import { test, expect } from '@playwright/test';
let webContext;
const userId = "bzbztest@gmail.com";

test.beforeAll(async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    const userEmail = page.locator('#userEmail');
    const userPassword = page.locator('input[formcontrolname="userPassword"]');
    const submitBtn = page.locator('input[id="login"]');
    
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
    await userEmail.fill(userId);
    await userPassword.fill('Test@123');
    await submitBtn.click();
    await page.waitForLoadState('networkidle');
    await context.storageState({ path: 'state.json' });
    webContext = await browser.newContext({ storageState: 'state.json' });

})

test('End to end shopping cart flow', async () => {

    /*  const context = await browser.newContext();
     const page = context.newPage(); */

    
    const productName = "iphone 13 pro";
    const page = await webContext.newPage();
    const items = page.locator('div.card-body');
    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');


    // this method was not working intermittently
    await page.locator('div.card-body b').last().waitFor();
    //added above step to add wait because playwright does not provide auto-wait for allTextContents method

    const titles = await page.locator('div.card-body b').allTextContents();
    console.log(titles);

    const count = await items.count();
    console.log(count);
    for (let i = 0; i < count; ++i) {
        //console.log("Inside for loop");
        // console.log(await items.nth(i).locator('b').textContent());
        if (await items.nth(i).locator('b').textContent() === productName) {
            console.log("Adding product " + productName);
            await items.nth(i).locator('button.w-10').click();
            break;
        }

    }
    //await page.pause();

    //Open cart, verify selected product and proceed to checkout
    await page.locator('button[routerlink*="cart"]').click();

    expect(await page.locator('.cartSection h3').textContent()).toContain(productName);
    //await page.locator('.subtotal ul button.btn').click();
    await page.locator('text=Checkout').click();

    //Enter card details and coupon "rahulshettyacademy" and verify email address on checkout page
    expect(await page.locator('.user__name input.ng-valid').inputValue()).toContain(userId);
    const fields = page.locator('div.field');
    const fcount = await fields.count();
    //console.log(fcount);
    for (let i = 0; i < fcount; ++i) {
        if (await fields.nth(i).locator('.title').textContent() === 'Name on Card ') {
            await fields.nth(i).locator('.input').fill('Test User');
            break;
        }
    }
    await page.locator('.field.small .input.txt').nth(0).fill('123');
    await page.locator('input[name="coupon"]').fill('rahulshettyacademy');
    await page.locator('.btn.btn-primary.mt-1').click();
    expect(await page.locator('p[class*="mt-1"]').textContent()).toContain('* Coupon Applied');
    //await page.pause();
    await page.locator('input[placeholder="Select Country"]').pressSequentially('ind', { delay: 150 });
    const dropdown = page.locator('section.ta-results');
    await dropdown.waitFor();
    const options = page.locator('button[type="button"]');
    const optionsCount = await options.count();
    // console.log("Drop down is showing "+ optionsCount + " options.");

    for (let i = 0; i < optionsCount; ++i) {
        const text = await options.nth(i).textContent();
        //console.log("Option "+ text+ " is being verified.");
        if (text === " India") {
            await options.nth(i).click();
            break;
        }
    }

    expect(await page.locator('a.action__submit').textContent()).toContain('Place Order ');
    await page.locator('div.actions a.action__submit').click();



    //place order and capture order number from screen and click order history link
    const rawOrderId = await page.locator('label.ng-star-inserted').textContent();
    const rawOrderId1 = rawOrderId.split(" ");
    const rawOrderId2 = rawOrderId1[2].split(" ");
    const orderID = rawOrderId2[0];

    expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
    console.log('Thankyou for the order. Your orderId is ' + orderID)
    await page.locator('label[routerlink*="myorders"]').click();

    //await page.pause();
    //search placed order in dynamic order history table and click on view order detail button
    await page.locator('table.table-hover tbody tr').last().waitFor();
    const tableRows = page.locator('table.table-hover tbody tr');
    const rowsCount = await tableRows.count();
    for (let i = 0; i < rowsCount; ++i) {
        if (await tableRows.nth(i).locator('th').textContent() === orderID) {
            await tableRows.nth(i).locator('td button.btn-primary').click();
            break;
        }
    }

    //await page.pause();
    //verify order details on the page
    console.log(await page.locator('.col-md-6 .address .text').first().textContent());
    expect(await page.locator('.col-text.-main').textContent()).toContain(orderID);
    const address = page.locator('div.address');
    expect(await address.nth(0).locator('p.text').nth(0).textContent()).toContain(userId);
    expect(await address.nth(1).locator('p.text').nth(0).textContent()).toContain(userId);
    expect(await page.locator('div.artwork-card-info div.title').textContent()).toContain(productName);


})