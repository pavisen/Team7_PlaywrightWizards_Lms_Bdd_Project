Feature: Login functionality


#Mathumathi
  Scenario: Validate login with valid data in all field
    Given Admin is on login Page
    When Admin enter valid data in all field and clicks login button 
    Then Admin should land on home page 

  Scenario: Validate login with invalid data
    Given Admin is on login Page
    When Admin enter invalid data and clicks login button 
    Then Error message "Invalid username and password Please try again"

  Scenario: Validate login credentials with null user name
    Given Admin is on login Page
    When Admin enter value only in password and clicks login button 
    Then Error message "Please enter your user name" for null user name

  Scenario: Validate login credentials with null password
    Given Admin is on login Page
    When Admin enter value only in user name and clicks login button 
    Then Error message "Please enter your password" for null password

  Scenario: verify login button action through keyboard
    Given Admin is on login Page
    When Admin enter valid credentials  and clicks login button through keyboard
    Then Admin should land on home page
  
  Scenario: verify login button action through mouse
    Given Admin is on login Page
    When Admin enter valid credentials  and clicks login button through mouse
    Then Admin should land on home page
  
  #Anu
  #  Scenario: verify dropdown is present
  #   Given The browser is open
  #   When Admin gives the correct LMS portal URL
  #   Then Admin should see one dropdown

   
   Scenario: verify asterisk next to USER text
   Given The browser is open
   When  Admin gives the correct LMS portal URL
   Then Admin should see asterisk mark symbol next to text for mandatory fields


   Scenario: Verify text on the second field		
   Given The browser is open	
   When Admin gives the correct LMS portal URL	
   Then Admin should "Password" in the second text field

   Scenario: verify asterisk mark symbol next to password text
   Given The browser is open	
   When Admin gives the correct LMS portal URL	
   Then Admin should see asterisk mark symbol next to password text
  
   Scenario:Verify the alignment input field for the login		
   Given The browser is open	
   When Admin gives the correct LMS portal URL	
   Then Admin should see input field on the centre of the page

   Scenario:verify Login button is present		
   Given The browser is open	
   When Admin gives the correct LMS portal URL
   Then Admin should see login button 
   
   Scenario: Verify input descriptive text in user field	
   	Given The browser is open	
    When Admin gives the correct LMS portal URL
    Then Admin should see user in gray color
   
   Scenario: Verify input descriptive text in password field	
   	Given The browser is open	
    When Admin gives the correct LMS portal URL	
    Then Admin should see password in gray color
