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