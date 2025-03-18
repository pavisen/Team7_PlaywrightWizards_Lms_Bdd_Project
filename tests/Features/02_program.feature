Feature: Navigation

    Background:
          Given I am on the login page
        #   When I enter valid credentials
        #   Then I should be logged in successfully
  
    Scenario: Verify that Admin is able to navigate to Program page
        Given Admin is on home page page after Login
        When Admin clicks Program on the navigation bar
        Then Admin should be navigated to Program Page
    @MenuBar
    Scenario: Verify Logout displayed in menu bar
        Given Admin is on home page page after Login
        When Admin clicks program on the menu bar
        Then Admin should see Logout option

    Scenario:Verify heading in menu bar
        Given Admin is on home page page after Login
        When Admin clicks Program on the navigation bar
        Then Admin should see the heading LMS - Learning Management System

    Scenario: Verify other page's name displayed in menu bar
        Given Admin is on home page page after Login
        When Admin clicks Program on the navigation bar
        Then Admin should see the page names as in order Home Program Batch Class 

    Scenario: Verify sub menu displayed in program menu bar
        Given Admin is on home page page after Login
        When Admin clicks Program on the navigation bar
        Then Admin should see sub menu in menu bar as Add New Program
     
     @ManageProgramPageValidation
    Scenario: Verify heading in manage program
        Given Admin is on home page page after Login
        When Admin clicks Program on the navigation bar
        Then Admin should see the heading Manage Program
@addNewProgram
  Scenario: Verify Admin Add program successfully
   Given Admin is on the program Page 
   When  Admin Clicks on the Add program button and fill the required fields
   Then Admin should create a "new program successfully"

   Feature: Manage Program - Delete Program

Background: Admin is on program module after reaching dashboard
Given Admin is logged in to LMS Portal
When Admin clicks on program in dashboard and admin lands on Manage program Page


Scenario: Verify delete feature
Given Admin is on Program module
When Admin clicks on delete button for a program
Then Admin will get confirm deletion popup


Scenario: Verify Admin is able to click 'Yes'
Given Admin is on Confirm deletion form
When Admin clicks on "Yes" button
Then Admin can see 'Successful Program Deleted' message


Scenario: Verify Admin is able to deleted program
Given Admin is on Program module
When Admin Searches for "Deleted Program name"
Then There should be zero results.


Scenario: Verify Admin is able to click 'No'
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin clicks on No button
Then Admin can see Confirmation form disappears


Scenario: Verify Admin is able to close the window with "X" 
Given Admin is on Program Confirm Deletion Page after selecting a program to delete
When Admin Click on X button
Then Admin can see Confirm Deletion form disappear


Feature: Manage Program - Edit Program

Background: Admin is on program module after reaching dashboard
Given Admin is logged in to LMS Portal
When Admin clicks Program on the navigation bar

 
Scenario Outline: Verify Edit option
When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
Then Admin lands on Program details form
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify title of the pop up window
When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
Then Admin should see window title as "Program Details"
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify mandatory fields with red "*" mark 
When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
Then Admin should see red "*" mark beside mandatory field "Name"

Examples:
| KeyOption       | sheetname |
| editprogram | Program   |
Scenario Outline: Verify edit Program Name
When Admin edits the program name and click on save button from "<KeyOption>" and "<sheetname>"
Then Updated program name is seen by the Admin
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

 
Scenario Outline: Verify edit Description
When Admin edits the description text and click on save button from "<KeyOption>" and "<sheetname>"
Then Admin can see the description is updated
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify edit Status
When Admin can change the status of the program from "<KeyOption>" and "<sheetname>" and click on save button
Then Status updated can be viewed by the Admin
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |


Scenario Outline: Verify Admin is able to click Save
When Admin click on save button of the updated program from "<KeyOption>" and "<sheetname>" 
Then Admin can see the updated program details
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |


Scenario Outline: Verify Admin is able to click Cancel
When Admin click on cancel button of the updated program from "<KeyOption>" and "<sheetname>" 
Then Admin can see the Program details form disappears
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |

Scenario Outline: Verify edited Program details
When Admin searches with newly updated Program Name from "<KeyOption>" and "<sheetname>" 
Then Admin verifies that the details are correctly updated from "<KeyOption>" and "<sheetname>"  
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |
 
Scenario Outline: Verify close the window with "X" 
When Admin Click on X button of the updated program from "<KeyOption>" and "<sheetname>" 
Then Admin can see Program Details form disappears
Examples:
| KeyOption       | sheetname |
| editprogram | Program   |




          
             
        
         