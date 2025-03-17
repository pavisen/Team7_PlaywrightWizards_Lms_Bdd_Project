Feature: Batch Module -Batch Page Navigation 
 


  Scenario: Verify Admin Navigate to Batch page successfully
    Given Admin is on the home Page
    When  Admin Clicks on the Batch menu from the header
    Then  Admin should be in the Manage Batch Page

  @smoke
  Scenario Outline: Verify Admin Add Batch successfully
    Given Admin is on the Batch Page  
    When   Admin Clicks on the Add Batch button and fill the required fields as "<ProgramName>", "<batchName>" ,"<description>" ,"<noOfClasses>"
    Then  Admin should create a new Batch successfully 

 
  Examples:
      | ProgramName           | batchName | description | noOfClasses |
      | PlaywrightPartners    | 121       | desc1       | 11          |
      | PlaywrightPartners    | 2209      | desc2       | 22          |
      | PlaywrightPartners    | 1709      | desc3       | 32          |
     