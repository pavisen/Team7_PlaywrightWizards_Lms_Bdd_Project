// Generated from: tests/features/01_login.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Login functionality', () => {

  test('Validate login with valid data in all field', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter valid data in all field and clicks login button', null, { loginPage }); 
    await Then('Admin should land on home page', null, { loginPage }); 
  });

  test('Validate login with invalid data', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter invalid data and clicks login button', null, { loginPage }); 
    await Then('Error message "Invalid username and password Please try again"', null, { loginPage }); 
  });

  test('Validate login credentials with null user name', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter value only in password and clicks login button', null, { loginPage }); 
    await Then('Error message "Please enter your user name" for null user name', null, { loginPage }); 
  });

  test('Validate login credentials with null password', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter value only in user name and clicks login button', null, { loginPage }); 
    await Then('Error message "Please enter your password" for null password', null, { loginPage }); 
  });

  test('verify login button action through keyboard', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter valid credentials  and clicks login button through keyboard', null, { loginPage }); 
    await Then('Admin should land on home page', null, { loginPage }); 
  });

  test('verify login button action through mouse', async ({ Given, loginPage, When, Then }) => { 
    await Given('Admin is on login Page', null, { loginPage }); 
    await When('Admin enter valid credentials  and clicks login button through mouse', null, { loginPage }); 
    await Then('Admin should land on home page', null, { loginPage }); 
  });

  test('verify asterisk next to USER text', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should see asterisk mark symbol next to text for mandatory fields', null, { loginPage }); 
  });

  test('Verify text on the second field', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should "Password" in the second text field', null, { loginPage }); 
  });

  test('verify asterisk mark symbol next to password text', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should see asterisk mark symbol next to password text', null, { loginPage }); 
  });

  test('Verify the alignment input field for the login', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should see input field on the centre of the page', null, { loginPage }); 
  });

  test('verify Login button is present', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should see login button', null, { loginPage }); 
  });

  test('Verify input descriptive text in user field', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should see user in gray color', null, { loginPage }); 
  });

  test('Verify input descriptive text in password field', async ({ Given, loginPage, When, Then }) => { 
    await Given('The browser is open', null, { loginPage }); 
    await When('Admin gives the correct LMS portal URL', null, { loginPage }); 
    await Then('Admin should see password in gray color', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/01_login.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":6,"pickleLine":5,"tags":[],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":8,"gherkinStepLine":7,"keywordType":"Action","textWithKeyword":"When Admin enter valid data in all field and clicks login button","stepMatchArguments":[]},{"pwStepLine":9,"gherkinStepLine":8,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":12,"pickleLine":10,"tags":[],"steps":[{"pwStepLine":13,"gherkinStepLine":11,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":14,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin enter invalid data and clicks login button","stepMatchArguments":[]},{"pwStepLine":15,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Invalid username and password Please try again\"","stepMatchArguments":[{"group":{"start":14,"value":"\"Invalid username and password Please try again\"","children":[{"start":15,"value":"Invalid username and password Please try again","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":18,"pickleLine":15,"tags":[],"steps":[{"pwStepLine":19,"gherkinStepLine":16,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":20,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Admin enter value only in password and clicks login button","stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Please enter your user name\" for null user name","stepMatchArguments":[{"group":{"start":14,"value":"\"Please enter your user name\"","children":[{"start":15,"value":"Please enter your user name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":24,"pickleLine":20,"tags":[],"steps":[{"pwStepLine":25,"gherkinStepLine":21,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Admin enter value only in user name and clicks login button","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Error message \"Please enter your password\" for null password","stepMatchArguments":[{"group":{"start":14,"value":"\"Please enter your password\"","children":[{"start":15,"value":"Please enter your password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":[],"steps":[{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through keyboard","stepMatchArguments":[]},{"pwStepLine":33,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":36,"pickleLine":30,"tags":[],"steps":[{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Context","textWithKeyword":"Given Admin is on login Page","stepMatchArguments":[]},{"pwStepLine":38,"gherkinStepLine":32,"keywordType":"Action","textWithKeyword":"When Admin enter valid credentials  and clicks login button through mouse","stepMatchArguments":[]},{"pwStepLine":39,"gherkinStepLine":33,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on home page","stepMatchArguments":[]}]},
  {"pwTestLine":42,"pickleLine":42,"tags":[],"steps":[{"pwStepLine":43,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":44,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":45,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to text for mandatory fields","stepMatchArguments":[]}]},
  {"pwTestLine":48,"pickleLine":48,"tags":[],"steps":[{"pwStepLine":49,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":50,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should \"Password\" in the second text field","stepMatchArguments":[{"group":{"start":13,"value":"\"Password\"","children":[{"start":14,"value":"Password","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":54,"pickleLine":53,"tags":[],"steps":[{"pwStepLine":55,"gherkinStepLine":54,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":55,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":56,"keywordType":"Outcome","textWithKeyword":"Then Admin should see asterisk mark symbol next to password text","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":58,"tags":[],"steps":[{"pwStepLine":61,"gherkinStepLine":59,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":60,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":61,"keywordType":"Outcome","textWithKeyword":"Then Admin should see input field on the centre of the page","stepMatchArguments":[]}]},
  {"pwTestLine":66,"pickleLine":63,"tags":[],"steps":[{"pwStepLine":67,"gherkinStepLine":64,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":65,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":66,"keywordType":"Outcome","textWithKeyword":"Then Admin should see login button","stepMatchArguments":[]}]},
  {"pwTestLine":72,"pickleLine":68,"tags":[],"steps":[{"pwStepLine":73,"gherkinStepLine":69,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":70,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":71,"keywordType":"Outcome","textWithKeyword":"Then Admin should see user in gray color","stepMatchArguments":[]}]},
  {"pwTestLine":78,"pickleLine":73,"tags":[],"steps":[{"pwStepLine":79,"gherkinStepLine":74,"keywordType":"Context","textWithKeyword":"Given The browser is open","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":75,"keywordType":"Action","textWithKeyword":"When Admin gives the correct LMS portal URL","stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":76,"keywordType":"Outcome","textWithKeyword":"Then Admin should see password in gray color","stepMatchArguments":[]}]},
]; // bdd-data-end