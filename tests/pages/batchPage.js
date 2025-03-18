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
    this.closeBatchpop=page.getByRole('button', { name: '' });
    this.successfullMsg=page.getByText('Successful', { exact: true });
    this.batchCreatedSuccess = page.getByText('Batch Created Successfully');

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
   * @param {string} batchName - Name of the batch.
   * @param {string} description - Batch description.
   * @param {number|string} numberOfClasses - Number of classes in the batch.
   */
  async enterBatchDetails(programName, batchName, description, numberOfClasses) {
    // Select program from the dropdown
    await this.selectDropdownOption(this.programName, programName);

    // Fill batch name and description
    await this.batchName2.fill(batchName);
    await this.description.fill(description);

    // Select batch status (assuming 'Active' by default)
    await this.batchStatus.click();

    // Fill the number of classes (ensure it’s treated as a string)
    await this.noOfClasses.fill(numberOfClasses.toString());

    // Click the save button
    await this.saveButton.click();
  }

  
  async saveBatch() {
    await this.saveButton.click();
  }
}
export {BatchPage};
