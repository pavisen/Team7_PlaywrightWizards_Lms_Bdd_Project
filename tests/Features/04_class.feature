Feature: Class Page Validation

Background: 
Given Admin is on the home page after login

Scenario: Validating the class manage page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the " LMS - Learning Management System " Title

Scenario: Validating the Header in the Manage class page
When Admin clicks the Class Navigation bar in the Header
Then Admin should see the " Manage Class" Header
