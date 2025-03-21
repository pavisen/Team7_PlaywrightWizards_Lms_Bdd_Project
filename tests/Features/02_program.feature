Feature: Program Module Navigation

        Background:
                Given Admin is on the program Page.
        #Program Page Validation
        Scenario: Verify Admin Navigate to program page successfully
                When  Admin Clicks on the program menu from the header
                Then  Admin should be in the "Manage Program" Page for managing program

        Scenario: Validate Title in program Page
                When  Admin Clicks on the program menu from the header
                Then  Admin should see the "LMS - Learning Management System" title in the Program Page

        Scenario: Verify Logout displayed in menu bar
                Then Admin should see Logout option

        Scenario: Verify other page's name displayed in menu bar
                Then Admin should see the page names as in order Home Program Batch Class

        Scenario: Verify sub menu displayed in program menu bar
                Then Admin should see sub menu in menu bar as Add New Program

        Scenario:Verify view details of programs
                Then Admin should able to see Program name, description, and status for each program

        Scenario:Verify the Multiple Delete button stat
                Then Admin should see a Delete button in left top is disabled

        Scenario:Verify the Search button
                Then Admin should see Search bar with text as "Search..."

        Scenario: Verify column header name of data table
                Then Admin should see data table with column header on the Manage Program Page as  Program Name, Program Description, Program Status, Edit/Delete

        Scenario: Verify checkbox default state beside Program Name column header
                Then Admin should see checkbox default state as unchecked beside Program Name column as header

        Scenario: Verify checkboxes default state beside each Program names in the data table
                Then Admin should see check box default state as unchecked on the left side in all rows against program name

        Scenario: Verify Sort icon in manage program
                Then Admin should see the sort arrow icon beside to each column header except Edit and Delete

        Scenario: Verify edit and delete icon in manage program
                Then Admin should see the Edit and Delete buttons on each row of the data table

        Scenario: Verify pagination icons below data table in manage program
                Then Admin should see the text as "Showing x to y of z entries" along with Pagination icon below the table. x- starting record number on that page y-ending record number on that page z-Total number of records

        Scenario: Verify footer message in manage program
                Then Admin should see the footer as In total there are z programs.

        #add program
        Scenario: Verify Admin Add program successfully
                When  Admin Clicks on the Add program button and fill the required fields
                Then Admin should get a message "new program successfully"

        #edit program

        Scenario Outline: Verify Edit option
                When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                Then Admin lands on Program details form
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |

        Scenario Outline: Verify title of the pop up window
                When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                Then Admin should see window title as "Program Details"
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |

        Scenario Outline: Verify mandatory fields with red "*" mark
                When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                Then Admin should see red "*" mark beside mandatory field "Name"

                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |
        Scenario Outline: Verify edit Program Name
                When Admin edits the program name and click on save button from "<KeyOption>" and "<sheetname>"
                Then Updated program name is seen by the Admin
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |


        Scenario Outline: Verify edit Description
                When Admin edits the description text and click on save button from "<KeyOption>" and "<sheetname>"
                Then Admin can see the description is updated
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |

        Scenario Outline: Verify edit Status
                When Admin can change the status of the program from "<KeyOption>" and "<sheetname>" and click on save button
                Then Status updated can be viewed by the Admin
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |


        Scenario Outline: Verify Admin is able to click Save
                When Admin click on save button of the updated program from "<KeyOption>" and "<sheetname>"
                Then Admin can see the updated program details
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |


        Scenario Outline: Verify Admin is able to click Cancel
                When Admin click on cancel button of the updated program from "<KeyOption>" and "<sheetname>"
                Then Admin can see the Program details form disappears
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |

        Scenario Outline: Verify edited Program details
                When Admin searches with newly updated Program Name from "<KeyOption>" and "<sheetname>"
                Then Admin verifies that the details are correctly updated from "<KeyOption>" and "<sheetname>"
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |

        Scenario Outline: Verify close the window with "X"
                When Admin Click on X button of the updated program from "<KeyOption>" and "<sheetname>"
                Then Admin can see Program Details form disappears
                Examples:
                        | KeyOption   | sheetname |
                        | editprogram | Program   |


        #delete program
        
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
        #sort program



        Scenario: Verify sorting of  Program name in Ascending order/Descending order

                When Admin clicks on Arrow next to programName
                Then Admin See the Program Name is sorted in Ascending order/Descending order

        Scenario: Verify sorting of  Program Description in  Ascending order/Descending order

                When Admin clicks on Arrow next to Program Description
                Then Admin See the program Description is sorted in Ascending order/Descending order

        Scenario: Verify sorting of Program status in Ascending order/Descending order

                When Admin clicks on Arrow next to Program status
                Then Admin See the  Program Status is sorted in Ascending order/Descending order




         #program Pagination       

        




Scenario: Verify Admin is able to click Next page link
Given Admin is on Program module
When Admin clicks Next page link on the program table
Then Admin should see the Pagination has "Next" active link

Scenario: Verify Admin is able to click  Last page link
Given Admin is on Program module
When Admin clicks Last page link in program table
Then Admin should see the last page record on the program table with Next page link are disabled

Scenario: Verify Admin is able to click Previous page link
Given Admin is on last page of Program module table
When Admin clicks Previous page link
Then Admin should see the previous page record on the table with pagination has previous page link

Scenario: Verify Admin is able to click  First page link
Given Admin is on Previous Program page
When Admin clicks First page link
Then Admin should see the very first page record on the program table with Previous page link are disabled