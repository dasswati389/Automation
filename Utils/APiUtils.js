class APiUtils{

constructor(apiContext, LoginPayLoad){
    this.apiContext = apiContext;
 this.LoginPayLoad =LoginPayLoad;

}

async getToken(){
    const loginResponse = await
    this.apiContext.post("https://rahulshettyacademy.com/api/ecom/auth/login",
        {data: this.LoginPayLoad}
    );
   
    const loginResponseJson = await loginResponse.json();
    const token = loginResponseJson.token;
    console.log(token);
    return token;

}

async createOrder(OrderPayLoad){
   
    let response = {};
    response.token = await this.getToken();

    const orderResponse = await
    this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {data:OrderPayLoad,
        headers: {
              'Authorization' : response.token,
              'Content-Type': 'application/json'

        }
});
 const orderResponseJson = await orderResponse.json();
 console.log(orderResponseJson);
 const orderId = orderResponseJson.orders[0];
 response.orderId = orderId;

 return response;

}
}
module.exports= {APiUtils};