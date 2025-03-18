
import { test } from '../fixtures/fixture';
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import { getTestData } from '../utils/excelReader'; // Importing the getTestData function


// Create BDD steps
const { Given, When, Then } = createBdd();

<<<<<<< HEAD

Given('Admin is on the home page after login', async function ({page}){
    this.loginPage = new LoginPage(page); 
    await this.loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
=======
Given('Admin is on the home page after login', async function ({loggedInPage}){
  
>>>>>>> 280ea59326630fbac344cbc6234beed2d26cfb27
  });
  
  When('Admin clicks the Class Navigation bar in the Header', async function ({commonFunctions}){
    await commonFunctions.clickMenu();
  });
  
  Then('Admin should see the {string} Title', async function({commonFunctions},expectedTitle){
    const actualTitle = await commonFunctions.getHeaderText();
    expect(actualTitle).toBe(expectedTitle);
  });

  Then('Admin should see the {string} Header', async function ({commonFunctions}, expectedText) {
    const actualText = await commonFunctions.moduleSelectors.class.manage_text.textContent();
    expect(actualText).toBe(expectedText);
  });


  // When('Admin enters {string} and {string} in the login form', async ({}, username, password) => {
  //   const testData = getTestData(); // Get data from Excel
  //   for (let data of testData) {
  //     console.log(`Attempting login with username: ${data.Username} and password: ${data.Password}`);
  //   }
  // });
  
  // Then('Admin should verify for data driven', async ({}) => {
  //  console.log("Data driven test completed");
  // });













  export { Given, When, Then };
  