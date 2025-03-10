import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import LoginPage from "../pages/loginPage.js";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();


Given("I am on the login page", async function () {
  const loginPage = new LoginPage(this.page);
  if (!process.env.LOGIN_URL) {
    throw new Error("LOGIN_URL is not defined in .env file");
  }

  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  await this.page.waitForLoadState('load');
});

When("I enter valid credentials", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.enterUsername(process.env.USERNAME);
  await loginPage.enterPassword(process.env.PASSWORD);
  await loginPage.submitLogin();
   await this.page.waitForTimeout(500); 
});

Then("I should be logged in successfully", async function () {
  const loginPage = new LoginPage(this.page);
  await loginPage.verifyLoginSuccess();
});
