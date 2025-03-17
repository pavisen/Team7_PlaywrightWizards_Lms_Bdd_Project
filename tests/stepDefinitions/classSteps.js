
import { expect } from '@playwright/test';
import { createBdd } from 'playwright-bdd';
import CommonFunctions from '../utils/commonFunctions.js'; 
import LoginPage from '../pages/loginPage.js'; 


// Create BDD steps
const { Given, When, Then } = createBdd();


Given('Admin is on the home page after login', async function ({page}){
    this.loginPage = new LoginPage(page); 
    await this.loginPage.navigateToLoginPage(process.env.LOGIN_URL);
  await this.loginPage.login(process.env.USERNAME, process.env.PASSWORD);
  });
  
  When('Admin clicks the Class Navigation bar in the Header', async function ({page}){
    this.commonFunctions = new CommonFunctions(page, 'class'); 
    await this.commonFunctions.clickMenu();
  });
  
  Then('Admin should see the {string} Title', async function({page},expectedTitle){
    const actualTitle = await this.commonFunctions.getHeaderText();
  expect(actualTitle).toBe(expectedTitle);
  });

  Then('Admin should see the {string} Header', async function ({page}, expectedText) {
    const actualText = await this.commonFunctions.moduleSelectors.class.manage_text.textContent();
    expect(actualText).toBe(expectedText);
  });
















  export { Given, When, Then };
  