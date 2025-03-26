import { expect } from "@playwright/test";

class BatchPage {
  constructor(page) {
    this.page = page;
    this.batchButton = page.getByRole('button', { name: 'Batch' });
    this.manageBatchPage=page.getByText('Manage Batch');
    this.addNewBatch = page.getByRole('menuitem', { name: 'Add New Batch' })
    this.batchDetails = page.getByText('Batch Details')
    this.programName = page.getByRole('button', { name: '' })
    this.batchName2=page.getByRole('textbox', { name: 'Batch Name *' });
    this.description=page.getByRole('textbox', { name: 'Description *' });
    this.batchStatus=page.locator('.p-radiobutton-box').first();
    this.batchStatusIn=page.locator('div:nth-child(3) > #batchStatus > .p-radiobutton > .p-radiobutton-box');
    this.noOfClasses=page.getByRole('spinbutton', { name: 'Number of Classes *' });
    this.saveButton=page.getByRole('button', { name: 'Save' });
    this.cancelButton=page.getByRole('button', { name: 'Cancel' });
    this.closeButton=page.getByRole('button', { name: '' });
    this.successfullMsg=page.getByText('Successful', { exact: true });
    this.batchCreatedSuccess = page.getByText('Batch Created Successfully');
    this.batchDeletedSuccess = page.getByText('batch Deleted');
    this.batchDeletedSuccessmultiple = page.getByText('Batches Deleted');
    this.logoutButton = this.page.getByRole('button', { name: 'Logout' });
    this.programDroparrow=this.page.locator("//span[@class='p-dropdown-trigger-icon ng-tns-c171-9 pi pi-chevron-down']");
    this.firstdropValue=this.page.locator('p-dropdownitem');
    this.batchnamefirst=this.page.locator("//*[@id='batchProg']");
    this.inlineforbatchname=this.page.locator("//small[@id='text-danger']");
    this.errorMessages = page.locator("//*[@class='p-invalid ng-star-inserted']");
    this.editPageTitle = page.getByText('Batch Details');
    this.batchUpdatedSuccess = page.getByText('batch Updated'); 
    this.invalidmsgfordesc=page.getByText('This field should start with an alphabet and min 2 character.');
    //this.No of classes should be a 1 digit or 2 digit number. Cannot exceed 2 digits
    this.editBatch= this.page.locator("span.p-button-icon.pi.pi-pencil");
    this.programNameField=this.page.locator("#programName");
    this.batchNameField=this.page.locator("#batchName");


  }
  async navigateToBatch() {
  
    await this.batchButton.click();
    //await this.page.getByText('Batch').click(); 

    }
  
  async navigateToManageBatch() {
    //const manageBatch = await this.page.textContent('text=Manage Batch');
    const manageBatch = await this.manageBatchPage.textContent();
    expect(manageBatch.trim()).toBe("Manage Batch");
  }

async addNewBatch() {
  await this.addNewBatch.click();
  }

  async selectDropdownOption(dropdown, optionText) {
    await dropdown.click();
    const optionLocator = this.page.getByRole('option', { name: optionText });
    await optionLocator.waitFor();
    await optionLocator.click();
  }

 /**
 * Fills in batch details and submits the form.
 * @param {string} programName - Name of the program to select.
 * @param {number} batchName - Batch name (must be an integer).
 * @param {string} description - Batch description.
 * @param {number|string} numberOfClasses - Number of classes in the batch.
 */
  async enterBatchDetails(programName, batchName, description, numberOfClasses) {
    // if (!Number.isInteger(batchName)) {
    //   throw new Error("Batch name must be an integer.");
    // }
    await this.selectDropdownOption(this.programName, programName);
    await this.batchName2.fill(batchName.toString());
    await this.description.fill(description);
    await this.batchStatus.click();
    await this.noOfClasses.fill(numberOfClasses.toString());
  }
  
  async updateBatchDetails(description, numberOfClasses) {
    await this.description.fill(description);
    await this.batchStatus.click();
    await this.noOfClasses.fill(numberOfClasses.toString());
    console.log(`Batch details updated: Description - ${description}, No. of Classes - ${numberOfClasses}, Status `);
   }
   
   async updateInvalidBatchDetails(description, numberOfClasses)
   {
    await this.description.fill(description);
    await this.batchStatus.click();
    await this.noOfClasses.fill(numberOfClasses.toString());
    console.log(`Batch invalid details update: Description - ${description}, No. of Classes - ${numberOfClasses}, Status `);
   }
   
   async clickEditFirstRow()
   {
    const firstRowEditButton = this.page.locator("span.p-button-icon.pi.pi-pencil").first();
    // Wait until the edit button is visible (up to 5 seconds)
    await firstRowEditButton.waitFor({ state: 'visible', timeout: 5000 });
    if (await firstRowEditButton.isVisible()) {
        await firstRowEditButton.click();
        console.log("Clicked edit button for the first row.");
    } else {
        throw new Error("Edit button for the first row is not visible.");
    }
   }
  async isLogoutButtonVisible() {
    await expect(this.logoutButton).toBeVisible();
  }
  async verifyPopupFieldsEnabled() {
    await expect(this.programName).toBeEnabled();
    await expect(this.batchName2).toBeEnabled();
    await expect(this.description).toBeEnabled();
    await expect(this.batchStatus).toBeEnabled();
    await expect(this.noOfClasses).toBeEnabled();
}
async selectProgramFromDropdown() {
  await this.programDroparrow.click(); 
  const options = this.page.locator("p-dropdownitem"); 
  await options.first().waitFor(); 
  await options.first().click();
  const dropdownvalue = this.page.locator("//input[@placeholder='Select a Program name']");  // Locator for the dropdown
   await dropdownvalue.waitFor({ state: 'visible' }); 

   const selectedvalue = await dropdownvalue.inputValue();
   this.selectedvalue = selectedvalue;
   console.log(selectedvalue);
   return selectedvalue;
}
async verifyBatchNamePrefix() {
  const batchNamePrefixValue = await this.batchnamefirst.inputValue();
  if (!this.selectedvalue) {
    throw new Error("selectedvalue is not defined.");
  }
  expect(batchNamePrefixValue).toContain(this.selectedvalue);
}

async enterBatchPrefix() {
  const batchNamePrefixBox = this.page.locator("//input[@id='batchProg']"); // Update with the actual selector
  const isEditable = await batchNamePrefixBox.isEditable();
  if (isEditable) {
      await batchNamePrefixBox.fill('ABC');
      console.log("Batch Name Prefix is editable, which is unexpected.");
  } else {
      // const prefixValue = await batchNamePrefixBox.inputValue();
      // expect(prefixValue).toBe(''); 
      console.log("Batch Name Prefix is not editable as expected.");
  }
}
async getTitle() {
  return this.page.title(); // Correct way to get the title
}
async enterBatchSuffix(){
  const batchNamefieldsec= this.page.locator("//body//app-root//input[2]");
  const batchNameSuffixBox = await batchNamefieldsec.isEditable();  
  if (batchNameSuffixBox) {
    await batchNamefieldsec.fill('anu');
    console.log("Batch Name sufix is editable, which is unexpected.");
} else {
    console.log("Batch Name sufix is not editable as expected.");
}
}

async errorMessageBatchName()
{
  const errorMessage = await this.inlineforbatchname.textContent(); // Update with the actual selector for error message
    await errorMessage.waitFor({ state: 'visible' });
}

async getAllErrorMessages() {
  const errorMessages = [];
  const errorMessageElements = await this.errorMessages.all();
  for (let i = 0; i < errorMessageElements.length; i++) {
    const errorMessageElement = errorMessageElements[i];
    const message = await errorMessageElement.textContent();
    const color = await errorMessageElement.evaluate(el => getComputedStyle(el).color);
    const expectedColor = 'rgb(255, 0, 0)'; // Red color in RGB
    if (color !== expectedColor) {
      throw new Error(`Error message color is not red for message: "${message}". Expected color: ${expectedColor}, got: ${color}`);
    }
    errorMessages.push(message);
  }
  return errorMessages;
  }

  async clickSave() {
    await this.saveButton.click();
  }
  async clickCancel() {
    await this.cancelButton.click();
  }
  async clickClose() {
    await this.closeButton.click();
  }
  async clickLogout() {
    await this.logoutButton.click();
  }
  async clickEdit(value){
    this.page.getByRole('row', { name: `${value}` }).getByRole('button').first().click();
  }
  async verifyProgramNameFieldIsDisabled() {

    const disabledAttribute = await this.programNameField.locator('input').first().getAttribute('disabled');
      const hasDisabledClass = await this.programNameField.locator('..').evaluate(el => el.classList.contains('p-disabled'));
      return disabledAttribute !== null || hasDisabledClass; 
  
  }
  async verifyBatchNameFieldIsDisabled() {
    // Target the first visible element (if necessary, adjust to nth(1) if the second one is needed)
    const batchNameField1 = this.page.locator('#batchName').nth(1); // Adjust nth(0) or nth(1) based on UI

    // Ensure the locator is visible before interacting with it
    await batchNameField1.waitFor({ state: 'attached', timeout: 5000 });

    // Check if the input has the "disabled" attribute
    const disabledAttribute = await batchNameField1.getAttribute('disabled');

    // Check if the parent element has the "p-disabled" class
    const hasDisabledClass = await batchNameField1.locator('xpath=..').evaluate(el => el.classList.contains('p-disabled'));

    // Return true if the field is disabled by attribute or class
    return disabledAttribute !== null || hasDisabledClass;
  }

}
export {BatchPage};
