Feature: Login functionality

  Scenario: Valid login with correct credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully


  Scenario: Validate login with invalid data
    Given I am on the login page
    When Admin enter invalid data and clicks login button 
    Then Error message "Invalid username and password Please try again"

  