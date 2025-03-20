// Generated from: tests/Features/04_class.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Class Page Validation', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }) => {
    await Given('Admin is on the home page after login', null, { loggedInPage }); 
  });
  
  test('Validating the class manage page', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the " LMS - Learning Management System " Title', null, { commonFunctions }); 
  });

  test('Validating the Header in the Manage class page', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the " Manage Class" Header', null, { commonFunctions }); 
  });

  test('Validating Search bar in class page', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the Search Bar in Manage class page', null, { commonFunctions }); 
  });

  test('Validating the data table headers in the class page', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the datatable headings', null, { commonFunctions }); 
  });

  test('Validating the text and pagination icon in the classpage', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the " showing x to y of  z entries" and enabled pagination controls under the data table', null, { commonFunctions }); 
  });

  test('Validate the sort icon of all the field in datatable', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the Sort icon of all the field in the datatable.', null, { commonFunctions }); 
  });

  test('Validating the Delete button under the Manage class', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the Delete button under the Manage class page header.', null, { commonFunctions }); 
  });

  test('Validate the total no of classes in manage class page', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see Total no of classes in below of the data table.', null, { commonFunctions }); 
  });

  test('Validate Class Details Popup window', { tag: ['@class'] }, async ({ Given, loggedInPage, When, commonFunctions, Then, classPage }) => { 
    await Given('Admin is on the Manage class page', null, { loggedInPage }); 
    await When('Admin clicks a add new class under the class menu bar', null, { commonFunctions }); 
    await Then('Admin should see a popup open for class details with empty form along with save and cancel button and Close Icon on the top right corner of the window', null, { classPage }); 
  });

  test('Validate input fields and their text boxes in Class details form', { tag: ['@class'] }, async ({ Given, loggedInPage, When, commonFunctions, Then, classPage }) => { 
    await Given('Admin is on the Manage class page', null, { loggedInPage }); 
    await When('Admin clicks a add new class under the class menu bar', null, { commonFunctions }); 
    await Then('Admin should see few input fields and their respective text boxes in the class details window', null, { classPage }); 
  });

  test('Check if class is created when all fields are entered with valid data', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin enters all fields in the form and clicks on save button', null, { classPage, commonFunctions }); 
    await Then('Admin gets message Class added Successfully', null, { classPage }); 
  });

  test('Check if class is created when only mandatory fields are entered with valid data', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin enters mandatory fields in the form and clicks on save button', null, { classPage, commonFunctions }); 
    await Then('Admin gets message Class added Successfully', null, { classPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/Features/04_class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":13,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":14,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":15,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Class\" Header","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Class\"","children":[{"start":22,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":17,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":18,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":19,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":21,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":22,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":23,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headings","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":25,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":26,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":27,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" showing x to y of  z entries\" and enabled pagination controls under the data table","stepMatchArguments":[{"group":{"start":21,"value":"\" showing x to y of  z entries\"","children":[{"start":22,"value":" showing x to y of  z entries","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":29,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":30,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":31,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Sort icon of all the field in the datatable.","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":33,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Delete button under the Manage class page header.","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":37,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":38,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":39,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Total no of classes in below of the data table.","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":42,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":43,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a popup open for class details with empty form along with save and cancel button and Close Icon on the top right corner of the window","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":47,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":48,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see few input fields and their respective text boxes in the class details window","stepMatchArguments":[]}]},
  {"pwTestLine":62,"pickleLine":54,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":55,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":56,"keywordType":"Action","textWithKeyword":"When Admin enters all fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":57,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message Class added Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":60,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":61,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":62,"keywordType":"Action","textWithKeyword":"When Admin enters mandatory fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":63,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message Class added Successfully","stepMatchArguments":[]}]},
]; // bdd-data-end