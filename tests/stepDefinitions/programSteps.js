// import { expect } from '@playwright/test';
// import { createBdd } from 'playwright-bdd';
// import ProgramPage from '../pages/program.js';
// import dotenv from 'dotenv';
// dotenv.config();

// // Create BDD steps
// const { Given, When, Then } = createBdd();
 
// Given(`Admin is on home page page after Login`, async function() {
//     const currentURL = this.page.url();
//     console.log(`Current URL: ${currentURL}`);
     
// });

// When(`Admin clicks Program on the navigation bar`, async function() {
   
//     await this.programPage.click_program();
// });

// Then(`Admin should be navigated to Program Page`,  async function() {
//     const currentURL = this.page.url();
//     console.log(`Current URL: ${currentURL}`);
//     expect(currentURL).toContain('program');
       
// });


// When(`Admin clicks program on the menu bar`, async function() {
//     await this.programPage.click_program();
    
// });

// Then(`Admin should see Logout option`, async function () {
//     await this.programPage.logout_menubar();
//     expect(await this.programPage.logout_menubar()).toBeTruthy();
// });

// // Then(`Admin should see the heading LMS - Learning Management System`, async function() {
// //     const actual_text = await this.programPage.validate_headerLms();
// //     expect(actual_text.trim()).toBe('LMS - Learning Management System');
// // });

// // Then(`Admin should see the page names as in order Home Program Batch Class`, () => {
// //     // [Then] Describes the expected outcome or result of the scenario.
// // });

// // Then(`Admin should see sub menu in menu bar as Add New Program`, async function() {
// //     await this.programPage.validate_addNewProgram();
   
// // });

// // Then(`Admin should see the heading Manage Program`, async function() {
// //     const actual_text = await this.programPage.validate_manageprogram();
// //     expect(actual_text.trim()).toBe('Manage Program');
    
// // });