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

  async enterBatchDetails(batchName,description,noOfClasses) {
    await this.programName.click();
    await this.batchName2.click();
    await this.batchName2.fill(batchName);
    await this.description.click();
    await this.description.fill(description);
    await this.batchStatus.click();
    await this.noOfClasses.click();
    await this.noOfClasses.fill(noOfClasses);
  }


}
export default BatchPage;