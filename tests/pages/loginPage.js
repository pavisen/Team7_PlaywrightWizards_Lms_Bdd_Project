import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
   // if (!page) throw new Error("Page is undefined in LoginPage constructor");
    this.page = page;
    this.usernameInput = this.page.getByRole('textbox', { name: 'User' });  
    this.passwordInput = this.page.getByRole('textbox', { name: 'Password' }); 
    this.submitButton = this.page.getByRole('button', { name: 'Login' });   
    this.dashboardText = this.page.locator("text=LMS - Learning Management System"); 
    this.errorMessage = this.page.locator('text=Invalid username and password'); 
    this.emptyUsernameErrorLocator = this.page.getByText('Please enter your user name') 
    this.emptyPasswordErrorLocator = this.page.getByText('Please enter your password') 
    this.passwordFieldLabel = page.locator('//*[text()="Password"]');
    this.usernameFieldLabel = page.locator('//*[text()="User"]');
    this.asterisk = page.locator('xpath=//*[@id="mat-form-field-label-1"]/span[2]');
    this.logoutButton = this.page.getByRole('button', { name: 'Logout' });  
    this.lmsTitle = this.page.locator('text=LMS - Learning Management System');


    
  }

  async navigateToLoginPage(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
     // Ensure username and password are strings, otherwise provide default empty strings
     const usernameStr = typeof username === 'string' ? username : '';
     const passwordStr = typeof password === 'string' ? password : '';
    await this.usernameInput.fill(usernameStr);
    await this.passwordInput.fill(passwordStr);
    await this.submitButton.click();
  }

  async getDashboardText() {
    return this.dashboardText;
  }

  async getErrorMessage() {
    return this.errorMessage;
  }

  async getEmptyUsernameError() {
    return this.emptyUsernameErrorLocator;
  }
  async getEmptyPasswordError() {
    return this.emptyPasswordErrorLocator;
  }
  async isAsteriskPresent() {
    return await this.asterisk.isVisible();
}
async getSecondFieldText() {
  return await this.passwordFieldLabel.textContent();
}

async isInputFieldCentered() {
  const box = await this.usernameInput.boundingBox();
  const viewport = await this.page.viewportSize();
  return Math.abs((viewport.width / 2) - (box.x + box.width / 2)) < 10; // Checks if centered within 10px tolerance
}

async isLoginButtonPresent() {
  return await this.submitButton.isVisible();
}

async getUserFieldPlaceholderColor() {
  return await this.usernameFieldLabel.evaluate(el => getComputedStyle(el).color);
}

async getPasswordFieldPlaceholderColor() {
  return await this.passwordFieldLabel.evaluate(el => getComputedStyle(el).color);
}
async clickLogout() {
  await this.logoutButton.click(); 
}

async isLogoutButtonVisible() {
  await expect(this.logoutButton).toBeVisible();  
}

async waitForURL(url) {
  await this.page.waitForURL(process.env.LOGIN_URL);  // Wait for the URL to match
}


async isLogoutButtonHidden() {
  await expect(this.logoutButton).toBeHidden();  
}

async isTitleDisplayed() {
  return this.lmsTitle;

}
async clickBackButton() {
  await this.page.goBack();
}

}
export { LoginPage };