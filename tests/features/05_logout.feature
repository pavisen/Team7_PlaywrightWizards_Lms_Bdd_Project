Feature: Logout functionality

Background:
Given Admin is logged into the application	

Scenario: Verify logout function	
Given Admin is in home page	
When Admin clicks on the logout in the menu bar	
Then Admin should be redirected to login page

Scenario: Verify back button function 	--fail case
Given Admin is logged out of the application
When  Admin is in login page and clicks browser back button	
Then  Admin should receive error message

    #Batch Deletion scenarios
    #Delete batch validation
     @DeleteBatch
     Scenario: validate delete Icon on any row	
     Given Admin is on the Batch page
     When 	Admin clicks the delete Icon on any row	
     Then  Admin should see the confirm alert box with yes and no button
     @DeleteBatch
     Scenario: Validate yes button on the confirm alert box	
     Given Admin is on the batch confirm popup page	
     When Admin clicks on the delete icon and click yes button	
     Then Admin should see the successful message and the batch should be deleted
     @DeleteBatch
     Scenario: validate no button on the confirm alert box	
     Given Admin is on the batch confirm popup page	
     When Admin clicks on the delete icon and click no button	
     Then Admin should see the alert box closed and the batch is not deleted
     @DeleteBatch
     Scenario: validate close Icon on the alert box	
     Given Admin is on the batch confirm popup page	
     When Admin clicks on the close icon on delete	
     Then Admin should see the alert box closed 
          
   #Delete multiple batches with checkbox
      #Background: 
      #Given Admin is on the batch page	
      @Deletion
      Scenario: Validate single row delete with checkbox	
     Given Admin is on the batch Page 
      When Admin clicks on the delete icon under the Manage batch header	
      Then The respective row in the table should be deleted
      @Deletion
      Scenario: Validate multiple row delete with checkbox
       Given Admin is on the batch Page 
       When  Admin clicks on the delete icon under the Manage batch header for multiple rows
       Then  The respective multiple rows in the table should be deleted
    