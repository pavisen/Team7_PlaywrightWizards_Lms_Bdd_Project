import { expect } from "@playwright/test";
import { readDataFromExcelFile } from "../utils/excelReader";



export class ProgramPage {
  constructor(page) {
    this.page = page;
    this.program_btn = page.getByRole('button', { name: 'Program' });
    this.logout = page.getByText('Logout');
    this.header = page.getByText('LMS - Learning Management System');
    this.addNewProgram_btn = page.getByRole('menuitem', { name: 'Add New Program' });
    this.manage_program = page.getByText(' Manage Program');
    this.module_names = page.locator('//mat-toolbar//button//span[1]');
    this.programName = page.getByRole('textbox', { name: 'Program Name' });
    this.description = page.getByRole('textbox', { name: 'Description' });
    this.activeButton = page.locator('.p-radiobutton-box').first()
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.programDetails = page.getByText('Program Details');
    this.mandatoryFields = page.locator('label').filter({ hasText: 'Name*' }).locator('span');
    
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
  async modulenames() {
    const actual_modules = await this.module_names.allTextContents();
    return actual_modules;
  }
  async click_addNewProgram() {
    await this.addNewProgram_btn.click();
  }
  async Validate_programDetails() {
    return this.programDetails;
  }
  

  async enterProgramDetails(ProgramName, Description) {
    const programNameIn = this.page.getByRole('textbox', { name: 'Name *' });

    const DescriptionIn = this.page.getByRole('textbox', { name: 'Description *' });
    const BatchStatusIn = this.page.locator('.p-radiobutton-box').first();

    const saveButtonIn = this.page.getByRole('button', { name: 'Save' });
    // const cancelButtonIn = this.page.getByRole('button', { name: 'Cancel' });
    // const closeBatchpopIn = this.page.getByRole('button', { name: '' });
    // const successfullMsgIn = this.page.getByText('Successful', { exact: true });
    await programNameIn.fill(ProgramName)

    await DescriptionIn.fill(Description);
    await BatchStatusIn.click();

    await saveButtonIn.click();
  }

async verifyPopupFieldsEnabled() {
  await expect(this.programName).toBeEnabled();
  await expect(this.description).toBeEnabled();
  await expect(this.programStatus).toBeEnabled();
  
}

  async saveProgram() {
    await this.saveButton.click();
  }
  programCreatedSuccess() {
    return this.page.getByText('Program Created Successfully')
  }
  async clickAnywhere(x = 500, y = 300) {
    await this.page.mouse.click(x, y);
    console.log(`Clicked at coordinates (${x}, ${y})`);
  }

  async verifyMandatoryField(field) {
    const mandatoryField = this.page.locator('label').filter({ hasText: field }).locator('span');
    await expect(mandatoryField).toBeVisible();
  }
//check locators from here for edit program
  editProgram() {
    return this.page.locator('button').filter({ text: 'Edit' }).first().click();
  }

  Validate_programDetails() {
    return this.page.locator('h1').first();
  }
  editProgramName() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().fill('Updated Program Name');
  }
  verifyProgramName() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().value();
  }
  editDescription() {
    return this.page.locator('textarea').filter({ name: 'Description *' }).first().fill('Updated Description');
  }
  verifyDescription() {
    return this.page.locator('textarea').filter({ name: 'Description *' }).first().value();
  }
  changeStatus() {
    return this.page.locator('.p-radiobutton-box').filter({ text: 'Active' }).first().click();
  }
  verifyStatus() {
    return this.page.locator('.p-radiobutton-box').filter({ text: 'Active' }).first().checked();
  }
  verifyUpdatedProgram() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().value();
  }
  verifyFormDisappears() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().value();
  }
  searchProgram() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().fill('Updated Program Name');
  }

//check locators from here for search program
  searchProgramByName() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().fill('Program 1');
  }
  searchProgramByDescription() {
    return this.page.locator('input').filter({ name: 'Description *' }).first().fill('Description 1');
  }
  searchProgramByPartialName() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().fill('Program');
  }
  verifySearchedProgram() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().value();
  }
  async searchProgram() {
    await this.page.locator('input').filter({ name: 'Name *' }).first().fill('Program 1');
  }
  async verifySearchedProgram() {
    await this.page.locator('input').filter({ name: 'Name *' }).first().value();
  }
  async VerifyMandatoryFields() {
    await expect(this.mandatoryFields).toBeVisible();
  }
  //check locators from here for delete program
  clickDelete() {
    return this.page.locator('button').filter({ text: 'Delete' }).first().click();
  }
  confirmDeletion() {
    return this.page.locator('h1').first();
  }
  clickYes() {
    return this.page.locator('button').filter({ text: 'Yes' }).first().click();
  }
  confirmationMessage() {
    return this.page.locator('h1').first();
  } 
  noResults() {
    return this.page.locator('p').first();
  }
  clickNo() {
    return this.page.locator('button').filter({ text: 'No' }).first().click();
  }
  clickX() {
    return this.page.locator('button').filter({ text: '' }).first().click();
  }
  clickCancel() {
    return this.page.locator('button').filter({ text: 'Cancel' }).first().click();
  }
 
} 