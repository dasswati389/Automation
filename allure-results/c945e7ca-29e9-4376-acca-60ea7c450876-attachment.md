# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LamdaTestAssignment.spec.js >> Input Form Submit
- Location: tests\LamdaTestAssignment.spec.js:31:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'Submit' })

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - main [ref=e2]:
    - generic [ref=e3]:
      - heading "www.testmuai.com" [level=1] [ref=e5]
      - heading "Performing security verification" [level=2] [ref=e6]
      - paragraph [ref=e7]: This website uses a security service to protect against malicious bots. This page is displayed while the website verifies you are not a bot.
  - contentinfo [ref=e11]:
    - generic [ref=e13]:
      - generic [ref=e15]:
        - text: "Ray ID:"
        - code [ref=e16]: 9fc4470f3eee801a
      - generic [ref=e17]:
        - generic [ref=e18]:
          - text: Performance and Security by
          - link "Cloudflare" [ref=e19] [cursor=pointer]:
            - /url: https://www.cloudflare.com?utm_source=challenge&utm_campaign=m
        - link "Privacy" [ref=e21] [cursor=pointer]:
          - /url: https://www.cloudflare.com/privacypolicy/
```

# Test source

```ts
  1  | import { test, expect } from "@playwright/test"
  2  | import { link } from "node:fs";
  3  | 
  4  | test('Simple Form Demo', async ({ page }) => {
  5  | 
  6  |     await page.goto('https://www.testmuai.com/selenium-playground/');
  7  |     await page.getByRole('link', { name: 'Simple Form Demo' }).click();
  8  |     await expect(page.url()).toContain("simple-form-demo");
  9  |     const userMessage = "Welcome to TestMu AI";
  10 |     await page.locator('input#user-message').fill(userMessage);
  11 |     await page.locator('button#showInput').click();
  12 |     expect(await page.locator('p#message').textContent()).toContain(userMessage);
  13 | 
  14 | })
  15 | 
  16 | /* test('Drag & Drop Sliders', async ({ page }) => {
  17 | 
  18 |     await page.goto('https://www.testmuai.com/selenium-playground/');
  19 |     await page.getByRole('link', { name: 'Default value 15' }).click();
  20 |     await page.locator('div#slider3').click()
  21 |     await expect(page.locator('h4:has-text(" Default value 15")')).toBeVisible()
  22 |     const slider = page.locator('input[value="15"]')
  23 |     await slider.evaluate(node => {
  24 |         (node as HTMLInputElement).value = '95'
  25 |         node.dispatchEvent(new Event('change'))
  26 |     })
  27 |     await expect(page.locator('#range')).toHaveText('95')
  28 | 
  29 | }) */
  30 | 
  31 | test.only('Input Form Submit', async ({ page }) => {
  32 | 
  33 |     await page.goto('https://www.testmuai.com/selenium-playground/');
  34 |     await page.getByRole('link', { name: 'Input Form Submit' }).click();
> 35 |     await page.getByRole('button',{ name: 'Submit' }).click();
     |                                                       ^ Error: locator.click: Test timeout of 30000ms exceeded.
  36 |     //write code to verify error message for empty name field
  37 |     await page.locator('input[name="name"]').fill('Swati');
  38 |     await page.locator('#inputEmail4').fill('swatitest@gmail.com');
  39 |     await page.locator('input[placeholder="Password"]').fill('test123');
  40 |     await page.locator('#company').fill('testCompany');
  41 |     await page.locator('#websitename').fill('https://www.swatitest.com');
  42 |     await page.locator('select[name="country"]').click();
  43 |     await page.locator('option[value="AL"]').click();
  44 |     await page.locator('#inputCity').fill('Palm Beach');
  45 |     await page.locator('#inputAddress1').fill('Test Street');
  46 |     await page.locator('#inputAddress2').fill('Test Apt');
  47 |     await page.locator('#inputState').fill('Texas');
  48 |     await page.locator('#inputZip').fill('657432');
  49 |     await page.getByRole('button',{ name: 'Submit' }).click();
  50 |     expect(await page.locator('p.success-msg').textContent()).toHaveText('Thanks for contacting us, we will get back to you shortly.');
  51 |    // expect(await page.getByText('Thanks for contacting us, we will get back to you shortly.').isVisible()).toBeTruthy();
  52 | })
```