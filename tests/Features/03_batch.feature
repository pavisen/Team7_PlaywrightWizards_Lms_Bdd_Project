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

          
   #Delete multiple batches with checkbox

     Scenario:
    	
      #Background: 
      #Given Admin is on the batch page	
     @Delete
      Scenario: Validate single row delete with checkbox	
     Given Admin is on the batch Page 
      When Admin clicks on the delete icon under the Manage batch header	
      Then The respective row in the table should be deleted
		  @Delete1
      Scenario: Validate multiple row delete with checkbox
     Given Admin is on the batch Page 
       When  Admin clicks on the delete icon under the Manage batch header	
       Then  The respective row in the table should be deleted
    
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
     Scenario: Verify Admin Add Batch successfully
     Given Admin is on the Batch Page 
     When  Admin Clicks on the Add Batch button and fill the required fields
     Then  Admin should create a "new Batch successfully"



 
