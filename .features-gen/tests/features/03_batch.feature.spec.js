// Generated from: tests/features/03_batch.feature
import { test } from "../../../tests/fixtures/fixture.js";

test.describe('Batch Module -Batch Page Navigation', () => {

  test.beforeEach('Background', async ({ Given, loggedInPage }) => {
    await Given('Admin is on the home page after Login', null, { loggedInPage }); 
  });
  
  test('Verify Admin Navigate to Batch page successfully', { tag: ['@BatchPageNavigation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should be in the " Manage Batch" Page', null, { commonFunctions }); 
  });

  test('Validate "Title" in Batch Page', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the " LMS - Learning Management System " Title in the Batch Page', null, { commonFunctions }); 
  });

  test('Validate "heading" in the Batch Page', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the " Manage Batch" Heading', null, { commonFunctions }); 
  });

  test('Validate disabled "Delete Icon" under the header in the Batch Page', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the disabled Delete Icon under the header', null, { commonFunctions }); 
  });

  test('Validate pagination in the Batch Page', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the enabled pagination controls under the data table', null, { commonFunctions }); 
  });

  test('Validate edit icon in each data rows', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the edit icon in each row', null, { commonFunctions }); 
  });

  test('Validate delete icon in each data rows', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the delete icon in each row', null, { commonFunctions }); 
  });

  test('Validate checkbox in each data rows', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the checkbox in each row', null, { commonFunctions }); 
  });

  test('Validate Datatable headers', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the datatable headers in Batch', null, { commonFunctions }); 
  });

  test('Validate "Checkbox" in the Datatable header row', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the checkbox  in the datatable header row', null, { commonFunctions }); 
  });

  test('Validate "sort icon" next to all the datatable header', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { commonFunctions }); 
  });

  test('Validate all the fields exist in pop up', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin checks all the fields are enabled', null, { batchPage }); 
    await Then('The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as dropdown Status as radio button', null, { batchPage }); 
  });

  test('Validate batchname prefix selected program name', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin selects program name present in the dropdown', null, { batchPage }); 
    await Then('Admin should see selected program name in the batch name prefix box', null, { batchPage }); 
  });

  test('Validate batch name suffix box should accept only numbers	--FAIL CASE', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters alphabets in batch name suffix box', null, { batchPage }); 
    await Then('Admin should get error message below the text box of respective field', null, { batchPage }); 
  });

  test('Validate batch name prefix box is not editable', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters alphabets in batch name prefix box', null, { batchPage }); 
    await Then('Admin should see empty text box', null, { batchPage }); 
  });

  test('validate input data missing for mandatory fields', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin leaves blank one of the mandatory fields', null, { batchPage }); 
    await Then('Admin should get a error message on the respective mandatory field', null, { batchPage }); 
  });

  test('validate save button in Batch details pop up	in AddNewBatch Popup', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters the valid data and click save button', null, { batchPage }); 
    await Then('Admin should get a "successful" message', null, { batchPage }); 
  });

  test('validate cancel button in Batch details pop up in AddNewBatch Popup', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters the valid data and click cancel button', null, { batchPage, commonFunctions }); 
    await Then('Admin can see the batch details popup closes without creating any batch', null, { commonFunctions }); 
  });

  test('validate close icon on the batch details pop up', { tag: ['@Batchpopup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin clicks on the close icon', null, { batchPage, commonFunctions }); 
    await Then('batch details pop up closes', null, { commonFunctions }); 
  });

  test('Validate next page link', { tag: ['@pagination'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks next page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the Next enabled link', null, { commonFunctions }); 
  });

  test('validate last page link', { tag: ['@pagination'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks last page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the last page link with next page link disabled on the table', null, { commonFunctions }); 
  });

  test('validate the previous page link', { tag: ['@pagination'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks previous page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the previous page on the table', null, { commonFunctions }); 
  });

  test('validate the first page link', { tag: ['@pagination'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks first page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the very first page on the data table', null, { commonFunctions }); 
  });

  test('Verify Admin Add Batch successfully', { tag: ['@BatchEdit'] }, async ({ Given, loggedInPage, When, batchPage, commonFunctions, testData, Then }) => { 
    await Given('Admin is on the Batch Page', null, { loggedInPage }); 
    await When('Admin Clicks on the Add Batch button and fill the required fields', null, { batchPage, commonFunctions, testData }); 
    await Then('Admin should create a "new Batch successfully"', null, { batchPage }); 
  });

  test('Verify Admin Add Batch successfully for mandatory fields', { tag: ['@smoke'] }, async ({ Given, loggedInPage, When, batchPage, commonFunctions, testData, Then }) => { 
    await Given('Admin is on the Batch Page', null, { loggedInPage }); 
    await When('Admin Clicks on the Add Batch button and fill the mandatory fields', null, { batchPage, commonFunctions, testData }); 
    await Then('Admin should create a "new Batch successfully"', null, { batchPage }); 
  });

  test('Validate search box functionality', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch page', null, { commonFunctions }); 
    await When('Admin enters the batch name in the search text box', null, { commonFunctions }); 
    await Then('Admin should see the filtered batches in the data table', null, { commonFunctions }); 
  });

  test('Validate Edit icon feature in any row in Batch Page', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch page', null, { commonFunctions }); 
    await When('Admin clicks the edit icon	in Batch Page', null, { commonFunctions, batchPage }); 
    await Then('Admin should see the Batch details pop up window', null, { commonFunctions, batchPage }); 
  });

  test('Validate program name value is disabled to edit in Batch Page', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch page', null, { commonFunctions }); 
    await When('Admin clicks the edit icon for program name', null, { batchPage, commonFunctions }); 
    await Then('Admin should see Program name value field is disabled for editing', null, { batchPage }); 
  });

  test('Validate batch name  value is disabled to edit in Batch Page', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch page', null, { commonFunctions }); 
    await When('Admin clicks the edit icon for batch name', null, { batchPage, commonFunctions }); 
    await Then('Admin should see batch name value field is disabled for editing', null, { batchPage }); 
  });

  test('Validate editing description and No. of classes fields with invalid data in the pop up	in Batch Page	--fail', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Page', null, { commonFunctions }); 
    await When('Admin Updates any fields with invalid data and click save button', null, { batchPage, commonFunctions }); 
    await Then('Admin should get a error message under the respective field', null, { batchPage }); 
  });

  test('validate save button in Batch details pop up in Batch Page', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Page', null, { commonFunctions }); 
    await When('Admin enters the valid data in edit Batch pop up and click save button', null, { batchPage, commonFunctions }); 
    await Then('Admin should get a "successful message" for editing the batch', null, { batchPage }); 
  });

  test('validate cancel button in Batch details pop up	in Batch Page', { tag: ['@BatchEdit'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Page', null, { commonFunctions }); 
    await When('Admin edits the valid data in edit Batch pop up and click cancel button', null, { batchPage, commonFunctions }); 
    await Then('Admin can see the batch details popup closes without editing the batch', null, { batchPage, commonFunctions }); 
  });

  test('Validate logout option in the header is visible and enabled from the batch page', { tag: ['@logoutfromBatch'] }, async ({ Given, commonFunctions, When, batchPage, Then, loginPage }) => { 
    await Given('Admin is on the batch Page', null, { commonFunctions }); 
    await When('Admin clicks on the logout button', null, { batchPage }); 
    await Then('Admin should see the Login screen Page title "LMS"', null, { loginPage }); 
  });

  test('validate no button on the confirm alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon and click no button', null, { commonFunctions }); 
    await Then('Admin should see the alert box closed and the batch is not deleted', null, { commonFunctions }); 
  });

  test('validate close Icon on the alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the close icon on delete', null, { commonFunctions }); 
    await Then('Admin should see the alert box closed', null, { batchPage, commonFunctions }); 
  });

  test('validate delete Icon on any row', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { commonFunctions }); 
    await When('Admin clicks the delete Icon on any row', null, { commonFunctions }); 
    await Then('Admin should see the confirm alert box with yes and no button', null, { commonFunctions }); 
  });

  test.describe('Sort Batch by fields', () => {

    test('Example #1', { tag: ['@Sorting'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the home page after Login', null, { loggedInPage }); 
      await When('Admin is on the batch page', null, { commonFunctions }); 
      await Then('Admin should see Batch details are sorted by "Batch Name"', null, { commonFunctions }); 
    });

    test('Example #2', { tag: ['@Sorting'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the home page after Login', null, { loggedInPage }); 
      await When('Admin is on the batch page', null, { commonFunctions }); 
      await Then('Admin should see Batch details are sorted by "Batch Description"', null, { commonFunctions }); 
    });

    test('Example #3', { tag: ['@Sorting'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the home page after Login', null, { loggedInPage }); 
      await When('Admin is on the batch page', null, { commonFunctions }); 
      await Then('Admin should see Batch details are sorted by "Batch Status"', null, { commonFunctions }); 
    });

    test('Example #4', { tag: ['@Sorting'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the home page after Login', null, { loggedInPage }); 
      await When('Admin is on the batch page', null, { commonFunctions }); 
      await Then('Admin should see Batch details are sorted by "No Of Classes"', null, { commonFunctions }); 
    });

    test('Example #5', { tag: ['@Sorting'] }, async ({ Given, loggedInPage, When, commonFunctions, Then }) => { 
      await Given('Admin is on the home page after Login', null, { loggedInPage }); 
      await When('Admin is on the batch page', null, { commonFunctions }); 
      await Then('Admin should see Batch details are sorted by "Program Name"', null, { commonFunctions }); 
    });

  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/03_batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@BatchPageNavigation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":11,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":12,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the \" Manage Batch\" Page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Batch\"","children":[{"start":24,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":16,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":17,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":18,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title in the Batch Page","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":20,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":21,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":22,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Batch\"","children":[{"start":22,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":24,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":25,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":26,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled Delete Icon under the header","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":28,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the enabled pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":32,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":33,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":34,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":36,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":37,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":38,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":40,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":41,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":42,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":44,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":45,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":46,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headers in Batch","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":49,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":50,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":51,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox  in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":53,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":59,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":60,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":61,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":62,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as dropdown Status as radio button","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":64,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":65,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":66,"keywordType":"Action","textWithKeyword":"When Admin selects program name present in the dropdown","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":67,"keywordType":"Outcome","textWithKeyword":"Then Admin should see selected program name in the batch name prefix box","stepMatchArguments":[]}]},
  {"pwTestLine":77,"pickleLine":69,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name suffix box","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then Admin should get error message below the text box of respective field","stepMatchArguments":[]}]},
  {"pwTestLine":83,"pickleLine":74,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name prefix box","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then Admin should see empty text box","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":79,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"When Admin leaves blank one of the mandatory fields","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message on the respective mandatory field","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":84,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data and click save button","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a \"successful\" message","stepMatchArguments":[{"group":{"start":19,"value":"\"successful\"","children":[{"start":20,"value":"successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":101,"pickleLine":89,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data and click cancel button","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without creating any batch","stepMatchArguments":[]}]},
  {"pwTestLine":107,"pickleLine":94,"tags":["@Batchpopup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then batch details pop up closes","stepMatchArguments":[]}]},
  {"pwTestLine":113,"pickleLine":102,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":103,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":104,"keywordType":"Action","textWithKeyword":"When Admin clicks next page link on the data table","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":105,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Next enabled link","stepMatchArguments":[]}]},
  {"pwTestLine":119,"pickleLine":107,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":108,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":109,"keywordType":"Action","textWithKeyword":"When Admin clicks last page link on the data table","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":110,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page link with next page link disabled on the table","stepMatchArguments":[]}]},
  {"pwTestLine":125,"pickleLine":112,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin clicks previous page link on the data table","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page on the table","stepMatchArguments":[]}]},
  {"pwTestLine":131,"pickleLine":117,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":132,"gherkinStepLine":118,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":119,"keywordType":"Action","textWithKeyword":"When Admin clicks first page link on the data table","stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":120,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page on the data table","stepMatchArguments":[]}]},
  {"pwTestLine":137,"pickleLine":124,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":125,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Page","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":126,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Add Batch button and fill the required fields","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":127,"keywordType":"Outcome","textWithKeyword":"Then Admin should create a \"new Batch successfully\"","stepMatchArguments":[{"group":{"start":22,"value":"\"new Batch successfully\"","children":[{"start":23,"value":"new Batch successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":143,"pickleLine":130,"tags":["@smoke"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":131,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Page","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":132,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Add Batch button and fill the mandatory fields","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":133,"keywordType":"Outcome","textWithKeyword":"Then Admin should create a \"new Batch successfully\"","stepMatchArguments":[{"group":{"start":22,"value":"\"new Batch successfully\"","children":[{"start":23,"value":"new Batch successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":149,"pickleLine":138,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":139,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":140,"keywordType":"Action","textWithKeyword":"When Admin enters the batch name in the search text box","stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":141,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the filtered batches in the data table","stepMatchArguments":[]}]},
  {"pwTestLine":155,"pickleLine":145,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":146,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":147,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon\tin Batch Page","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":148,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Batch details pop up window","stepMatchArguments":[]}]},
  {"pwTestLine":161,"pickleLine":150,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":151,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon for program name","stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Program name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":167,"pickleLine":155,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When Admin clicks the edit icon for batch name","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then Admin should see batch name value field is disabled for editing","stepMatchArguments":[]}]},
  {"pwTestLine":173,"pickleLine":160,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":161,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":162,"keywordType":"Action","textWithKeyword":"When Admin Updates any fields with invalid data and click save button","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":163,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message under the respective field","stepMatchArguments":[]}]},
  {"pwTestLine":179,"pickleLine":165,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":180,"gherkinStepLine":166,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":167,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data in edit Batch pop up and click save button","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":168,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a \"successful message\" for editing the batch","stepMatchArguments":[{"group":{"start":19,"value":"\"successful message\"","children":[{"start":20,"value":"successful message","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":185,"pickleLine":170,"tags":["@BatchEdit"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":171,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Page","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":172,"keywordType":"Action","textWithKeyword":"When Admin edits the valid data in edit Batch pop up and click cancel button","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":173,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without editing the batch","stepMatchArguments":[]}]},
  {"pwTestLine":191,"pickleLine":177,"tags":["@logoutfromBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":192,"gherkinStepLine":178,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":193,"gherkinStepLine":179,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout button","stepMatchArguments":[]},{"pwStepLine":194,"gherkinStepLine":180,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Login screen Page title \"LMS\"","stepMatchArguments":[{"group":{"start":45,"value":"\"LMS\"","children":[{"start":46,"value":"LMS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":197,"pickleLine":183,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":198,"gherkinStepLine":184,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":199,"gherkinStepLine":185,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click no button","stepMatchArguments":[]},{"pwStepLine":200,"gherkinStepLine":186,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed and the batch is not deleted","stepMatchArguments":[]}]},
  {"pwTestLine":203,"pickleLine":188,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":204,"gherkinStepLine":189,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":205,"gherkinStepLine":190,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon on delete","stepMatchArguments":[]},{"pwStepLine":206,"gherkinStepLine":191,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
  {"pwTestLine":209,"pickleLine":193,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":210,"gherkinStepLine":194,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":211,"gherkinStepLine":195,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":212,"gherkinStepLine":196,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
  {"pwTestLine":217,"pickleLine":206,"tags":["@Sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":218,"gherkinStepLine":201,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","stepMatchArguments":[]},{"pwStepLine":219,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":220,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Batch details are sorted by \"Batch Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Batch Name\"","children":[{"start":46,"value":"Batch Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":223,"pickleLine":207,"tags":["@Sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":224,"gherkinStepLine":201,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","stepMatchArguments":[]},{"pwStepLine":225,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":226,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Batch details are sorted by \"Batch Description\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Batch Description\"","children":[{"start":46,"value":"Batch Description","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":229,"pickleLine":208,"tags":["@Sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":230,"gherkinStepLine":201,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","stepMatchArguments":[]},{"pwStepLine":231,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":232,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Batch details are sorted by \"Batch Status\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Batch Status\"","children":[{"start":46,"value":"Batch Status","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":235,"pickleLine":209,"tags":["@Sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":236,"gherkinStepLine":201,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","stepMatchArguments":[]},{"pwStepLine":237,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":238,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Batch details are sorted by \"No Of Classes\"","stepMatchArguments":[{"group":{"start":45,"value":"\"No Of Classes\"","children":[{"start":46,"value":"No Of Classes","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":241,"pickleLine":210,"tags":["@Sorting"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":242,"gherkinStepLine":201,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","stepMatchArguments":[]},{"pwStepLine":243,"gherkinStepLine":202,"keywordType":"Action","textWithKeyword":"When Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":244,"gherkinStepLine":203,"keywordType":"Outcome","textWithKeyword":"Then Admin should see Batch details are sorted by \"Program Name\"","stepMatchArguments":[{"group":{"start":45,"value":"\"Program Name\"","children":[{"start":46,"value":"Program Name","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
]; // bdd-data-end