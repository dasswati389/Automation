export class DashboardPage{

constructor(page){
this.page = page;
this.items =  page.locator('div.card-body');
this.itemName = page.locator('div.card-body b');

}

async addToCart(productName){

     // add to cart item 
    
    await this.itemName.last().waitFor();
    //added above step to add wait because playwright does not provide auto-wait for allTextContents method
    
    const titles = await this.itemName.allTextContents();
    console.log(titles);
    
    const count =  await this.items.count();
    console.log(count);
     for(let i=0; i< count; ++i){
     //console.log("Inside for loop");
    // console.log(await items.nth(i).locator('b').textContent());
      if(await this.items.nth(i).locator('b').textContent() === productName){
        console.log("Adding product "+productName);
        await this.items.nth(i).locator('button.w-10').click();
        break;
      }

     }
     //await page.pause();

}


}
//module.exports ={DashboardPage};