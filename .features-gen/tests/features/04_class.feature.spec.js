// Generated from: tests/features/04_class.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Class Page Validation', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }) => {
    await Given('Admin is on the home page after login', null, { loggedInPage }); 
  });
  
  test('Validating the class manage page', { tag: ['@class'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin clicks the Class Navigation bar in the Header', null, { commonFunctions }); 
    await Then('Admin should see the " LMS - Learning Management System " Title', null, { commonFunctions }); 
  });

  test('Validating the Header in the Manage class page', { tag: ['@class', '@smoke'] }, async ({ When, commonFunctions, Then }) => { 
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
    await Then('Admin should see the Sort icon of all the field in the datatable', null, { commonFunctions }); 
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

  test('Check if class is created when all fields are entered with valid data', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, testData, page, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin enters all fields in the form and clicks on save button', null, { classPage, commonFunctions, testData, page }); 
    await Then('Admin gets message Class added Successfully', null, { classPage, page }); 
  });

  test('Check if class is created when only mandatory fields are entered with valid data', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, testData, Then, page }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin enters mandatory fields in the form and clicks on save button', null, { classPage, commonFunctions, testData }); 
    await Then('Admin gets message Class added Successfully', null, { classPage, page }); 
  });

  test('Check no classes value added when selecting class dates', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin selects class date in date picker', null, { classPage, commonFunctions }); 
    await Then('Admin should see no of class value is added automatically', null, { classPage }); 
  });

  test('Check weekend dates are disabled in calendar', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks date picker', null, { classPage }); 
    await Then('Admin should see weekends dates are disabled to select', null, { classPage }); 
  });

  test('Check if class is created when only optional fields are entered with valid data', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin skips to add value in mandatory field and enter only the optional field', null, { classPage, commonFunctions }); 
    await Then('Admin should see error message below the test field and the field will be highlighted in red color', null, { classPage }); 
  });

  test('check if class is created when invalid data is entered in all of the fields', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin enters invalid data in all of the  fields in the form and clicks on save button', null, { classPage, commonFunctions }); 
    await Then('Admin gets error message and class is not created', null, { classPage }); 
  });

  test('Empty form submission', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on save button without entering data', null, { classPage }); 
    await Then('class won\'t be created and Admin gets error message', null, { classPage }); 
  });

  test('Validate Cancel icon on class Details form', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks Cancel button on Admin Details form', null, { classPage, commonFunctions }); 
    await Then('Class Details popup window should be closed without saving', null, { commonFunctions }); 
  });

  test('Validate Close(X) icon on class Details form', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Class Popup window', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks Close Icon on Admin Details form', null, { classPage, commonFunctions }); 
    await Then('Class Details popup window should be closed without saving', null, { commonFunctions }); 
  });

  test('Search class by Class topic', { tag: ['@class', '@smoke'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Manage class page for search', null, { commonFunctions }); 
    await When('Admin enter the Class topic in search textbox', null, { commonFunctions }); 
    await Then('Admin should see Class details are searched by Class topic', null, { commonFunctions }); 
  });

  test('Search class by Staff Name', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Manage class page for search', null, { commonFunctions }); 
    await When('Admin enter the Staff Name in search textbox', null, { commonFunctions }); 
    await Then('Admin should see Class details are searched by Staff name', null, { commonFunctions }); 
  });

  test('Search class by Batch Name', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Manage class page for search', null, { commonFunctions }); 
    await When('Admin enter the Batch Name in search textbox', null, { commonFunctions }); 
    await Then('Admin should see Class details are searched by Batch Name', null, { commonFunctions }); 
  });

  test('Validate row level edit icon', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, testData, Then }) => { 
    await Given('Admin is on the Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the edit icon', null, { commonFunctions, classPage, testData }); 
    await Then('A new pop up with class details appears', null, { classPage }); 
  });

  test('Check disabled  batch name', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, testData, Then }) => { 
    await Given('Admin is on the Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the edit icon', null, { commonFunctions, classPage, testData }); 
    await Then('Admin should see batch name field is disabled', null, { classPage }); 
  });

  test('Check disabled class topic', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, testData, Then }) => { 
    await Given('Admin is on the Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the edit icon', null, { commonFunctions, classPage, testData }); 
    await Then('Admin should see class topic field is disabled', null, { classPage }); 
  });

  test('Check if the fields are updated with valid data', { tag: ['@class', '@smoke'] }, async ({ Given, commonFunctions, classPage, When, testData, page, Then }) => { 
    await Given('Admin is on the Edit Class Popup window', null, { commonFunctions, classPage }); 
    await When('Update the fields with valid data and click save', null, { classPage, commonFunctions, testData, page }); 
    await Then('Admin gets message class details updated Successfully', null, { classPage }); 
  });

  test('Check if the fields are updated with invalid values', { tag: ['@class'] }, async ({ Given, commonFunctions, classPage, When, testData, page, Then }) => { 
    await Given('Admin is on the Edit Class Popup window', null, { commonFunctions, classPage }); 
    await When('Update the fields with invalid values and click save', null, { classPage, commonFunctions, testData, page }); 
    await Then('Admin should get Error message', null, { classPage }); 
  });

  test('Check if the mandatory fields are updated with valid data', { tag: ['@class'] }, async ({ Given, commonFunctions, classPage, When, testData, page, Then }) => { 
    await Given('Admin is on the Edit Class Popup window', null, { commonFunctions, classPage }); 
    await When('Update the mandatory fields with valid values and click save', null, { classPage, commonFunctions, testData, page }); 
    await Then('Admin gets message class details updated Successfully', null, { classPage }); 
  });

  test('Check if the optional fields are updated with valid data', { tag: ['@class'] }, async ({ Given, commonFunctions, classPage, When, testData, page, Then }) => { 
    await Given('Admin is on the Edit Class Popup window', null, { commonFunctions, classPage }); 
    await When('Update the optional fields with valid values and click save', null, { classPage, commonFunctions, testData, page }); 
    await Then('Admin gets message class details updated Successfully', null, { classPage }); 
  });

  test('Validate Cancel button on Edit popup', { tag: ['@class'] }, async ({ Given, commonFunctions, classPage, When, Then }) => { 
    await Given('Admin is on the Edit Class Popup window', null, { commonFunctions, classPage }); 
    await When('Admin clicks Cancel button on edit popup', null, { classPage, commonFunctions }); 
    await Then('Admin can see the class details popup disappears and can see nothing changed for particular Class', null, { commonFunctions }); 
  });

  test.describe('Sort Class by fields', () => {

    test('Example #1', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Batch Name" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Batch Name"', null, { commonFunctions }); 
    });

    test('Example #2', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Class Topic" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Class Topic"', null, { commonFunctions }); 
    });

    test('Example #3', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Class Description" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Class Description"', null, { commonFunctions }); 
    });

    test('Example #4', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Status" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Status"', null, { commonFunctions }); 
    });

    test('Example #5', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Staff Name" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Staff Name"', null, { commonFunctions }); 
    });

    test('Example #6', { tag: ['@class', '@smoke'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Class Date" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Class Date"', null, { commonFunctions }); 
    });

  });

  test('Verify Next page link(>)', { tag: ['@class', '@smoke'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on Manage class page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks Next page link on the class table', null, { commonFunctions }); 
    await Then('Admin should see the next page record on the table  with Pagination has next active link enabled', null, { commonFunctions }); 
  });

  test('Verify Last page link(>>)', { tag: ['@class'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on Manage class page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks Last page link', null, { commonFunctions }); 
    await Then('Admin should see the last page record on the table with Next page link are disabled', null, { commonFunctions }); 
  });

  test('Verify previous page link(<)', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on next page of class table', null, { commonFunctions }); 
    await When('Admin clicks previous page link', null, { commonFunctions }); 
    await Then('Admin should see the previous page record on the table with pagination has previous page link enabled', null, { commonFunctions }); 
  });

  test('Verify Start page link(<<)', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on last class page', null, { commonFunctions }); 
    await When('Admin clicks first page link', null, { commonFunctions }); 
    await Then('Admin should see the very first page record on the table with Previous page link are disabled', null, { commonFunctions }); 
  });

  test('Validate row level delete icon', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on Manage Class Page', null, { commonFunctions }); 
    await When('Admin clicks the delete icon', null, { commonFunctions }); 
    await Then('Admin should see a alert open with heading "Confirm" along with  <YES> and <NO> button for deletion', null, { commonFunctions }); 
  });

  test('Click No on deletion window', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on Confirm Deletion alert', null, { commonFunctions }); 
    await When('Admin clicks  No option', null, { commonFunctions }); 
    await Then('Admin can see the deletion alert disappears without deleting', null, { commonFunctions }); 
  });

  test('Validate Close(X) icon on Confirm Deletion alert', { tag: ['@class'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on Confirm Deletion alert', null, { commonFunctions }); 
    await When('Admin clicks on close button', null, { commonFunctions }); 
    await Then('Admin can see the deletion alert disappears without any changes', null, { commonFunctions }); 
  });

  test('Validate multiple class deletion by selecting Single checkbox and No button', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, Then }) => { 
    await Given('Admin is in Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks single checkbox in the data table and Admin clicks <NO> button on the alert', null, { commonFunctions }); 
    await Then('Admin should land on Manage class page and can see the selected class is not deleted from the data table', null, { commonFunctions }); 
  });

  test('Validate multiple class deletion by selecting multiple check boxes with NO button', { tag: ['@class'] }, async ({ Given, loggedInPage, commonFunctions, When, Then }) => { 
    await Given('Admin is in Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert for multiple', null, { commonFunctions }); 
    await Then('Admin should land on Manage class page and can see the selected class is not deleted from the data table', null, { commonFunctions }); 
  });

  test('Validate logout option in the header is visible and enabled from the class page', { tag: ['@class', '@doing'] }, async ({ Given, loggedInPage, When, batchPage, Then, loginPage }) => { 
    await Given('Admin is on the Manage class page', null, { loggedInPage }); 
    await When('Admin clicks on the logout button', null, { batchPage }); 
    await Then('Admin should see the Login screen Page title "LMS"', null, { loginPage }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/04_class.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":9,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":10,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":11,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":14,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":15,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":16,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Class\" Header","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Class\"","children":[{"start":22,"value":" Manage Class","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":18,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Search Bar in Manage class page","stepMatchArguments":[]}]},
  {"pwTestLine":25,"pickleLine":22,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":23,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":24,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headings","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":26,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":27,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":28,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" showing x to y of  z entries\" and enabled pagination controls under the data table","stepMatchArguments":[{"group":{"start":21,"value":"\" showing x to y of  z entries\"","children":[{"start":22,"value":" showing x to y of  z entries","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":35,"pickleLine":30,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":31,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":32,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Sort icon of all the field in the datatable","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":34,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":35,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":36,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Delete button under the Manage class page header.","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":38,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin clicks the Class Navigation bar in the Header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Total no of classes in below of the data table.","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":43,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":44,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":53,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a popup open for class details with empty form along with save and cancel button and Close Icon on the top right corner of the window","stepMatchArguments":[]}]},
  {"pwTestLine":56,"pickleLine":48,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":49,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":58,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When Admin clicks a add new class under the class menu bar","stepMatchArguments":[]},{"pwStepLine":59,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see few input fields and their respective text boxes in the class details window","stepMatchArguments":[]}]},
  {"pwTestLine":62,"pickleLine":55,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":63,"gherkinStepLine":56,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":64,"gherkinStepLine":57,"keywordType":"Action","textWithKeyword":"When Admin enters all fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":65,"gherkinStepLine":58,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message Class added Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":68,"pickleLine":61,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":69,"gherkinStepLine":62,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":70,"gherkinStepLine":63,"keywordType":"Action","textWithKeyword":"When Admin enters mandatory fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":71,"gherkinStepLine":64,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message Class added Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":74,"pickleLine":66,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":67,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":68,"keywordType":"Action","textWithKeyword":"When Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":69,"keywordType":"Outcome","textWithKeyword":"Then Admin should see no of class value is added automatically","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":71,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":72,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":73,"keywordType":"Action","textWithKeyword":"When Admin clicks date picker","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":74,"keywordType":"Outcome","textWithKeyword":"Then Admin should see weekends dates are disabled to select","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":76,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":77,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":78,"keywordType":"Action","textWithKeyword":"When Admin skips to add value in mandatory field and enter only the optional field","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":79,"keywordType":"Outcome","textWithKeyword":"Then Admin should see error message below the test field and the field will be highlighted in red color","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":81,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":82,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":83,"keywordType":"Action","textWithKeyword":"When Admin enters invalid data in all of the  fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":84,"keywordType":"Outcome","textWithKeyword":"Then Admin gets error message and class is not created","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":86,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":87,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":88,"keywordType":"Action","textWithKeyword":"When Admin clicks on save button without entering data","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":89,"keywordType":"Outcome","textWithKeyword":"Then class won't be created and Admin gets error message","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":91,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":92,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":93,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button on Admin Details form","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":94,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":110,"pickleLine":96,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":97,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":98,"keywordType":"Action","textWithKeyword":"When Admin clicks Close Icon on Admin Details form","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":99,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":116,"pickleLine":103,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":104,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page for search","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"When Admin enter the Class topic in search textbox","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Class topic","stepMatchArguments":[]}]},
  {"pwTestLine":122,"pickleLine":108,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":109,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page for search","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":110,"keywordType":"Action","textWithKeyword":"When Admin enter the Staff Name in search textbox","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":111,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Staff name","stepMatchArguments":[]}]},
  {"pwTestLine":128,"pickleLine":113,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":114,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page for search","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":115,"keywordType":"Action","textWithKeyword":"When Admin enter the Batch Name in search textbox","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":116,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Batch Name","stepMatchArguments":[]}]},
  {"pwTestLine":134,"pickleLine":119,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":120,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage Class page","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":121,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":122,"keywordType":"Outcome","textWithKeyword":"Then A new pop up with class details appears","stepMatchArguments":[]}]},
  {"pwTestLine":140,"pickleLine":124,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":141,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage Class page","stepMatchArguments":[]},{"pwStepLine":142,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon","stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch name field is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":146,"pickleLine":129,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":147,"gherkinStepLine":130,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage Class page","stepMatchArguments":[]},{"pwStepLine":148,"gherkinStepLine":131,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon","stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":132,"keywordType":"Outcome","textWithKeyword":"Then Admin should see class topic field is disabled","stepMatchArguments":[]}]},
  {"pwTestLine":152,"pickleLine":135,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":153,"gherkinStepLine":136,"keywordType":"Context","textWithKeyword":"Given Admin is on the Edit Class Popup window","stepMatchArguments":[]},{"pwStepLine":154,"gherkinStepLine":137,"keywordType":"Action","textWithKeyword":"When Update the fields with valid data and click save","stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":138,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message class details updated Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":158,"pickleLine":140,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":159,"gherkinStepLine":141,"keywordType":"Context","textWithKeyword":"Given Admin is on the Edit Class Popup window","stepMatchArguments":[]},{"pwStepLine":160,"gherkinStepLine":142,"keywordType":"Action","textWithKeyword":"When Update the fields with invalid values and click save","stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":143,"keywordType":"Outcome","textWithKeyword":"Then Admin should get Error message","stepMatchArguments":[]}]},
  {"pwTestLine":164,"pickleLine":145,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":165,"gherkinStepLine":146,"keywordType":"Context","textWithKeyword":"Given Admin is on the Edit Class Popup window","stepMatchArguments":[]},{"pwStepLine":166,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Update the mandatory fields with valid values and click save","stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message class details updated Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":170,"pickleLine":150,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":171,"gherkinStepLine":151,"keywordType":"Context","textWithKeyword":"Given Admin is on the Edit Class Popup window","stepMatchArguments":[]},{"pwStepLine":172,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When Update the optional fields with valid values and click save","stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then Admin gets message class details updated Successfully","stepMatchArguments":[]}]},
  {"pwTestLine":176,"pickleLine":155,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":177,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given Admin is on the Edit Class Popup window","stepMatchArguments":[]},{"pwStepLine":178,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button on edit popup","stepMatchArguments":[]},{"pwStepLine":179,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the class details popup disappears and can see nothing changed for particular Class","stepMatchArguments":[]}]},
  {"pwTestLine":184,"pickleLine":168,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":185,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Batch Name\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Batch Name\"","children":[{"start":21,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":187,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Batch Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Batch Name\"","children":[{"start":46,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":190,"pickleLine":169,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":191,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Class Topic\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Class Topic\"","children":[{"start":21,"value":"Class Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":193,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Class Topic\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Class Topic\"","children":[{"start":46,"value":"Class Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":196,"pickleLine":170,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":197,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Class Description\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Class Description\"","children":[{"start":21,"value":"Class Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":199,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Class Description\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Class Description\"","children":[{"start":46,"value":"Class Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":202,"pickleLine":171,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":203,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Status\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Status\"","children":[{"start":21,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":205,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Status\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Status\"","children":[{"start":46,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":208,"pickleLine":172,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":209,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Staff Name\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Staff Name\"","children":[{"start":21,"value":"Staff Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":211,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Staff Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Staff Name\"","children":[{"start":46,"value":"Staff Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":214,"pickleLine":173,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":215,"gherkinStepLine":163,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":216,"gherkinStepLine":164,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Class Date\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Class Date\"","children":[{"start":21,"value":"Class Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":217,"gherkinStepLine":165,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Class Date\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Class Date\"","children":[{"start":46,"value":"Class Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":222,"pickleLine":178,"tags":["@class","@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":223,"gherkinStepLine":179,"keywordType":"Context","textWithKeyword":"Given Admin is on Manage class page","stepMatchArguments":[]},{"pwStepLine":224,"gherkinStepLine":180,"keywordType":"Action","textWithKeyword":"When Admin clicks Next page link on the class table","stepMatchArguments":[]},{"pwStepLine":225,"gherkinStepLine":181,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the next page record on the table  with Pagination has next active link enabled","stepMatchArguments":[]}]},
  {"pwTestLine":228,"pickleLine":183,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":229,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Given Admin is on Manage class page","stepMatchArguments":[]},{"pwStepLine":230,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"When Admin clicks Last page link","stepMatchArguments":[]},{"pwStepLine":231,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page record on the table with Next page link are disabled","stepMatchArguments":[]}]},
  {"pwTestLine":234,"pickleLine":188,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":235,"gherkinStepLine":189,"keywordType":"Context","textWithKeyword":"Given Admin is on next page of class table","stepMatchArguments":[]},{"pwStepLine":236,"gherkinStepLine":190,"keywordType":"Action","textWithKeyword":"When Admin clicks previous page link","stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":191,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page record on the table with pagination has previous page link enabled","stepMatchArguments":[]}]},
  {"pwTestLine":240,"pickleLine":193,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":241,"gherkinStepLine":194,"keywordType":"Context","textWithKeyword":"Given Admin is on last class page","stepMatchArguments":[]},{"pwStepLine":242,"gherkinStepLine":195,"keywordType":"Action","textWithKeyword":"When Admin clicks first page link","stepMatchArguments":[]},{"pwStepLine":243,"gherkinStepLine":196,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page record on the table with Previous page link are disabled","stepMatchArguments":[]}]},
  {"pwTestLine":246,"pickleLine":199,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":247,"gherkinStepLine":200,"keywordType":"Context","textWithKeyword":"Given Admin is on Manage Class Page","stepMatchArguments":[]},{"pwStepLine":248,"gherkinStepLine":201,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete icon","stepMatchArguments":[]},{"pwStepLine":249,"gherkinStepLine":202,"keywordType":"Outcome","textWithKeyword":"Then Admin should see a alert open with heading \"Confirm\" along with  <YES> and <NO> button for deletion","stepMatchArguments":[{"group":{"start":43,"value":"\"Confirm\"","children":[{"start":44,"value":"Confirm","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":252,"pickleLine":204,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":253,"gherkinStepLine":205,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm Deletion alert","stepMatchArguments":[]},{"pwStepLine":254,"gherkinStepLine":206,"keywordType":"Action","textWithKeyword":"When Admin clicks  No option","stepMatchArguments":[]},{"pwStepLine":255,"gherkinStepLine":207,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without deleting","stepMatchArguments":[]}]},
  {"pwTestLine":258,"pickleLine":209,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":259,"gherkinStepLine":210,"keywordType":"Context","textWithKeyword":"Given Admin is on Confirm Deletion alert","stepMatchArguments":[]},{"pwStepLine":260,"gherkinStepLine":211,"keywordType":"Action","textWithKeyword":"When Admin clicks on close button","stepMatchArguments":[]},{"pwStepLine":261,"gherkinStepLine":212,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the deletion alert disappears without any changes","stepMatchArguments":[]}]},
  {"pwTestLine":264,"pickleLine":214,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":265,"gherkinStepLine":215,"keywordType":"Context","textWithKeyword":"Given Admin is in Manage Class page","stepMatchArguments":[]},{"pwStepLine":266,"gherkinStepLine":216,"keywordType":"Action","textWithKeyword":"When Admin clicks single checkbox in the data table and Admin clicks <NO> button on the alert","stepMatchArguments":[]},{"pwStepLine":267,"gherkinStepLine":217,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage class page and can see the selected class is not deleted from the data table","stepMatchArguments":[]}]},
  {"pwTestLine":270,"pickleLine":219,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":271,"gherkinStepLine":220,"keywordType":"Context","textWithKeyword":"Given Admin is in Manage Class page","stepMatchArguments":[]},{"pwStepLine":272,"gherkinStepLine":221,"keywordType":"Action","textWithKeyword":"When Admin clicks any checkbox in the data table and Admin clicks <NO> button on the alert for multiple","stepMatchArguments":[]},{"pwStepLine":273,"gherkinStepLine":222,"keywordType":"Outcome","textWithKeyword":"Then Admin should land on Manage class page and can see the selected class is not deleted from the data table","stepMatchArguments":[]}]},
  {"pwTestLine":276,"pickleLine":226,"tags":["@class","@doing"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":277,"gherkinStepLine":227,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":278,"gherkinStepLine":228,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout button","stepMatchArguments":[]},{"pwStepLine":279,"gherkinStepLine":229,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Login screen Page title \"LMS\"","stepMatchArguments":[{"group":{"start":45,"value":"\"LMS\"","children":[{"start":46,"value":"LMS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end