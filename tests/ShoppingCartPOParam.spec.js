import {test, expect} from '@playwright/test';
const {POManager} = require('../pageobjects/POManager');
const dataset = JSON.parse(JSON.stringify(require("../Utils/ShoppingCartPOParamTestData.json")));
const {customtest} = require('../Utils/test-base');

//test.describe.configure({mode:'parallel'});
test.describe.configure({mode:'serial'});
for(const data of dataset)
test(`Application login for ${data.productName}.`, async({page})=>{
  
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    
    await loginPage.goTo();
    await loginPage.validLogin(data.username,data.password);
    await dashboardPage.addToCart(data.productName);
    

})

customtest(`@test Application login using fixture`, async({page,testDataForOrder})=>{
  
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();
    
    await loginPage.goTo();
    await loginPage.validLogin(testDataForOrder.username,testDataForOrder.password);
    await dashboardPage.addToCart(testDataForOrder.productName);
    

})