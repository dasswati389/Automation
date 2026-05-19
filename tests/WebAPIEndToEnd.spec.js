const {test, expect, request} = require('@playwright/test');
const { APiUtils } = require('../Utils/APiUtils');
const  LoginPayLoad = {userEmail: "bzbztest@gmail.com", userPassword: "Test@123"};
const OrderPayLoad = {orders: [{country: "Austria", productOrderedId: "6960eae1c941646b7a8b3ed3"}]};


let response;
test.beforeAll(async()=>{
             const apiContext = await request.newContext();
             const apiUtils = new APiUtils(apiContext,LoginPayLoad);
             response = await apiUtils.createOrder(OrderPayLoad);

})

test('@API End to end shopping cart flow', async({page})=>{

await page.addInitScript(value => {
 
        window.localStorage.setItem('token',value);
    }, response.token );


    await page.goto('https://rahulshettyacademy.com/client/#/auth/login');
  
    //await page.pause();
     await page.locator('button[routerlink*="myorders"]').click();
     console.log("Verifying order "+response.orderId);

     //await page.pause();
    //search placed order in dynamic order history table and click on view order detail button
     await page.locator('table.table-hover tbody tr').last().waitFor();
     const tableRows = page.locator('table.table-hover tbody tr');
     const rowsCount = await tableRows.count();
     
     for(let i =0; i< rowsCount; ++i){
      if(await tableRows.nth(i).locator('th').textContent()===response.orderId){
      await tableRows.nth(i).locator('td button.btn-primary').click();
      break;
      }
    }

    //await page.pause();
    //verify order details on the page
    console.log(await page.locator('.col-md-6 .address .text').first().textContent());
    expect(await page.locator('.col-text.-main').textContent()).toContain(response.orderId);
    

})