Feature: Program Module Navigation

Background:
    Given Admin is on the program Page
    
Scenario: Verify Admin Navigate to program page successfully

    When  Admin Clicks on the program menu from the header
    Then  Admin should be in the "Manage Program" Page for managing program 

Scenario: Validate Title in program Page

    When  Admin Clicks on the program menu from the header
    Then  Admin should see the "LMS - Learning Management System" title in the Program Page

Scenario: Verify Admin Add program successfully
    When  Admin Clicks on the Add program button and fill the required fields
    Then Admin should get a message "new program successfully"
