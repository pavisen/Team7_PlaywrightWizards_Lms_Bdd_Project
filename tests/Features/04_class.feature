#Mathumathi - Class Module
@class
Feature: Class Page Validation

Background: 
Given Admin is on the home page after login

#Class Page Validation
Scenario: Validating the class manage page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the " LMS - Learning Management System " Title

Scenario: Validating the Header in the Manage class page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the " Manage Class" Header

Scenario: Validating Search bar in class page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the Search Bar in Manage class page

Scenario: Validating the data table headers in the class page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the datatable headings

Scenario: Validating the text and pagination icon in the classpage
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the " showing x to y of  z entries" and enabled pagination controls under the data table

Scenario: Validate the sort icon of all the field in datatable
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the Sort icon of all the field in the datatable.

Scenario: Validating the Delete button under the Manage class 
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the Delete button under the Manage class page header.

Scenario: Validate the total no of classes in manage class page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see Total no of classes in below of the data table.

#Class Details Popup Validation
Scenario: Validate Class Details Popup window
Given Admin is on the Manage class page
When Admin clicks a add new class under the class menu bar
Then Admin should see a popup open for class details with empty form along with save and cancel button and Close Icon on the top right corner of the window

Scenario: Validate input fields and their text boxes in Class details form 
Given Admin is on the Manage class page
When Admin clicks a add new class under the class menu bar
Then Admin should see few input fields and their respective text boxes in the class details window

#Add New Class 
@smoke
Scenario: Check if class is created when all fields are entered with valid data
Given Admin is on the Class Popup window
When Admin enters all fields in the form and clicks on save button
Then Admin gets message Class added Successfully 

@smoke
Scenario: Check if class is created when only mandatory fields are entered with valid data
Given Admin is on the Class Popup window
When Admin enters mandatory fields in the form and clicks on save button
Then Admin gets message Class added Successfully 

Scenario: Check no classes value added when selecting class dates
Given Admin is on the Class Popup window
When Admin selects class date in date picker
Then Admin should see no of class value is added automatically

Scenario: Check weekend dates are disabled in calendar
Given Admin is on the Class Popup window
When Admin clicks date picker
Then Admin should see weekends dates are disabled to select

Scenario: Check if class is created when only optional fields are entered with valid data
Given Admin is on the Class Popup window
When Admin skips to add value in mandatory field and enter only the optional field
Then Admin should see error message below the test field and the field will be highlighted in red color

Scenario: check if class is created when invalid data is entered in all of the fields
Given Admin is on the Class Popup window
When Admin enters invalid data in all of the  fields in the form and clicks on save button
Then Admin gets error message and class is not created

Scenario: Empty form submission
Given Admin is on the Class Popup window
When Admin clicks on save button without entering data 
Then class won't be created and Admin gets error message

Scenario: Validate Cancel icon on class Details form
Given Admin is on the Class Popup window
When Admin clicks Cancel button on Admin Details form
Then Class Details popup window should be closed without saving

Scenario: Validate Close(X) icon on class Details form
Given Admin is on the Class Popup window
When Admin clicks Close Icon on Admin Details form
Then Class Details popup window should be closed without saving

#Edit New class
Scenario: Validate row level edit icon
Given Admin is on the Manage Class page
When Admin clicks on the edit icon 
Then A new pop up with class details appears

Scenario: Check disabled  batch name
Given Admin is on the Manage Class page
When Admin clicks on the edit icon 
Then Admin should see batch name field is disabled

Scenario: Check disabled class topic
Given Admin is on the Manage Class page
When Admin clicks on the edit icon 
Then Admin should see class topic field is disabled

Scenario: Check if the fields are updated with valid data
Given Admin is on the Edit Class Popup window
When Update the fields with valid data and click save
Then Admin gets message "class details updated Successfully " and see the updated values in data table

Scenario: Check if the fields are updated with invalid values
Given Admin is on the Edit Class Popup window
When Update the fields with invalid values and click save
Then Admin should get Error message 

Scenario: Check if the mandatory fields are updated with valid data
Given Admin is on the Edit Class Popup window
When Update the mandatory fields with valid values and click save
Then Admin gets message "Class details updated Successfully " and see the updated values in data table

Scenario: Check if the optional fields are updated with valid data
Given Admin is on the Edit  Class Popup window
When Update the optional fields with valid values and click save
Then Admin gets message "Class details updated Successfully " and see the updated values in data table

Scenario: Validate invalid values in the text fields
Given Admin is on the Edit Class Popup window
When Admin enters only numbers or special char in the text fields
Then Admin should get Error message 

Scenario: Validate Cancel button on Edit popup
Given Admin is on the Edit Class Popup window
When Admin clicks Cancel button on edit popup
Then Admin can see the class details popup disappears and can see nothing changed for particular Class


#Pagination - Class Page
Scenario: Verify Next page link(>)
Given Admin is on Manage class page
When Admin clicks Next page link on the class table 
Then Admin should see the next page record on the table  with Pagination has next active link enabled

Scenario: Verify Last page link(>>)
Given Admin is on Manage class page 
When Admin clicks Last page link
Then Admin should see the last page record on the table with Next page link are disabled

Scenario: Verify previous page link(<)
Given Admin is on next page of class table
When Admin clicks previous page link
Then Admin should see the previous page record on the table with pagination has previous page link enabled

Scenario: Verify Start page link(<<)
Given Admin is on last class page 
When Admin clicks first page link
Then Admin should see the very first page record on the table with Previous page link are disabled


