# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: EndToEndShoppingCart.spec.js >> @test End to end shopping cart flow
- Location: tests\EndToEndShoppingCart.spec.js:3:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.col-md-6 .address .text').first()

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Join Rahul Shetty for a QA Career Meetup in CHENNAI — Book Your Spot" [ref=e11] [cursor=pointer]:
      - /url: http://qasummit.org/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row "Order Id Product Image Name Price Ordered Date View Delete" [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row "69de8c75f86ba51a65659416 iphone 13 pro $ 55000 Tue Apr 14 View Delete" [ref=e38]:
          - rowheader "69de8c75f86ba51a65659416" [ref=e39]
          - cell [ref=e40]:
            - img [ref=e41]
          - cell "iphone 13 pro" [ref=e42]
          - cell "$ 55000" [ref=e43]
          - cell "Tue Apr 14" [ref=e44]
          - cell "View" [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell "Delete" [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row "69de8a17f86ba51a65658cbd iphone 13 pro $ 55000 Tue Apr 14 View Delete" [ref=e49]:
          - rowheader "69de8a17f86ba51a65658cbd" [ref=e50]
          - cell [ref=e51]:
            - img [ref=e52]
          - cell "iphone 13 pro" [ref=e53]
          - cell "$ 55000" [ref=e54]
          - cell "Tue Apr 14" [ref=e55]
          - cell "View" [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell "Delete" [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row "69de6257f86ba51a65650a07 ADIDAS ORIGINAL $ 11500 Tue Apr 14 View Delete" [ref=e60]:
          - rowheader "69de6257f86ba51a65650a07" [ref=e61]
          - cell [ref=e62]:
            - img [ref=e63]
          - cell "ADIDAS ORIGINAL" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Tue Apr 14" [ref=e66]
          - cell "View" [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell "Delete" [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row "69de59c9f86ba51a6564ec01 ADIDAS ORIGINAL $ 11500 Tue Apr 14 View Delete" [ref=e71]:
          - rowheader "69de59c9f86ba51a6564ec01" [ref=e72]
          - cell [ref=e73]:
            - img [ref=e74]
          - cell "ADIDAS ORIGINAL" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Tue Apr 14" [ref=e77]
          - cell "View" [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell "Delete" [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row "69d68642f86ba51a65535d94 iphone 13 pro $ 55000 Wed Apr 08 View Delete" [ref=e82]:
          - rowheader "69d68642f86ba51a65535d94" [ref=e83]
          - cell [ref=e84]:
            - img [ref=e85]
          - cell "iphone 13 pro" [ref=e86]
          - cell "$ 55000" [ref=e87]
          - cell "Wed Apr 08" [ref=e88]
          - cell "View" [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell "Delete" [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row "69d56ab8f86ba51a65506c00 iphone 13 pro $ 55000 Tue Apr 07 View Delete" [ref=e93]:
          - rowheader "69d56ab8f86ba51a65506c00" [ref=e94]
          - cell [ref=e95]:
            - img [ref=e96]
          - cell "iphone 13 pro" [ref=e97]
          - cell "$ 55000" [ref=e98]
          - cell "Tue Apr 07" [ref=e99]
          - cell "View" [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell "Delete" [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row "69d55f4ef86ba51a6550568b iphone 13 pro $ 55000 Tue Apr 07 View Delete" [ref=e104]:
          - rowheader "69d55f4ef86ba51a6550568b" [ref=e105]
          - cell [ref=e106]:
            - img [ref=e107]
          - cell "iphone 13 pro" [ref=e108]
          - cell "$ 55000" [ref=e109]
          - cell "Tue Apr 07" [ref=e110]
          - cell "View" [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell "Delete" [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
    - generic [ref=e115]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e117]:
    - button "Go Back to Shop" [ref=e118] [cursor=pointer]
    - button "Go Back to Cart" [ref=e119] [cursor=pointer]
```

# Test source

```ts
  15  |     const userId = "bzbztest@gmail.com";
  16  |     page.on('request', request=>console.log(request.url()));
  17  |     page.on('response', response=>console.log(response.url(), response.status()));
  18  | 
  19  |     await userEmail.fill(userId);
  20  |     await userPassword.fill('Test@123');
  21  |     //page.route('**/*.{jpg,png,jpeg}', route=> route.abort());
  22  |     await submitBtn.click();
  23  |     
  24  |     // add to cart item 
  25  |     await page.waitForLoadState('networkidle');// this method was not working intermittently
  26  |     await page.locator('div.card-body b').last().waitFor();
  27  |     //added above step to add wait because playwright does not provide auto-wait for allTextContents method
  28  |     
  29  |     const titles = await page.locator('div.card-body b').allTextContents();
  30  |     console.log(titles);
  31  |     
  32  |     const count =  await items.count();
  33  |     console.log(count);
  34  |      for(let i=0; i< count; ++i){
  35  |      //console.log("Inside for loop");
  36  |     // console.log(await items.nth(i).locator('b').textContent());
  37  |       if(await items.nth(i).locator('b').textContent() === productName){
  38  |         console.log("Adding product "+productName);
  39  |         await items.nth(i).locator('button.w-10').click();
  40  |         break;
  41  |       }
  42  | 
  43  |      }
  44  |      //await page.pause();
  45  | 
  46  |      //Open cart, verify selected product and proceed to checkout
  47  |      await page.locator('button[routerlink*="cart"]').click();
  48  |      
  49  |      expect(await page.locator('.cartSection h3').textContent()).toContain(productName);
  50  |      //await page.locator('.subtotal ul button.btn').click();
  51  |      await page.locator('text=Checkout').click();
  52  | 
  53  |     //Enter card details and coupon "rahulshettyacademy" and verify email address on checkout page
  54  |     expect(await page.locator('.user__name input.ng-valid').inputValue()).toContain(userId);
  55  |     const fields = page.locator('div.field');
  56  |     const fcount = await fields.count();
  57  |     //console.log(fcount);
  58  |     for(let i =0; i<fcount; ++i){
  59  |      if(await fields.nth(i).locator('.title').textContent()==='Name on Card '){
  60  |         await fields.nth(i).locator('.input').fill('Test User');
  61  |         break;
  62  |      }
  63  |     }
  64  |     await page.locator('.field.small .input.txt').nth(0).fill('123');
  65  |     await page.locator('input[name="coupon"]').fill('rahulshettyacademy');
  66  |     await page.locator('.btn.btn-primary.mt-1').click();
  67  |     expect(await page.locator('p[class*="mt-1"]').textContent()).toContain('* Coupon Applied');
  68  |     //await page.pause();
  69  |     await page.locator('input[placeholder="Select Country"]').pressSequentially('ind',{delay:150});
  70  |     const dropdown =  page.locator('section.ta-results');
  71  |     await dropdown.waitFor();
  72  |     const options = page.locator('button[type="button"]');
  73  |     const optionsCount = await options.count();
  74  |    // console.log("Drop down is showing "+ optionsCount + " options.");
  75  |     
  76  |     for(let i =0; i<optionsCount; ++i)
  77  |     {
  78  |        const text = await options.nth(i).textContent();
  79  |       //console.log("Option "+ text+ " is being verified.");
  80  |       if (text === " India"){
  81  |            await options.nth(i).click();
  82  |            break;
  83  |       }
  84  |     }
  85  |     
  86  |     expect(await page.locator('a.action__submit').textContent()).toContain('Place Order ');
  87  |     await page.locator('div.actions a.action__submit').click();
  88  |       
  89  | 
  90  | 
  91  |     //place order and capture order number from screen and click order history link
  92  |      const rawOrderId = await page.locator('label.ng-star-inserted').textContent();
  93  |      const rawOrderId1 = rawOrderId.split(" ");
  94  |      const rawOrderId2 = rawOrderId1[2].split(" ");
  95  |      const orderID = rawOrderId2[0];
  96  |      
  97  |      expect(page.locator('.hero-primary')).toHaveText(" Thankyou for the order. ");
  98  |      console.log('Thankyou for the order. Your orderId is '+ orderID)
  99  |      await page.locator('label[routerlink*="myorders"]').click();
  100 | 
  101 |      //await page.pause();
  102 |     //search placed order in dynamic order history table and click on view order detail button
  103 |      await page.locator('table.table-hover tbody tr').last().waitFor();
  104 |      const tableRows = page.locator('table.table-hover tbody tr');
  105 |      const rowsCount = await tableRows.count();
  106 |      for(let i =0; i< rowsCount; ++i){
  107 |       if(await tableRows.nth(i).locator('th').textContent()===orderID){
  108 |       await tableRows.nth(i).locator('td button.btn-primary').click();
  109 |       break;
  110 |       }
  111 |     }
  112 | 
  113 |     //await page.pause();
  114 |     //verify order details on the page
> 115 |     console.log(await page.locator('.col-md-6 .address .text').first().textContent());
      |                                                                        ^ Error: locator.textContent: Test timeout of 30000ms exceeded.
  116 |     expect(await page.locator('.col-text.-main').textContent()).toContain(orderID);
  117 |     const address =  page.locator('div.address');
  118 |     expect(await address.nth(0).locator('p.text').nth(0).textContent()).toContain(userId);
  119 |     expect(await address.nth(1).locator('p.text').nth(0).textContent()).toContain(userId);
  120 |     expect(await page.locator('div.artwork-card-info div.title').textContent()).toContain(productName);
  121 |     
  122 | 
  123 | })
```