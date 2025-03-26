Feature: Logout functionality

Background:
Given Admin is logged into the application	

#delete program

        Scenario: Verify delete feature
                Given Admin is on Program module
                When Admin clicks on delete button for a program
                Then Admin will get confirm deletion popup


        Scenario: Verify Admin is able to click 'Yes'
                Given Admin is on Confirm deletion form
                When Admin clicks on "Yes" button
                Then Admin can see 'Successful Program Deleted' message



        Scenario: Verify Admin is able to click 'No'
                Given Admin is on Program Confirm Deletion Page after selecting a program to delete
                When Admin clicks on No button
                Then Admin can see Confirmation form disappears


        Scenario: Verify Admin is able to close the window with "X"
                Given Admin is on Program Confirm Deletion Page after selecting a program to delete
                When Admin Click on X button
                Then Admin can see Confirm Deletion form disappear
       
        #Delete multiple program with checkbox
       
        @Deletion
        Scenario: Validate single row delete with checkbox
                Given Admin is on the program page for delete
                When Admin clicks on the delete icon under the Manage program header
                Then The respective row in the program table should be deleted
        @Deletion
        Scenario: Validate multiple row delete with checkbox
                Given  Admin is on the program page for delete
                When  Admin clicks on the delete icon under the Manage program header for multiple rows
                Then  The respective multiple rows in the program table should be deleted



Scenario: Verify logout function	
Given Admin is in home page	
When Admin clicks on the logout in the menu bar	
Then Admin should be redirected to login page

Scenario: Verify back button function 	--fail case
Given Admin is logged out of the application
When  Admin is in login page and clicks browser back button	
Then  Admin should receive error message