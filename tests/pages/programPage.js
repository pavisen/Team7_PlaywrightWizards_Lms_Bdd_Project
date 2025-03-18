 import { expect } from "@playwright/test";
import { readDataFromExcelFile } from "../utils/excelReader";



 class ProgramPage {
  constructor(page) {
    this.page = page;
    this.program_btn = page.getByRole('button', { name: 'Program' });
    this.logout = page.getByText('Logout');
    this.header = page.getByText('LMS - Learning Management System');
    this.addNewProgram_btn = page.getByRole('menuitem', { name: 'Add New Program' });
    this.manage_program = page.getByText(' Manage Program');
    this.programName = page.getByRole('textbox', { name: 'Program Name' });
    this.description = page.getByRole('textbox', { name: 'Description' });
    this.activeButton = locator('.p-radiobutton-box').first()
    this.saveButton = page.getByRole('button', { name: 'Save' });
  }

  async click_program() {
    await this.program_btn.waitFor({ state: 'visible' })
    await this.program_btn.click();
    
  }

  async logout_menubar() {
    return this.logout;
  }

  async validate_headerLms() {
    const actual_text = await this.header.textContent();
    return actual_text;
    
  }

  async validate_addNewProgram() {    
    return this.addNewProgram_btn;
  }

  async validate_manageprogram() {
    const actual_text = await this.manage_program.textContent();
    return actual_text;
    
  }
  async click_addNewProgram() {
    await this.addNewProgram_btn.click();
   }
  // async enterProgramDetails(ProgramName ProgramName,description,Description) {
  //   await this.programName.click();
  //   await this.programName.fill(ProgramName)
  //   await this.description.fill(Description);
  //   await this.activeButton.click();
   
  // }

  async enterBatchDetails(ProgramName,Description) {
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

  async saveProgram() {
    await this.saveButton.click();
  }

  
}
export default ProgramPage;