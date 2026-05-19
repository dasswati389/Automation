const base = require('@playwright/test');

exports.customtest = base.test.extend({
testDataForOrder : {
    username : "bzbztest@gmail.com",
    password : "Test@123",
    productName : "iphone 13 pro"

}


})
