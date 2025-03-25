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
    await Then('Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of Classes, Program Name, Edit/Delete', null, { commonFunctions }); 
  });

  test('Validate "Checkbox" in the Datatable header row', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the checkbox  in the datatable header row', null, { commonFunctions }); 
  });

  test('Validate "sort icon" next to all the datatable header', { tag: ['@BatchPageValidation'] }, async ({ When, commonFunctions, Then }) => { 
    await When('Admin Clicks on the Batch menu from the header', null, { commonFunctions }); 
    await Then('Admin should see the sort icon next to all Datatable headers', null, { commonFunctions }); 
  });

  test('Validate all the fields exist in pop up', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin checks all the fields are enabled', null, { batchPage }); 
    await Then('The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as dropdown Status as radio button', null, { batchPage }); 
  });

  test('Validate batchname prefix selected program name', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin selects program name present in the dropdown', null, { batchPage }); 
    await Then('Admin should see selected program name in the batch name prefix box', null, { batchPage }); 
  });

  test('Validate batch name suffix box should accept only numbers	--FAIL CASE', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters alphabets in batch name suffix box', null, { batchPage }); 
    await Then('Admin should get error message below the text box of respective field', null, { batchPage }); 
  });

  test('Validate batch name prefix box is not editable', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters alphabets in batch name prefix box', null, { batchPage }); 
    await Then('Admin should see empty text box', null, { batchPage }); 
  });

  test('validate input data missing for mandatory fields', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin leaves blank one of the mandatory fields', null, { batchPage }); 
    await Then('Admin should get a error message on the respective mandatory field', null, { batchPage }); 
  });

  test('validate save button in Batch details pop up', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters the valid data to all the mandatory fields and click save button', null, { batchPage }); 
    await Then('Admin should get a "successful" message', null, { batchPage }); 
  });

  test('validate cancel button in Batch details pop up', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin enters the valid data to all the mandatory fields and click cancel button', null, { batchPage, commonFunctions }); 
    await Then('Admin can see the batch details popup closes without creating any batch', null, { commonFunctions }); 
  });

  test('validate close icon on the batch details pop up', { tag: ['@popup'] }, async ({ Given, commonFunctions, When, batchPage, Then }) => { 
    await Given('Admin is on the Batch Details Pop Up WIndow', null, { commonFunctions }); 
    await When('Admin clicks on the close icon', null, { batchPage, commonFunctions }); 
    await Then('batch details pop up closes', null, { commonFunctions }); 
  });

  test('validate delete Icon on any row', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the Batch page', null, { commonFunctions }); 
    await When('Admin clicks the delete Icon on any row', null, { commonFunctions }); 
    await Then('Admin should see the confirm alert box with yes and no button', null, { commonFunctions }); 
  });

  test('Validate yes button on the confirm alert box', { tag: ['@DeleteBatch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch confirm popup page', null, { commonFunctions }); 
    await When('Admin clicks on the delete icon and click yes button', null, { commonFunctions }); 
    await Then('Admin should see the successful message and the batch should be deleted', null, { commonFunctions }); 
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

  test('Validate single row delete with checkbox', { tag: ['@Deletion'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header', null, { commonFunctions }); 
    await Then('The respective row in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate multiple row delete with checkbox', { tag: ['@Deletion'] }, async ({ Given, paginationPage, commonFunctions, When, Then, batchPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the delete icon under the Manage batch header for multiple rows', null, { commonFunctions }); 
    await Then('The respective multiple rows in the table should be deleted', null, { batchPage, commonFunctions }); 
  });

  test('Validate next page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks next page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the Next enabled link', null, { commonFunctions }); 
  });

  test('validate last page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks last page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the last page link with next page link disabled on the table', null, { commonFunctions }); 
  });

  test('validate the previous page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks previous page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the previous page on the table', null, { commonFunctions }); 
  });

  test('validate the first page link', { tag: ['@pagination'] }, async ({ Given, paginationPage, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks first page link on the data table', null, { commonFunctions }); 
    await Then('Admin should see the very first page on the data table', null, { commonFunctions }); 
  });

  test('Verify Admin Add Batch successfully', { tag: ['@AddNewBatch'] }, async ({ Given, loggedInPage, When, batchPage, commonFunctions, testData, Then }) => { 
    await Given('Admin is on the Batch Page', null, { loggedInPage }); 
    await When('Admin Clicks on the Add Batch button and fill the required fields', null, { batchPage, commonFunctions, testData }); 
    await Then('Admin should create a "new Batch successfully"', null, { batchPage }); 
  });

  test('Validate logout option in the header is visible and enabled from the batch page', { tag: ['@EditBatch', '@logoutfromBatch'] }, async ({ Given, paginationPage, commonFunctions, When, batchPage, Then, loginPage }) => { 
    await Given('Admin is on the batch Page', null, { paginationPage, commonFunctions }); 
    await When('Admin clicks on the logout button', null, { batchPage }); 
    await Then('Admin should see the Login screen Page title "LMS"', null, { loginPage }); 
  });

  test('Validate search box functionality', { tag: ['@BatchSearch'] }, async ({ Given, commonFunctions, When, Then }) => { 
    await Given('Admin is on the batch page', null, { commonFunctions }); 
    await When('Admin enters the batch name in the search text box', null, { commonFunctions }); 
    await Then('Admin should see the filtered batches in the data table', null, { commonFunctions }); 
  });

});

// == technical section ==

test.use({
  $test: ({}, use) => use(test),
  $uri: ({}, use) => use('tests/features/03_batch.feature'),
  $bddFileData: ({}, use) => use(bddFileData),
});

const bddFileData = [ // bdd-data-start
  {"pwTestLine":10,"pickleLine":10,"tags":["@BatchPageNavigation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":11,"gherkinStepLine":12,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":12,"gherkinStepLine":13,"keywordType":"Outcome","textWithKeyword":"Then Admin should be in the \" Manage Batch\" Page","stepMatchArguments":[{"group":{"start":23,"value":"\" Manage Batch\"","children":[{"start":24,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":15,"pickleLine":17,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":16,"gherkinStepLine":19,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":17,"gherkinStepLine":20,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" LMS - Learning Management System \" Title in the Batch Page","stepMatchArguments":[{"group":{"start":21,"value":"\" LMS - Learning Management System \"","children":[{"start":22,"value":" LMS - Learning Management System ","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":20,"pickleLine":22,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":21,"gherkinStepLine":24,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":22,"gherkinStepLine":25,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the \" Manage Batch\" Heading","stepMatchArguments":[{"group":{"start":21,"value":"\" Manage Batch\"","children":[{"start":22,"value":" Manage Batch","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":25,"pickleLine":27,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":26,"gherkinStepLine":29,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":27,"gherkinStepLine":30,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the disabled Delete Icon under the header","stepMatchArguments":[]}]},
  {"pwTestLine":30,"pickleLine":32,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":31,"gherkinStepLine":34,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":32,"gherkinStepLine":35,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the enabled pagination controls under the data table","stepMatchArguments":[]}]},
  {"pwTestLine":35,"pickleLine":37,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":36,"gherkinStepLine":39,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":37,"gherkinStepLine":40,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the edit icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":40,"pickleLine":42,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":41,"gherkinStepLine":44,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":42,"gherkinStepLine":45,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the delete icon in each row","stepMatchArguments":[]}]},
  {"pwTestLine":45,"pickleLine":47,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":46,"gherkinStepLine":49,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":47,"gherkinStepLine":50,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox in each row","stepMatchArguments":[]}]},
  {"pwTestLine":50,"pickleLine":52,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":51,"gherkinStepLine":54,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":52,"gherkinStepLine":55,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the datatable headers Batch name, Batch Description,Batch Status, No Of Classes, Program Name, Edit/Delete","stepMatchArguments":[]}]},
  {"pwTestLine":55,"pickleLine":57,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":56,"gherkinStepLine":59,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":57,"gherkinStepLine":60,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the checkbox  in the datatable header row","stepMatchArguments":[]}]},
  {"pwTestLine":60,"pickleLine":62,"tags":["@BatchPageValidation"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":61,"gherkinStepLine":64,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Batch menu from the header","stepMatchArguments":[]},{"pwStepLine":62,"gherkinStepLine":65,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the sort icon next to all Datatable headers","stepMatchArguments":[]}]},
  {"pwTestLine":65,"pickleLine":69,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":66,"gherkinStepLine":70,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":67,"gherkinStepLine":71,"keywordType":"Action","textWithKeyword":"When Admin checks all the fields are enabled","stepMatchArguments":[]},{"pwStepLine":68,"gherkinStepLine":72,"keywordType":"Outcome","textWithKeyword":"Then The pop up should include the fields Batch Name,Number of classes and Description as text box,Program Name as dropdown Status as radio button","stepMatchArguments":[]}]},
  {"pwTestLine":71,"pickleLine":74,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":72,"gherkinStepLine":75,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":73,"gherkinStepLine":76,"keywordType":"Action","textWithKeyword":"When Admin selects program name present in the dropdown","stepMatchArguments":[]},{"pwStepLine":74,"gherkinStepLine":77,"keywordType":"Outcome","textWithKeyword":"Then Admin should see selected program name in the batch name prefix box","stepMatchArguments":[]}]},
  {"pwTestLine":77,"pickleLine":79,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":78,"gherkinStepLine":80,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":79,"gherkinStepLine":81,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name suffix box","stepMatchArguments":[]},{"pwStepLine":80,"gherkinStepLine":82,"keywordType":"Outcome","textWithKeyword":"Then Admin should get error message below the text box of respective field","stepMatchArguments":[]}]},
  {"pwTestLine":83,"pickleLine":84,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":84,"gherkinStepLine":85,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":85,"gherkinStepLine":86,"keywordType":"Action","textWithKeyword":"When Admin enters alphabets in batch name prefix box","stepMatchArguments":[]},{"pwStepLine":86,"gherkinStepLine":87,"keywordType":"Outcome","textWithKeyword":"Then Admin should see empty text box","stepMatchArguments":[]}]},
  {"pwTestLine":89,"pickleLine":89,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":90,"gherkinStepLine":90,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":91,"gherkinStepLine":91,"keywordType":"Action","textWithKeyword":"When Admin leaves blank one of the mandatory fields","stepMatchArguments":[]},{"pwStepLine":92,"gherkinStepLine":92,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a error message on the respective mandatory field","stepMatchArguments":[]}]},
  {"pwTestLine":95,"pickleLine":94,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":96,"gherkinStepLine":95,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":97,"gherkinStepLine":96,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data to all the mandatory fields and click save button","stepMatchArguments":[]},{"pwStepLine":98,"gherkinStepLine":97,"keywordType":"Outcome","textWithKeyword":"Then Admin should get a \"successful\" message","stepMatchArguments":[{"group":{"start":19,"value":"\"successful\"","children":[{"start":20,"value":"successful","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":101,"pickleLine":99,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":102,"gherkinStepLine":100,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":103,"gherkinStepLine":101,"keywordType":"Action","textWithKeyword":"When Admin enters the valid data to all the mandatory fields and click cancel button","stepMatchArguments":[]},{"pwStepLine":104,"gherkinStepLine":102,"keywordType":"Outcome","textWithKeyword":"Then Admin can see the batch details popup closes without creating any batch","stepMatchArguments":[]}]},
  {"pwTestLine":107,"pickleLine":104,"tags":["@popup"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":108,"gherkinStepLine":105,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Details Pop Up WIndow","stepMatchArguments":[]},{"pwStepLine":109,"gherkinStepLine":106,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon","stepMatchArguments":[]},{"pwStepLine":110,"gherkinStepLine":107,"keywordType":"Outcome","textWithKeyword":"Then batch details pop up closes","stepMatchArguments":[]}]},
  {"pwTestLine":113,"pickleLine":112,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":114,"gherkinStepLine":113,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch page","stepMatchArguments":[]},{"pwStepLine":115,"gherkinStepLine":114,"keywordType":"Action","textWithKeyword":"When Admin clicks the delete Icon on any row","stepMatchArguments":[]},{"pwStepLine":116,"gherkinStepLine":115,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the confirm alert box with yes and no button","stepMatchArguments":[]}]},
  {"pwTestLine":119,"pickleLine":117,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":120,"gherkinStepLine":118,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":121,"gherkinStepLine":119,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click yes button","stepMatchArguments":[]},{"pwStepLine":122,"gherkinStepLine":120,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the successful message and the batch should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":125,"pickleLine":122,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":126,"gherkinStepLine":123,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":127,"gherkinStepLine":124,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon and click no button","stepMatchArguments":[]},{"pwStepLine":128,"gherkinStepLine":125,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed and the batch is not deleted","stepMatchArguments":[]}]},
  {"pwTestLine":131,"pickleLine":127,"tags":["@DeleteBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":132,"gherkinStepLine":128,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch confirm popup page","stepMatchArguments":[]},{"pwStepLine":133,"gherkinStepLine":129,"keywordType":"Action","textWithKeyword":"When Admin clicks on the close icon on delete","stepMatchArguments":[]},{"pwStepLine":134,"gherkinStepLine":130,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the alert box closed","stepMatchArguments":[]}]},
  {"pwTestLine":137,"pickleLine":136,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":138,"gherkinStepLine":137,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":139,"gherkinStepLine":138,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header","stepMatchArguments":[]},{"pwStepLine":140,"gherkinStepLine":139,"keywordType":"Outcome","textWithKeyword":"Then The respective row in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":143,"pickleLine":141,"tags":["@Deletion"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":144,"gherkinStepLine":142,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":145,"gherkinStepLine":143,"keywordType":"Action","textWithKeyword":"When Admin clicks on the delete icon under the Manage batch header for multiple rows","stepMatchArguments":[]},{"pwStepLine":146,"gherkinStepLine":144,"keywordType":"Outcome","textWithKeyword":"Then The respective multiple rows in the table should be deleted","stepMatchArguments":[]}]},
  {"pwTestLine":149,"pickleLine":150,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":150,"gherkinStepLine":151,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":151,"gherkinStepLine":152,"keywordType":"Action","textWithKeyword":"When Admin clicks next page link on the data table","stepMatchArguments":[]},{"pwStepLine":152,"gherkinStepLine":153,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Next enabled link","stepMatchArguments":[]}]},
  {"pwTestLine":155,"pickleLine":155,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":156,"gherkinStepLine":156,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":157,"gherkinStepLine":157,"keywordType":"Action","textWithKeyword":"When Admin clicks last page link on the data table","stepMatchArguments":[]},{"pwStepLine":158,"gherkinStepLine":158,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the last page link with next page link disabled on the table","stepMatchArguments":[]}]},
  {"pwTestLine":161,"pickleLine":160,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":162,"gherkinStepLine":161,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":163,"gherkinStepLine":162,"keywordType":"Action","textWithKeyword":"When Admin clicks previous page link on the data table","stepMatchArguments":[]},{"pwStepLine":164,"gherkinStepLine":163,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the previous page on the table","stepMatchArguments":[]}]},
  {"pwTestLine":167,"pickleLine":165,"tags":["@pagination"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":168,"gherkinStepLine":166,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":169,"gherkinStepLine":167,"keywordType":"Action","textWithKeyword":"When Admin clicks first page link on the data table","stepMatchArguments":[]},{"pwStepLine":170,"gherkinStepLine":168,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the very first page on the data table","stepMatchArguments":[]}]},
  {"pwTestLine":173,"pickleLine":172,"tags":["@AddNewBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":174,"gherkinStepLine":173,"keywordType":"Context","textWithKeyword":"Given Admin is on the Batch Page","stepMatchArguments":[]},{"pwStepLine":175,"gherkinStepLine":174,"keywordType":"Action","textWithKeyword":"When Admin Clicks on the Add Batch button and fill the required fields","stepMatchArguments":[]},{"pwStepLine":176,"gherkinStepLine":175,"keywordType":"Outcome","textWithKeyword":"Then Admin should create a \"new Batch successfully\"","stepMatchArguments":[{"group":{"start":22,"value":"\"new Batch successfully\"","children":[{"start":23,"value":"new Batch successfully","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":179,"pickleLine":182,"tags":["@EditBatch","@logoutfromBatch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":180,"gherkinStepLine":183,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch Page","stepMatchArguments":[]},{"pwStepLine":181,"gherkinStepLine":184,"keywordType":"Action","textWithKeyword":"When Admin clicks on the logout button","stepMatchArguments":[]},{"pwStepLine":182,"gherkinStepLine":185,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the Login screen Page title \"LMS\"","stepMatchArguments":[{"group":{"start":45,"value":"\"LMS\"","children":[{"start":46,"value":"LMS","children":[{"children":[]}]},{"children":[{"children":[]}]}]},"parameterTypeName":"string"}]}]},
  {"pwTestLine":185,"pickleLine":189,"tags":["@BatchSearch"],"steps":[{"pwStepLine":7,"gherkinStepLine":5,"keywordType":"Context","textWithKeyword":"Given Admin is on the home page after Login","isBg":true,"stepMatchArguments":[]},{"pwStepLine":186,"gherkinStepLine":190,"keywordType":"Context","textWithKeyword":"Given Admin is on the batch page","stepMatchArguments":[]},{"pwStepLine":187,"gherkinStepLine":191,"keywordType":"Action","textWithKeyword":"When Admin enters the batch name in the search text box","stepMatchArguments":[]},{"pwStepLine":188,"gherkinStepLine":192,"keywordType":"Outcome","textWithKeyword":"Then Admin should see the filtered batches in the data table","stepMatchArguments":[]}]},
]; // bdd-data-end