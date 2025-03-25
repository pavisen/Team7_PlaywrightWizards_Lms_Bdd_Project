import { expect } from "@playwright/test";
import { readDataFromExcelFile } from "../utils/excelReader";



export class ProgramPage {
  constructor(page) {
    this.page = page;
    
    this.closeButton=page.getByRole('button', { name: '' });
    this.program_btn = page.getByRole('button', { name: 'Program' });
    this.logout = page.getByText('Logout');
    this.header = page.getByText('LMS - Learning Management System');
    this.addNewProgram_btn = page.getByRole('menuitem', { name: 'Add New Program' });
    this.manage_program = page.getByText(' Manage Program');
    this.module_names = page.locator('//mat-toolbar//button//span[1]');
    this.programName = page.locator('//*[@id="programName"]');
    this.description = page.locator('//*[@id="programDescription"]');
    this.programdeleteMessage = page.getByText('Program Deleted');
    this.programdeletedMessage = page.getByText('Programs Deleted');
    this.activeButton = page.locator('.p-radiobutton-box').first()
    this.saveButton = page.getByRole('button', { name: 'Save' });
    this.programDetails = page.getByText('Program Details');
    this.mandatoryFields = page.locator('label').filter({ hasText: 'Name*' }).locator('span');
    this.verifyFieldIsRequired = page.getByText('Program name is required.');
    this.cancel_btn = page.getByRole('button',{name: 'Cancel'});
    this.closeButton=page.getByRole('button', { name: '' });
    this.editPageTitle = page.getByText('Program Details');
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
    Validate_programDetails() {
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
  await expect(this.activeButton).toBeEnabled();
  
}
//*[@id="editProgram"]
  async saveProgram() {
    await this.saveButton.click();
  }
  async programCreatedSuccess() {
    return await this.page.getByText('Program Created Successfully')
  }
  async programCreationFailure() {
    return await this.page.getByText('programName Must contain only letters and sometimes hyphens')
  }
  async programNameWith2Char() {
    return await this.page.getByText('This field should start with an alphabet, no special char and min 2 char')
  }
  async requiredDesc(){
  return await this.page.getByText('Description is required.')
  }

  async clickAnywhere(x = 500, y = 300) {
    await this.page.mouse.click(x, y);
    console.log(`Clicked at coordinates (${x}, ${y})`);
  }

  async verifyMandatoryField(field) {
    const mandatoryField = this.page.locator('label').filter({ hasText: field }).locator('span');
    await expect(mandatoryField).toBeVisible();
  }

    verifyFieldRequired() {
    return  this.verifyFieldIsRequired;
  }
  
  async clickSave() {
    await this.saveButton.click();
  }
  async clickClose() {
    await this.closeButton.click();
  }

  async clickCancel() {
    await this.cancel_btn.click();
  }
//check locators from here for edit program
   async editProgram() {
     return await this.page.locator('//*[@id="editProgram"])[1]').click();
  }

  async clickEdit(value){
    this.page.getByRole('row', { name: `${value}` }).getByRole('button').first().click();
  }
  editProgramName() {
    return this.page.locator('input').filter({ name: 'Name *' }).first().fill('Updated Program Name');
  }
  verifyProgramName() {
    return this.page
  }
  editDescription() {
    return this.page.locator('textarea').filter({ name: 'Description *' }).first().fill('Updated Description');
  }
  async verifyDescription() {
    return await this.page.locator('textarea').filter({ name: 'Description *' }).first().value();
  }
  async changeStatus() {
    return await this.page.locator('.p-radiobutton-box').filter({ text: 'Active' }).first().click();
  }
 async verifyStatus() {
    return await this.page.locator('.p-radiobutton-box').filter({ text: 'Active' }).first().checked();
  }
async  verifyUpdatedProgram() {
    return await this.page.locator('input').filter({ name: 'Name *' }).first().value();
  }
 
  async searchProgram() {
    return await this.page.locator('input').filter({ name: 'Name *' }).first().fill('Updated Program Name');
  }

//check locators from here for search program
 async searchProgramByName() {
    return await  this.page.locator('input').filter({ name: 'Name *' }).first().fill('Program 1');
  }
 async searchProgramByDescription() {
    return await this.page.locator('input').filter({ name: 'Description *' }).first().fill('Description 1');
  }
 async searchProgramByPartialName() {
    return await this.page.locator('input').filter({ name: 'Name *' }).first().fill('Program');
  }
 async verifySearchedProgram() {
    return await this.page.locator('input').filter({ name: 'Name *' }).first().value();
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
 async clickDelete() {
    return await this.page.locator('button').filter({ text: 'Delete' }).first().click();
  }
 async confirmDeletion() {
    return await this.page.locator('h1').first();
  }
 async clickYes() {
    return await this.page.locator('button').filter({ text: 'Yes' }).first().click();
  }
 async confirmationMessage() {
    return await this.page.locator('h1').first();
  } 
async  noResults() {
    return await this.page.locator('p').first();
  }
async  clickNo() {
    return await this.page.locator('button').filter({ text: 'No' }).first().click();
  }
 async clickX() {
    return await this.page.locator('button').filter({ text: '' }).first().click();
  }
 async clickCancel() {
    return await this.page.locator('button').filter({ text: 'Cancel' }).first().click();
  }
 
} 