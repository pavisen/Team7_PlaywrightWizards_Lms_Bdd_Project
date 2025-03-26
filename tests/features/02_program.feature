Feature: Program Module Navigation

        Background:
                Given Admin is on the program Page.
        #Program Page Validation
        @smoke
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


        Scenario: Verify checkbox default state beside Program Name column header

                Then Admin should see checkbox default state as unchecked beside Program Name column as header

        Scenario: Verify checkboxes default state beside each Program names in the data table
                Then Admin should see check box default state as unchecked on the left side in all rows against program name

        Scenario: Verify Sort icon in manage program
                Then Admin should see the sort arrow icon beside to each column header except Edit and Delete

        Scenario: Verify edit and delete icon in manage program
                Then Admin should see the Edit and Delete buttons on each row of the data table

        Scenario: Verify pagination icons below data table in manage program
                Then Admin should see the text as "Showing \d+ to \d+ of \d+ entries" in program

        Scenario: Verify footer message in manage program
                Then Admin should see the footer as In total there are z programs.


        #add program  Validation
        Scenario: 1. Verify add New Program
                Given Admin is on Program module
                When Admin clicks on New Program under the Program menu bar
                Then Admin should see pop up window for program details

        Scenario:Verify title of the pop up window
                Given Admin is on Program module
                When Admin clicks on New Program under the Program menu bar
                Then Admin should see window title as Program Details

        Scenario:Verify mandatory fields with red "*" mark
                Given Admin is on Program module
                When Admin clicks on New Program under the Program menu bar
                Then Admin should see red "*" mark beside mandatory field "Name" in program details form


        Scenario:Verify empty form submission
                Given Admin is on Program details form
                When Admin clicks save button without entering mandatory
                Then Admin gets message field is required


        Scenario:Verify cancel button
                Given Admin is on Program details form
                When Admin clicks Cancel button
                Then Admin can see Program Details form disappears

        Scenario:Verify cancel program details
                Given Admin is on Program details form
                When Admin clicks Cancel button
                Then Admin can see Program Details form disappears.

        Scenario: Verify close window with "X"
                Given Admin is on Program details form
                When Admin Click on X button.
                Then Admin can see Program Details form disappears

        #add program
        Scenario: Verify Admin Add program successfully
                When  Admin Clicks on the Add program button and fill the required fields

                Then Admin should get a message "new program successfully"
        Scenario: Verify Admin add program name with numbers
                When Admin enters the program name with numbers
                Then Admin should get a message programName Must contain only letters and sometimes hyphens

        Scenario: Verify Admin add program name with special characters
                When Admin enters the program name with special characters
                Then Admin should get a message This field should start with an alphabet, no special char and min 2 char

        Scenario:Verify Admin add program name with minimum 2 characters
                When Admin enters the program name with minimum 2 characters
                Then Admin should get a message programName created successfully

        Scenario: Verify Admin add program name with missing description
                When Admin enters the program name with missing description
                Then Admin should get a message description is required
         @smoke @doing
         Scenario: Verify Admin Add program fpr Batch Chaining
                When  Admin Clicks on the Add program button and fill the required fields for chaining

                Then Admin should get a message "new program successfully"
        #verify program details
        Scenario: Verify Admin is able to view the program details

                Then Admin should see the program details entered



        


        Scenario: Verify sorting of  Program name in Ascending order/Descending order

                When Admin clicks on Arrow next to programName
                Then Admin See the Program Name is sorted in Ascending order or Descending order

        Scenario: Verify sorting of  Program Description in  Ascending order/Descending order

                When Admin clicks on Arrow next to Program Description
                Then Admin See the program Description is sorted in Ascending order or Descending order

        Scenario: Verify sorting of Program status in Ascending order/Descending order

                When Admin clicks on Arrow next to Program status
                Then Admin See the  Program Status is sorted in Ascending order or Descending order

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
                Given Admin is on the Last page in program table
                When Admin clicks First page link
                Then Admin should see the very first page record on the program table with Previous page link are disabled


        #programSearch
        @smoke
        Scenario: 2. Validate search box functionality
                Given Admin is on the program page
                When Admin enters the program name in the search text box
                Then Admin should see the filtered programs in the data table


        #edit program

        Scenario: 3. Verify Edit option
                Given Admin is on Program module for editing

                When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                Then Admin lands on Program details form

        Scenario: Verify title of the pop up window for Edit
                When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                Then Admin should see window title as "Program Details"

        Scenario: Verify mandatory fields with red "*" mark for Edit
                When Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                Then Admin should see red "*" mark beside mandatory field "Name"


        Scenario: Verify edit Program Name
                When Admin enters the program name in the search text box
                And Admin clicks on Edit option for particular program from "<KeyOption>" and "<sheetname>"
                And Admin edits the program name and click on save button from "<KeyOption>" and "<sheetname>"
                Then Updated program name is seen by the Admin


        Scenario: Verify edit Description
                When Admin enters the program name in the search text box
                And Admin edits the description text and click on save button from "<KeyOption>" and "<sheetname>"
                Then Admin can see the description is updated

        Scenario: Verify edit Status
                When Admin enters the program name in the search text box
                And Admin can change the status of the program from "<KeyOption>" and "<sheetname>" and click on save button
                Then Status updated can be viewed by the Admin
 
        Scenario: Verify Admin is able to click Cancel
                When Admin enters the program name in the search text box
                And Admin click on cancel button of the updated program from "<KeyOption>" and "<sheetname>"
                Then Admin can see the Program details form disappears

        Scenario: Verify close the window with "X"
                When Admin enters the program name in the search text box
                And  Admin Click on X button of the updated program from "<KeyOption>" and "<sheetname>"
                Then Admin can see Program Details form disappears


                 Scenario: Verify delete feature
                Given Admin is on Program module
                When Admin clicks on delete button for a program
                Then Admin will get confirm deletion popup


        Scenario: Verify Admin is able to click 'No'
                Given Admin is on Program Confirm Deletion Page after selecting a program to delete
                When Admin clicks on No button
                Then Admin can see Confirmation form disappears


        Scenario: Verify Admin is able to close the window with "X"
                Given Admin is on Program Confirm Deletion Page after selecting a program to delete
                When Admin Click on X button
                Then Admin can see Confirm Deletion form disappear

