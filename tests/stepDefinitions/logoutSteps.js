import { test } from '../fixtures/fixture';
import { createBdd } from 'playwright-bdd';
import { expect } from '@playwright/test';
import { getTestData } from '../utils/excelReader';
const { Given, When, Then } = createBdd();

const sheet_Name = 'login';

Given('Admin is logged into the application', async ({loginPage}) => {
  await loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  await loginPage.login(process.env.USERNAME, process.env.PASSWORD);

  });
  
  Given('Admin is in home page', async ({loginPage}) => {
    const titleText = await loginPage.isTitleDisplayed();
    await expect(titleText).toBeVisible(); 
  });
  
  When('Admin clicks on the logout in the menu bar', async ({loginPage}) => {
    await loginPage.isLogoutButtonVisible();
    await loginPage.clickLogout();
  });
  
  Then('Admin should be redirected to login page', async ({loginPage},url) => {
    await loginPage.isLogoutButtonHidden();    
    await loginPage.waitForURL(url);

  });
  
  Given('Admin is logged out of the application', async ({loginPage}) => {
    await loginPage.isLogoutButtonVisible();
    await loginPage.clickLogout();
  });
  
  When('Admin is in login page and clicks browser back button', async ({loginPage}) => {
    await loginPage.clickBackButton();
  });
  Then('Admin should receive error message', async ({loginPage}) => {
    const errorMessage = await loginPage.getErrorMessage();
    //console.log(await loginPage.page.content());
    await expect(errorMessage).toBeVisible(); 
  });

  