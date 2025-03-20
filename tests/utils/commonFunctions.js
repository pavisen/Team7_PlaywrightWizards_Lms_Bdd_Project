import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";

const { Given, When, Then } = createBdd();

class CommonFunctions {
  constructor(page, module) {
    this.page = page;
    this.module = module;

    this.moduleSelectors = {
      program: {
        menu_btn: page.getByRole("button", { name: "Program" }),
        addNew_btn: page.getByRole("menuitem", { name: "Add New Program" }),
        manage_text: page.getByText("Manage Program"),
      },
      batch: {
        menu_btn: page.getByRole("button", { name: "Batch" }),
        addNew_btn: page.getByRole("menuitem", { name: "Add New Batch" }),
        manage_text: page.getByText(" Manage Batch"),
      },
      class: {
        menu_btn: page.getByRole("button", { name: "Class" }),
        addNew_btn: page.getByRole("menuitem", { name: "Add New Class" }),
        manage_text: page.getByText("Manage Class"),
      },
    };

    this.logout = page.getByText("Logout");
    this.header = page.getByText("LMS - Learning Management System");
    this.searchBar = page.getByRole("textbox", { name: "Search..." });
    this.tableHeader = page.locator("//*[@class='p-datatable-thead']/tr/th");
    this.tableRows = page.locator("//tbody/tr");
    // Pagination Locators
    this.paginationText = page.locator(
      "//span[@class='p-paginator-current ng-star-inserted']",
    );
    this.paginationButtons = page.locator(
      "//p-paginator[@class='ng-star-inserted']//button",
    );

    // Table icons locators
    this.locators = {
      editIcon: ".//span[@class='p-button-icon pi pi-pencil']",
      deleteIcon: ".//span[@class='p-button-icon pi pi-trash']",
      checkbox: ".//span[@class='p-checkbox-icon']",
      sortIcon: ".//*[@class='p-sortable-column-icon pi pi-fw pi-sort-alt']",
    };

    this.deleteButton = page.locator("//*[@class='box']//button");
    this.totalClassesText = page.locator(
      "//*[@class='p-datatable-footer ng-star-inserted']/div",
    );
  }

  async clickMenu(module) {
    if (!this.moduleSelectors[module]) {
      throw new Error(`Invalid module: ${module}`);
    }
    await this.moduleSelectors[module].menu_btn.waitFor({ state: "visible" });
    await this.moduleSelectors[module].menu_btn.click();
  }

  async clickSubMenu(module) {
    if (!this.moduleSelectors[module]) {
      throw new Error(`Invalid module: ${module}`);
    }
    await this.moduleSelectors[module].addNew_btn.waitFor({ state: "visible" });
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

  async clickDeleteButton() {
    return this.deleteButton;
  }

  async verifyTableHeaders(expectedHeaders) {
    // Locate the table header elements using XPath
    const headerCells = await this.tableHeader.allTextContents();

    // Check if the number of headers matches
    if (headerCells.length - 1 !== expectedHeaders.length) {
      return false;
    }
    // Compare each header text
    for (let i = 1; i < expectedHeaders.length + 1; i++) {
      if (headerCells[i].trim() !== expectedHeaders[i - 1].trim()) {
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

  async isElementPresent(elementType, locationType) {
    if (!this.locators[elementType]) {
      throw new Error(`Invalid element type: ${elementType}`);
    }

    const elementLocator = this.locators[elementType];

    if (locationType === "header") {
      // Get all sort icons inside headers
      const sortIcons = await this.page
        .locator(`xpath=${elementLocator}`)
        .all();
      // Verify that each header has a sort icon
      for (const icon of sortIcons) {
        if (!(await icon.isVisible())) {
          return false;
        }
      }
      return true;
    } else if (locationType === "row") {
      // Check in each row of the table
      const rows = await this.tableRows.count();

      for (let i = 0; i < rows; i++) {
        const row = this.tableRows.nth(i);
        const isElementVisible = await row
          .locator(`xpath=${elementLocator}`)
          .isVisible();

        if (!isElementVisible) {
          console.log(`${elementType} is missing in row ${i + 1}`);
          return false;
        }
      }
      return true;
    } else {
      throw new Error(`Invalid location type: ${locationType}`);
    }
  }

  async getTotalClasses() {
    const footerText = await this.totalClassesText.textContent(); // Get the full text
    const match = footerText.match(/In total there are (\d+) classes\./); // Extract the number

    if (match) {
      const totalClasses = parseInt(match[1], 10); // Convert to number
      return totalClasses;
    } else {
      throw new Error(
        `Could not extract total classes count from text: "${footerText}"`,
      );
    }
  }

  async selectDropdownOption(dropdown, optionText) {
    await dropdown.click();
    const optionLocator = this.page.getByRole("option", { name: optionText });
    await optionLocator.waitFor({ state: 'visible' });
    // Retry the click if element becomes unstable
    try {
      await optionLocator.click();
    } catch (error) {
      console.log("Retrying to click the option...");
      await optionLocator.waitFor({ state: 'visible' });
      await optionLocator.click();
    }
  } catch (error) {
    console.error("Error in selecting dropdown option:", error);
  }
  
}

export { CommonFunctions };
