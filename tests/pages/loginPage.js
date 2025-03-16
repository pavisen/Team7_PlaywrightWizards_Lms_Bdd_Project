import { expect } from "@playwright/test";

class LoginPage {
  constructor(page) {
    if (!page) throw new Error("Page is undefined in LoginPage constructor");
    this.page = page;
  }

  async navigateToLoginPage(url) {
    await this.page.goto(url);
  }

  async login(username, password) {
    const usernameInput = this.page.getByRole('textbox', { name: 'User' });
    const passwordInput = this.page.getByRole('textbox', { name: 'Password' });
    const submitButton = this.page.getByRole('button', { name: 'Login' });

    await usernameInput.fill(username);
    await passwordInput.fill(password);
    await submitButton.click();
  }

 

  async verifyLoginSuccess() {
    await expect(this.page.locator("text=LMS - Learning Management System")).toBeVisible();
  }
}

export default LoginPage;
