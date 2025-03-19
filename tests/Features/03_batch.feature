Feature: Batch Module -Batch Page Navigation 
 
 Background: 
      Given Admin is on the home Page
  

  Scenario: Verify Admin Navigate to Batch page successfully
   # Given  Admin is on the home Page
      When  Admin Clicks on the Batch menu from the header
      Then  Admin should be in the " Manage Batch" Page

  Scenario: Validate "Title" in Batch Page
   # Given  Admin is on the home Page
      When  Admin Clicks on the Batch menu from the header
      Then  Admin should see the " LMS - Learning Management System " Title in the Batch Page

  Scenario: Verify Admin Add Batch successfully
   #Given Admin is on the Batch Page 
   When  Admin Clicks on the Add Batch button and fill the required fields
   Then  Admin should create a "new Batch successfully"


 
