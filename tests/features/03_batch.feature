#Anusuya -Batch module
Feature: Batch Module -Batch Page Navigation 
 
 Background: 
      Given Admin is on the home page after Login

  
#Batch Page Navigation
  @BatchPageNavigation
  Scenario: Verify Admin Navigate to Batch page successfully
   # Given  Admin is on the home Page
      When  Admin Clicks on the Batch menu from the header
      Then  Admin should be in the " Manage Batch" Page
    
#Batch Page Validation
  @BatchPageValidation
  Scenario: Validate "Title" in Batch Page
   # Given  Admin is on the home Page
      When  Admin Clicks on the Batch menu from the header
      Then  Admin should see the " LMS - Learning Management System " Title in the Batch Page
   @BatchPageValidation
   Scenario:Validate "heading" in the Batch Page	
   # Given Admin is on the home page	
    When  Admin Clicks on the Batch menu from the header	
    Then  Admin should see the " Manage Batch" Heading
   @BatchPageValidation
   Scenario: Validate disabled "Delete Icon" under the header in the Batch Page	
   # Given Admin is on the home page	
    When  Admin Clicks on the Batch menu from the header
    Then Admin should see the disabled Delete Icon under the header
   @BatchPageValidation
   Scenario: Validate pagination in the Batch Page	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the enabled pagination controls under the data table
   @BatchPageValidation
   Scenario: Validate edit icon in each data rows	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the edit icon in each row
   @BatchPageValidation
   Scenario: Validate delete icon in each data rows
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the delete icon in each row
  @BatchPageValidation
    Scenario: Validate checkbox in each data rows	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the checkbox in each row
  @BatchPageValidation
    Scenario: Validate Datatable headers	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the datatable headers in Batch

     @BatchPageValidation
    Scenario:Validate "Checkbox" in the Datatable header row	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the checkbox  in the datatable header row
  @BatchPageValidation
    Scenario: Validate "sort icon" next to all the datatable header	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the sort icon next to all Datatable headers
   
   # Add New Batch details pop up 
      @popup
     Scenario: Validate all the fields exist in pop up 	
     Given Admin is on the Batch Details Pop Up WIndow
	   When Admin checks all the fields are enabled
   	 Then The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as dropdown Status as radio button
      @popup
     Scenario:Validate batchname prefix selected program name	
     Given Admin is on the Batch Details Pop Up WIndow	
     When Admin selects program name present in the dropdown	
     Then Admin should see selected program name in the batch name prefix box
      @popup
     Scenario: Validate batch name suffix box should accept only numbers	--FAIL CASE
     Given Admin is on the Batch Details Pop Up WIndow
     When 	Admin enters alphabets in batch name suffix box	
     Then  Admin should get error message below the text box of respective field
     @popup
     Scenario: Validate batch name prefix box is not editable	
     Given Admin is on the Batch Details Pop Up WIndow
     When Admin enters alphabets in batch name prefix box
     Then Admin should see empty text box
     @popup
     Scenario: validate input data missing for mandatory fields
	   Given Admin is on the Batch Details Pop Up WIndow	
     When Admin leaves blank one of the mandatory fields
  	 Then Admin should get a error message on the respective mandatory field
     @popup
     Scenario: validate save button in Batch details pop up	in AddNewBatch Popup
     Given Admin is on the Batch Details Pop Up WIndow	
     When  Admin enters the valid data and click save button 
 	   Then Admin should get a "successful" message
     @popup
    Scenario: validate cancel button in Batch details pop up in AddNewBatch Popup
      Given Admin is on the Batch Details Pop Up WIndow	
      When  Admin enters the valid data and click cancel button 
	    Then Admin can see the batch details popup closes without creating any batch
     @popup
    Scenario: validate close icon on the batch details pop up	
     Given Admin is on the Batch Details Pop Up WIndow	
     When Admin clicks on the close icon	
     Then batch details pop up closes


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
    
    #Pagination	
     #Background:
     #Given Admin is on the batch page	
      @pagination
      Scenario: Validate next page link	
      Given Admin is on the batch Page 
      When Admin clicks next page link on the data table
      Then  Admin should see the Next enabled link
      @pagination
		Scenario: validate last page link	
      Given Admin is on the batch Page 
      When Admin clicks last page link on the data table	
      Then Admin should see the last page link with next page link disabled on the table 
	   @pagination
      Scenario: validate the previous page link	
      Given Admin is on the batch Page 
      When Admin clicks previous page link on the data table	
      Then  Admin should see the previous page on the table
      @pagination
		Scenario: validate the first page link
      Given Admin is on the batch Page 
      When Admin clicks first page link on the data table	
      Then Admin should see the very first page on the data table

     #Add New Batch DDT
     @shock
     Scenario: Verify Admin Add Batch successfully
     Given Admin is on the Batch Page 
     When  Admin Clicks on the Add Batch button and fill the required fields
     Then  Admin should create a "new Batch successfully"

     #BatchSearch
     @shock
     Scenario: Validate search box functionality	
     Given Admin is on the batch page
     When Admin enters the batch name in the search text box
     Then Admin should see the filtered batches in the data table			

     #Edit Batch
     @BatchEdit
     Scenario: Validate Edit icon feature in any row in Batch Page	
     Given Admin is on the Batch page	
     When  Admin clicks the edit icon	in Batch Page
     Then Admin should see the Batch details pop up window
     @BatchEdit
     Scenario: Validate program name value is disabled to edit in Batch Page	
     Given Admin is on the Batch page	
     When  Admin clicks the edit icon for program name
     Then Admin should see Program name value field is disabled for editing
     #@BatchEditbb-----Madhu doubt
     Scenario: Validate batch name  value is disabled to edit in Batch Page	
	   Given  Admin is on the Batch page	
     When   Admin clicks the edit icon for batch name
     Then  Admin should see batch name value field is disabled for editing
     @BatchEdit
     Scenario: Validate editing description and No. of classes fields with invalid data in the pop up	in Batch Page	--fail
     Given  Admin is on the Batch Details Page
     When 	Admin Updates any fields with invalid data and click save button	
     Then   Admin should get a error message under the respective field
     @BatchEdit
     Scenario: validate save button in Batch details pop up in Batch Page	
     Given 	Admin is on the Batch Details Page	
     When  Admin enters the valid data in edit Batch pop up and click save button 
     Then  Admin should get a "successful message" for editing the batch
     @BatchEdit
     Scenario: validate cancel button in Batch details pop up	in Batch Page	
     Given Admin is on the Batch Details Page
     When Admin edits the valid data in edit Batch pop up and click cancel button 
     Then Admin can see the batch details popup closes without editing the batch

     #logout from batchpage
     @logoutfromBatch
     Scenario:  Validate logout option in the header is visible and enabled from the batch page	
     Given Admin is on the batch Page 
     When Admin clicks on the logout button	
     Then Admin should see the Login screen Page title "LMS"				

     #Sort Batch details
     @Sorting
     Scenario Outline: Sort Batch by fields
     Given Admin is on the home page after Login
     When  Admin is on the batch page
     Then Admin should see Batch details are sorted by "<columns>"
      Examples:
      | columns         |
      | Batch Name      |
      | Batch Description |
      | Batch Status    |
      | No Of Classes   |
      | Program Name    |															
																									
																																									

  
   


 
