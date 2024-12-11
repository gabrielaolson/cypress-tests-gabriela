### Test plan for serverest


## Test Cases

# E2E Tests

  **Scenario 1 End user registration flow  - from Home Page**
  Given user is on Home Page
  When user goes to Register page
  And user fill all required fields
  Then user finish the register successfully
  
  **Scenario 2 Admin user registration flow - from Home Page**
  Given user is on Home Page
  When user goes to Register page
  And user fill all required fields
  And user select admin checkbox
  Then user finish the registration of user successfully

  **Scenario 3 End user registration flow by admin user - Admin Page**
  Given admin user is logged in url
  When admin user goes to Register page from Admin page
  And admin user fill all required fields for the new user
  Then admin user finish the registration of user successfully
  
  **Scenario 4 Admin user registration flow by admin user - Admin Page**
  Given admin user is logged in url
  When admin user goes to Register page from Admin page
  And admin user fill all required fields for the new user
  And admin user select admin checkbox
  Then user finish the registration of user successfully

  **Scenario 5 Delete 2 End users that were created in the tests - Admin Page**
  Given admin user is logged in url
  When admin user open List of users from Admin page
  And admin user search a users by name
  Then admin user delete the users successfully

  **Scenario 6 Flow User Admin registers a product - Admin Page**
  Given admin user is logged in url
  When admin user open Register products from Admin page
  And admin user fill all required fields of the Product
  Then admin user finish the registration of product successfully

  **Scenario 7 Flow to Add product to the list**
  Given user is logged in url
  And user search a Product
  When user open the Product to see details
  Then user add the product to the list successfully



# API tests

  **Scenario 1 Contract Test - GET Products**
  Given user is authenticated
  And the endpoint /produtos exists
  When user sends a GET request to the endpoint
  Then the status code should returns 200  
  And the response schema should match the expected format
  
  **Scenario 2 Contract Test - POST products**
  Given user is authenticated
  And the endpoint /produtos exists
  When user sends a POST request with the required payload to the endpoint
  Then the status code should returns 201 
  And the response schema should match the expected format

  **Scenario 3 DELETE Products**
  Given user is authenticated
  And the endpoint /produtos exists
  And user sends a GET request to the endpoint
  And user search for products whose names contain a specific search term 
  When user sends a DELETE request with ids of the selected products to the endpoint 
  Then the status code should returns 200 

  **Scenario 4 DELETE Users**
  Given user is authenticated
  And the endpoint /usuarios exists
  And user sends a GET request to the endpoint
  And user search for users whose names contain a specific search term 
  When user sends a DELETE request with ids of the selected users to the endpoint 
  Then the status code should returns 200 

  
