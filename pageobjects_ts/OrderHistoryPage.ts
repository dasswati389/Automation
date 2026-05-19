import {Page,Locator} from '@playwright/test';

export class OrderHistoryPage{
    page : Page;
    tableRows : Locator;
constructor(page : Page){
    this.page = page;
    this.tableRows = page.locator('table.table-hover tbody tr');


}

async searchOrder(orderID:any){

         await this.page.pause();
        //search placed order in dynamic order history table and click on view order detail button
         await this.tableRows.last().waitFor();
       
         const rowsCount = await this.tableRows.count();
         for(let i =0; i< rowsCount; ++i){
          if(await this.tableRows.nth(i).locator('th').textContent()===orderID){
          await this.tableRows.nth(i).locator('td button.btn-primary').click();
          break;
          }
        }
}

}
module.exports ={OrderHistoryPage};