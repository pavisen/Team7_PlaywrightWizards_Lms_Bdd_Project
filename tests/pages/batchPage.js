import { expect } from "@playwright/test";
import { readDataFromExcelFile } from "../utils/excelReader";

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


  async enterBatchDetails(ProgramName,BatchName,Description,NoOfClasses) {
    const programNameIn = this.page.getByRole('button', { name: '' });
    const BatchNameIn   = this.page.getByRole('textbox', { name: 'Batch Name *' });
    const DescriptionIn = this.page.getByRole('textbox', { name: 'Description *' });
    const BatchStatusIn = this.page.locator('.p-radiobutton-box').first();
    const NoOfClassesIn = this.page.getByRole('spinbutton', { name: 'Number of Classes *' });
    const saveButtonIn = this.page.getByRole('button', { name: 'Save' });
    // const cancelButtonIn = this.page.getByRole('button', { name: 'Cancel' });
    // const closeBatchpopIn = this.page.getByRole('button', { name: '' });
    // const successfullMsgIn = this.page.getByText('Successful', { exact: true });
    await programNameIn.fill(ProgramName)
    await BatchNameIn.fill(BatchName);
    await DescriptionIn.fill(Description);
    await BatchStatusIn.click();
    await NoOfClassesIn.fill(NoOfClasses);
    await saveButtonIn.click();
  }

  async saveBatch() {
    await this.saveButton.click();
  }



}
export default BatchPage;
