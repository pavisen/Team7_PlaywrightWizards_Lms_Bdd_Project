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
}

export { LoginPage };
