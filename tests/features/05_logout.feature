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

#Class Module
Scenario: Click Yes on deletion window
Given Admin is on Confirm Deletion alert
When Admin clicks yes option
Then Admin gets a message "Successful Class Deleted" alert and do not see that Class in the data table

Scenario: Validate multiple class deletion by selecting Single checkbox and Yes Button
Given Admin is in Manage Class page
When Admin clicks single checkbox in the data table and Admin clicks <YES> button on the alert
Then Admin should land on Manage class page and can see the selected class is deleted from the data table

Scenario: Validate multiple class deletion by selecting multiple check boxes with YES button
Given Admin is in Manage Class page
When Admin clicks any checkbox in the data table and Admin clicks <YES> button on the alert for multiple
Then Admin should land on Manage class page and can see the selected class are deleted from the data table

