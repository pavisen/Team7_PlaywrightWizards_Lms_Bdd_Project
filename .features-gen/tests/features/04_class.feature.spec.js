// Generated from: tests\features\04_class.feature
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

  test('Search class by Class topic', { tag: ['@class', '@smoke', '@search'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Manage class page for search', null, { commonFunctions }); 
    await When('Admin enter the Class topic in search textbox', null, { commonFunctions }); 
    await Then('Admin should see Class details are searched by Class topic', null, { commonFunctions }); 
  });

  test('Search class by Staff Name', { tag: ['@class', '@search'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Manage class page for search', null, { commonFunctions }); 
    await When('Admin enter the Staff Name in search textbox', null, { commonFunctions }); 
    await Then('Admin should see Class details are searched by Staff name', null, { commonFunctions }); 
  });

  test('Search class by Batch Name', { tag: ['@class', '@search'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Manage class page for search', null, { commonFunctions }); 
    await When('Admin enter the Batch Name in search textbox', null, { commonFunctions }); 
    await Then('Admin should see Class details are searched by Batch Name', null, { commonFunctions }); 
  });

  test('Validate row level edit icon', { tag: ['@class', '@edit'] }, async ({ Given, loggedInPage, commonFunctions, When, classPage, Then }) => { 
    await Given('Admin is on the Manage Class page', null, { loggedInPage, commonFunctions }); 
    await When('Admin clicks on the edit icon', null, { commonFunctions, classPage }); 
    await Then('A new pop up with class details appears', null, { classPage }); 
  });

  test.describe('Sort Class by fields', () => {

    test('Example #1', { tag: ['@class', '@sort'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Batch Name" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Batch Name"', null, { commonFunctions }); 
    });

    test('Example #2', { tag: ['@class', '@sort'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Class Topic" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Class Topic"', null, { commonFunctions }); 
    });

    test('Example #3', { tag: ['@class', '@sort'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Class Description" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Class Description"', null, { commonFunctions }); 
    });

    test('Example #4', { tag: ['@class', '@sort'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Status" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Status"', null, { commonFunctions }); 
    });

    test('Example #5', { tag: ['@class', '@sort'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Staff Name" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Staff Name"', null, { commonFunctions }); 
    });

    test('Example #6', { tag: ['@class', '@sort'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the Manage class page', null, { loggedInPage }); 
      await When('Admin clicks on the "Class Date" sort icon', null, { commonFunctions }); 
      await Then('Admin should see Class details are sorted by "Class Date"', null, { commonFunctions }); 
    });

  });

  test('Verify Next page link(>)', { tag: ['@class'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
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

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests\\features\\04_class.feature'),
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
  {"pwTestLine":74,"pickleLine":65,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":75,"gherkinStepLine":66,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":76,"gherkinStepLine":67,"keywordType":"Action","textWithKeyword":"When Admin selects class date in date picker","stepMatchArguments":[]},{"pwStepLine":77,"gherkinStepLine":68,"keywordType":"Outcome","textWithKeyword":"Then Admin should see no of class value is added automatically","stepMatchArguments":[]}]},
  {"pwTestLine":80,"pickleLine":70,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":81,"gherkinStepLine":71,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":82,"gherkinStepLine":72,"keywordType":"Action","textWithKeyword":"When Admin clicks date picker","stepMatchArguments":[]},{"pwStepLine":83,"gherkinStepLine":73,"keywordType":"Outcome","textWithKeyword":"Then Admin should see weekends dates are disabled to select","stepMatchArguments":[]}]},
  {"pwTestLine":86,"pickleLine":75,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":87,"gherkinStepLine":76,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":88,"gherkinStepLine":77,"keywordType":"Action","textWithKeyword":"When Admin skips to add value in mandatory field and enter only the optional field","stepMatchArguments":[]},{"pwStepLine":89,"gherkinStepLine":78,"keywordType":"Outcome","textWithKeyword":"Then Admin should see error message below the test field and the field will be highlighted in red color","stepMatchArguments":[]}]},
  {"pwTestLine":92,"pickleLine":80,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":93,"gherkinStepLine":81,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":94,"gherkinStepLine":82,"keywordType":"Action","textWithKeyword":"When Admin enters invalid data in all of the  fields in the form and clicks on save button","stepMatchArguments":[]},{"pwStepLine":95,"gherkinStepLine":83,"keywordType":"Outcome","textWithKeyword":"Then Admin gets error message and class is not created","stepMatchArguments":[]}]},
  {"pwTestLine":98,"pickleLine":85,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":99,"gherkinStepLine":86,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":100,"gherkinStepLine":87,"keywordType":"Action","textWithKeyword":"When Admin clicks on save button without entering data","stepMatchArguments":[]},{"pwStepLine":101,"gherkinStepLine":88,"keywordType":"Outcome","textWithKeyword":"Then class won't be created and Admin gets error message","stepMatchArguments":[]}]},
  {"pwTestLine":104,"pickleLine":90,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":105,"gherkinStepLine":91,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":106,"gherkinStepLine":92,"keywordType":"Action","textWithKeyword":"When Admin clicks Cancel button on Admin Details form","stepMatchArguments":[]},{"pwStepLine":107,"gherkinStepLine":93,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":110,"pickleLine":95,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":111,"gherkinStepLine":96,"keywordType":"Context","textWithKeyword":"Given Admin is on the Class Popup window","stepMatchArguments":[]},{"pwStepLine":112,"gherkinStepLine":97,"keywordType":"Action","textWithKeyword":"When Admin clicks Close Icon on Admin Details form","stepMatchArguments":[]},{"pwStepLine":113,"gherkinStepLine":98,"keywordType":"Outcome","textWithKeyword":"Then Class Details popup window should be closed without saving","stepMatchArguments":[]}]},
  {"pwTestLine":116,"pickleLine":103,"tags":["@class","@smoke","@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":117,"gherkinStepLine":104,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page for search","stepMatchArguments":[]},{"pwStepLine":118,"gherkinStepLine":105,"keywordType":"Action","textWithKeyword":"When Admin enter the Class topic in search textbox","stepMatchArguments":[]},{"pwStepLine":119,"gherkinStepLine":106,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Class topic","stepMatchArguments":[]}]},
  {"pwTestLine":122,"pickleLine":109,"tags":["@class","@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":123,"gherkinStepLine":110,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page for search","stepMatchArguments":[]},{"pwStepLine":124,"gherkinStepLine":111,"keywordType":"Action","textWithKeyword":"When Admin enter the Staff Name in search textbox","stepMatchArguments":[]},{"pwStepLine":125,"gherkinStepLine":112,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Staff name","stepMatchArguments":[]}]},
  {"pwTestLine":128,"pickleLine":115,"tags":["@class","@search"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":129,"gherkinStepLine":116,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page for search","stepMatchArguments":[]},{"pwStepLine":130,"gherkinStepLine":117,"keywordType":"Action","textWithKeyword":"When Admin enter the Batch Name in search textbox","stepMatchArguments":[]},{"pwStepLine":131,"gherkinStepLine":118,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are searched by Batch Name","stepMatchArguments":[]}]},
  {"pwTestLine":134,"pickleLine":123,"tags":["@class","@edit"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":135,"gherkinStepLine":124,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage Class page","stepMatchArguments":[]},{"pwStepLine":136,"gherkinStepLine":125,"keywordType":"Action","textWithKeyword":"When Admin clicks on the edit icon","stepMatchArguments":[]},{"pwStepLine":137,"gherkinStepLine":126,"keywordType":"Outcome","textWithKeyword":"Then A new pop up with class details appears","stepMatchArguments":[]}]},
  {"pwTestLine":142,"pickleLine":176,"tags":["@class","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":143,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Batch Name\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Batch Name\"","children":[{"start":21,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":145,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Batch Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Batch Name\"","children":[{"start":46,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":148,"pickleLine":177,"tags":["@class","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":149,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Class Topic\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Class Topic\"","children":[{"start":21,"value":"Class Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":151,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Class Topic\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Class Topic\"","children":[{"start":46,"value":"Class Topic","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":154,"pickleLine":178,"tags":["@class","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":155,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Class Description\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Class Description\"","children":[{"start":21,"value":"Class Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":157,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Class Description\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Class Description\"","children":[{"start":46,"value":"Class Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":160,"pickleLine":179,"tags":["@class","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":161,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Status\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Status\"","children":[{"start":21,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":163,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Status\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Status\"","children":[{"start":46,"value":"Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":166,"pickleLine":180,"tags":["@class","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":167,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Staff Name\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Staff Name\"","children":[{"start":21,"value":"Staff Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":169,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Staff Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Staff Name\"","children":[{"start":46,"value":"Staff Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":172,"pickleLine":181,"tags":["@class","@sort"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":173,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Manage class page","stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin clicks on the \"Class Date\" sort icon","stepMatchArguments":[{"group":{"start":20,"value":"\"Class Date\"","children":[{"start":21,"value":"Class Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]},{"pwStepLine":175,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Class details are sorted by \"Class Date\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Class Date\"","children":[{"start":46,"value":"Class Date","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":180,"pickleLine":185,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":186,"keywordType":"Context","textWithKeyword":"Given Admin is on Manage class page","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":187,"keywordType":"Action","textWithKeyword":"When Admin clicks Next page link on the class table","stepMatchArguments":[]},{"pwStepLine":183,"gherkinStepLine":188,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the next page record on the table  with Pagination has next active link enabled","stepMatchArguments":[]}]},
  {"pwTestLine":186,"pickleLine":190,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":191,"keywordType":"Context","textWithKeyword":"Given Admin is on Manage class page","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":192,"keywordType":"Action","textWithKeyword":"When Admin clicks Last page link","stepMatchArguments":[]},{"pwStepLine":189,"gherkinStepLine":193,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page record on the table with Next page link are disabled","stepMatchArguments":[]}]},
  {"pwTestLine":192,"pickleLine":195,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":196,"keywordType":"Context","textWithKeyword":"Given Admin is on next page of class table","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":197,"keywordType":"Action","textWithKeyword":"When Admin clicks previous page link","stepMatchArguments":[]},{"pwStepLine":195,"gherkinStepLine":198,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page record on the table with pagination has previous page link enabled","stepMatchArguments":[]}]},
  {"pwTestLine":198,"pickleLine":200,"tags":["@class"],"steps":[{"pwStepLine":7,"gherkinStepLine":6,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":201,"keywordType":"Context","textWithKeyword":"Given Admin is on last class page","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin clicks first page link","stepMatchArguments":[]},{"pwStepLine":201,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page record on the table with Previous page link are disabled","stepMatchArguments":[]}]},
]; // bdd-data-end