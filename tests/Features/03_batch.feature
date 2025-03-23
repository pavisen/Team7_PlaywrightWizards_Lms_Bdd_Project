#Anusuya -Batch module
Feature: Batch Module -Batch Page Navigation 
 
 Background: 
      Given Admin is on the home page after Login

  
#Batch Page Navigation
  
  Scenario: Verify Admin Navigate to Batch page successfully
   # Given  Admin is on the home Page
      When  Admin Clicks on the Batch menu from the header
      Then  Admin should be in the " Manage Batch" Page
    
#Batch Page Validation
  
  Scenario: Validate "Title" in Batch Page
   # Given  Admin is on the home Page
      When  Admin Clicks on the Batch menu from the header
      Then  Admin should see the " LMS - Learning Management System " Title in the Batch Page

   Scenario:Validate "heading" in the Batch Page	
   # Given Admin is on the home page	
    When  Admin Clicks on the Batch menu from the header	
    Then  Admin should see the " Manage Batch" Heading

   Scenario: Validate disabled "Delete Icon" under the header in the Batch Page	
   # Given Admin is on the home page	
    When  Admin Clicks on the Batch menu from the header
    Then Admin should see the disabled Delete Icon under the header

   Scenario: Validate pagination in the Batch Page	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the enabled pagination controls under the data table

   Scenario: Validate edit icon in each data rows	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the edit icon in each row

   Scenario: Validate delete icon in each data rows
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the delete icon in each row

    Scenario: Validate checkbox in each data rows	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the checkbox in each row

    Scenario: Validate Datatable headers	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of Classes, Program Name, Edit/Delete

    Scenario:Validate "Checkbox" in the Datatable header row	
   # Given Admin is on the home page	
    When Admin Clicks on the Batch menu from the header	
    Then Admin should see the checkbox  in the datatable header row

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
     Scenario: validate save button in Batch details pop up	
     Given Admin is on the Batch Details Pop Up WIndow	
     When  Admin enters the valid data to all the mandatory fields and click save button
 	   Then Admin should get a "successful" message
     @popup
    Scenario: validate cancel button in Batch details pop up	
      Given Admin is on the Batch Details Pop Up WIndow	
      When  Admin enters the valid data to all the mandatory fields and click cancel button 
	    Then Admin can see the batch details popup closes without creating any batch
     @popup
    Scenario: validate close icon on the batch details pop up	
     Given Admin is on the Batch Details Pop Up WIndow	
     When Admin clicks on the close icon	
     Then batch details pop up closes

          
   #Delete multiple batches with checkbox
      #Background: 
      #Given Admin is on the batch page	
     @Delete
      Scenario: Validate single row delete with checkbox	
     Given Admin is on the batch Page 
      When Admin clicks on the delete icon under the Manage batch header	
      Then The respective row in the table should be deleted
      @Delete
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
     @addBatch
     Scenario: Verify Admin Add Batch successfully
     Given Admin is on the Batch Page 
     When  Admin Clicks on the Add Batch button and fill the required fields
     Then  Admin should create a "new Batch successfully"

     #logout from batchpage
     @logout
     Scenario:  Validate logout option in the header is visible and enabled from the batch page	
     Given Admin is on the batch Page 
     When Admin clicks on the logout button	
     Then Admin should see the Login screen Page title "LMS"																				


   


 
