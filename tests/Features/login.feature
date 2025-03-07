Feature: Login functionality

  @smoke
  Scenario: Valid login with correct credentials
    Given I am on the login page
    When I enter valid credentials
    Then I should be logged in successfully
