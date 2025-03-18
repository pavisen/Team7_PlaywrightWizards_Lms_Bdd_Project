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
}

export {CommonFunctions};
