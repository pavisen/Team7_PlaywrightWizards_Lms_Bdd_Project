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
    this.links = page.locator('link');
    this.login_header = page.getByText('Please login to LMS application')
    //this.asterisk = page.locator('//span[contains(text(),"*")]');

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

  async getFirstFieldText() {
    return await this.usernameFieldLabel.textContent();
  }

  async verifyURL() {
    try {
      await this.page
      const response = await this.page.goto('https://playwright-frontend-app-a9ea8579ad9.herokuapp.com/logi', {
        timeout: 60000, // Set a longer timeout if needed
        waitUntil: 'load'
      });

      if (response) {
        const status = response.status();
        if (status >= 400) {
          console.log(`This is a Broken URL ${status}`);
        }
      }
      else {
        console.log('No response from the URL')
      }
    }
    catch (error) {
      console.error('Navigation error:', error);
    }
  }

  async verifyBrokenLink() {
    const linksCount = await this.links.count();
    for (let i = 0; i < linksCount; i++) {
      const url = await (this.links).nth(i).getAttribute('href');
      if (url) {
        try {
          // Verify the URL using axios to make an HTTP request
          const response = await axios.get(url);
          console.log(`URL: ${url} - Status: ${response.status}`);
        } catch (error) {
          console.error(`Error with URL: ${url} - ${error.message}`);
        }
      } else {
        console.warn('Link without href found');
      }
    }
  }


  async verifySpellingofFields() {
    expect(this.login_header).toHaveText('Please login to LMS application');

  }

  async verifyTextField() {
    expect(await this.username).toHaveAttribute('data-placeholder')
    expect(await this.password).toHaveAttribute('data-placeholder')
  }

  async userTextFieldAssertion() {
    expect(await this.username).toHaveAttribute('data-placeholder', 'User')
  }

  async getLoginText() {
    return await this.login_header.textContent();
  }

  async verifyTextFields() {
    expect(await this.usernameInput).toHaveAttribute('ng-reflect-placeholder', 'User');
    expect(await this.passwordInput).toHaveAttribute('ng-reflect-placeholder', 'Password');
  }
}
export { LoginPage };