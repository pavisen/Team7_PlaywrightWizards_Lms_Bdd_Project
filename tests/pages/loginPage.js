const { expect } = require("@playwright/test");

class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.getByRole('textbox', { name: 'User' });
    this.passwordInput = page.getByRole('textbox', { name: 'Password' });
    this.submitButton = page.getByRole('button', { name: 'Login' });
    this.welcomeText = "LMS - Learning Management System";
  }

  async navigateToLoginPage(url) {
    await this.page.goto(url);
  }

  async enterUsername(username) {
    await this.usernameInput.click();
    await this.usernameInput.fill(username);
  }

  async enterPassword(password) {
    await this.passwordInput.click();  
    await this.passwordInput.fill(password);
  }

  async submitLogin() {
    await this.submitButton.click();
  }

  async verifyLoginSuccess() {
    await this.page.waitForSelector(`text=${this.welcomeText}`);
    const welcomeText = await this.page.textContent(`text=${this.welcomeText}`);
    expect(welcomeText).toBe(" LMS - Learning Management System ");
  }
}

module.exports = LoginPage;
