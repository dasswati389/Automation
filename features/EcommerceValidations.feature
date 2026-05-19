Feature: Ecommerce Validations

Scenario: Ecommerce website end to end flow validation
Given Login page of ecommerce website with credentials "bzbztest@gmail.com" and "'Test@123'" 
When Add "iphone 13 pro" to cart
Then Verify "iphone 13 pro" is present on cart page
When Enter card details, verify "bzbztest@gmail.com" and checkout
Then Verify order on Order History page
Then Verify order Id, "bzbztest@gmail.com" and "iphone 13 pro" on Order Details page
