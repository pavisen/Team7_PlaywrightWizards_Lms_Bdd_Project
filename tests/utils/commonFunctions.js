import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';

const { Given, When, Then } = createBdd();

class CommonFunctions {
  constructor(page, module) {
    this.page = page;
    this.module = module;

    this.moduleSelectors = {
      program: {
        menu_btn: page.getByRole('button', { name: 'Program' }),
        addNew_btn: page.getByRole('menuitem', { name: 'Add New Program' }),
        manage_text: page.getByText('Manage Program'),
      },
      batch: {
        menu_btn: page.getByRole('button', { name: 'Batch' }),
        addNew_btn: page.getByRole('menuitem', { name: 'Add New Batch' }),
        manage_text: page.getByText(' Manage Batch'),
      },
      class: {
        menu_btn: page.getByRole('button', { name: 'Class' }),
        addNew_btn: page.getByRole('menuitem', { name: 'Add New Class' }),
        manage_text: page.getByText('Manage Class'),
      },
    };

    this.logout = page.getByText('Logout');
    this.header = page.getByText('LMS - Learning Management System');
    this.searchBar = page.getByRole('textbox', { name: 'Search...' })
    this.tableHeader = "//*[@class='p-datatable-thead']/tr/th";
     // Pagination Locators
     this.paginationText = page.locator("//span[@class='p-paginator-current ng-star-inserted']");
     this.paginationButtons = page.locator("//p-paginator[@class='ng-star-inserted']//button");
  
  }

  async clickMenu(module) {
    if (!this.moduleSelectors[module]) {
      throw new Error(`Invalid module: ${module}`);
    }
    await this.moduleSelectors[module].menu_btn.waitFor({ state: 'visible' });
    await this.moduleSelectors[module].menu_btn.click();
  }

  
  async clickSubMenu(module) {
    if (!this.moduleSelectors[module]) {
      throw new Error(`Invalid module: ${module}`);
    }
    await this.moduleSelectors[module].addNew_btn.waitFor({ state: 'visible' });
    await this.moduleSelectors[module].addNew_btn.click();
  }

  async getLogoutElement() {
    return this.logout;
  }

  async getHeaderText() {
    return await this.header.textContent();
  }

  async getAddNewElement() {
    return this.moduleSelectors[this.module].addNew_btn;
  }

  async getManageText() {
    return await this.moduleSelectors[this.module].manage_text.textContent();
  }
  
  async clickSearchBar() {
    return this.searchBar;
  }

  async verifyTableHeaders(expectedHeaders) {
    // Locate the table header elements using XPath
    const headerCells = await this.page.locator(`xpath=${this.tableHeader}`).allTextContents();
  
    // Check if the number of headers matches
    if (headerCells.length-1 !== expectedHeaders.length) {
       return false;
    }
    // Compare each header text
    for (let i = 1; i < expectedHeaders.length+1; i++) {
      if (headerCells[i].trim() !== expectedHeaders[i-1].trim()) {
        return false;
      }
    }
    return true;
  }

  async getPaginationText() {
    return await this.paginationText.textContent();
  }

  async getPaginationButtons() {
    return await this.paginationButtons;
  }

    // This method checks if the pagination buttons are visible
    async arePaginationButtonsVisible() {
      const buttons = await this.paginationButtons;
      const buttonCount = await buttons.count();
  
      // Check if all buttons are visible
      for (let i = 0; i < buttonCount; i++) {
        const button = buttons.nth(i);
        const isVisible = await button.isVisible();
        if (!isVisible) {
          return false; // If any button is not visible, return false
        }
      }
      return true; // All buttons are visible
    }
  }








export {CommonFunctions};
