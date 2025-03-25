import { expect } from "@playwright/test";

class ClassPage {
  constructor(page) {
    this.page = page;
    this.batchDetails = page.getByText("Class Details");
    this.batchName = page.getByRole("textbox", { name: "Select a Batch Name" });
    this.classTopic = page.getByRole("textbox", { name: "Class Topic *" });
    this.classDescription = page.getByRole("textbox", {
      name: "Class Description",
    });
    this.classDate = page.locator("#icon");
    this.noOfClasses = page.locator('#classNo');
    this.staffName = page.locator("#staffId").getByRole("button", { name: "" }).filter({ visible: true });
      this.activeStatus = page.locator(".p-radiobutton-box").filter({ visible: true }).first();
      this.inactiveStatus = page.locator(
        "div:nth-child(3) > #category > .p-radiobutton > .p-radiobutton-box"
      ).filter({ visible: true });
    this.comments = page.getByRole("textbox", { name: "Comments" });
    this.notes = page.getByRole("textbox", { name: "Notes" });
    this.recording = page.locator("#classRecordingPath");
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.closeBatchpop = page.getByRole("button", { name: "" });
    this.successfullMsg = page.getByText("Successful", { exact: true });
    this.classCreatedSuccess = page.getByText("Class Created");
    this.errorMessages = page.locator("//*[@class='p-invalid ng-star-inserted']");
    //edit page locators
    this.editPageTitle = page.getByText('Class Details');
    this.batchNameField = page.locator('#batchName');
    this.classTopicField = page.locator('#classTopic'); 
    this.classUpdatedSuccess = page.getByText("Class Updated");
    this.classTopicCreated = "";
  }

  async enterClassDetails(
    batchName = "",
    classTopic = "",
    classDescription = "",
    classDate = "",
    staffName = "",
    comments = "",
    notes = "",
    recording = "",
    commonFunctions,
  ) {
    await this.page.pause();
    // Filling out the class creation form with dynamic values
    if (batchName) await this.batchName.fill(String(batchName));
    if (classTopic !== undefined && classTopic !== null) {
      await this.classTopic.fill(String(classTopic)); // Ensures valid input for Playwright
  }
    //  this.classTopicCreated = await this.classTopic.inputValue();
    // console.log(`Class Topic Created: ${this.classTopicCreated}`);
    if (classDescription !== undefined && classDescription !== null) {
      await this.classDescription.fill(String(classDescription));
  }
    await this.page.pause();
    if (classDate) {
    await this.classDate.click();
    await this.page.waitForTimeout(500); 
    await this.classDate.press("Control+A"); 
    await this.classDate.press("Backspace"); 
    await this.classDate.pressSequentially(classDate);
    await this.page.waitForTimeout(500); 
    await this.classDate.press("Tab");
    await this.classDescription.click();
    await this.classDescription.press("Tab");
    try {
    await this.page.waitForFunction(
      async () => {
        const inputField = document.querySelector("input#classNo"); 
        return inputField && inputField.value.trim() !== "";
      },
      { timeout: 5000 },
    );
  } catch (error) {
      console.error("Timeout: No. of Classes field was not populated within 5 seconds.", error);
  }
  }

    await this.page.waitForTimeout(1000);
    await this.page.pause();
    if (staffName) {
    await commonFunctions.selectDropdownOption(this.staffName, staffName);
    }
    await this.getNgReflectModelValue();
    await this.page.pause();
    await this.activeStatus.waitFor({ state: "visible" });
    await this.activeStatus.click();
    await this.page.pause();
    if (comments) await this.comments.fill(String(comments));
    if (notes) await this.notes.fill(String(notes));
    if (recording) await this.recording.fill(String(recording));
    await this.page.waitForTimeout(1000); 
    await this.page.pause();
  }


  


  async clickSave() {
    await this.saveButton.click();
  }
  async clickCancel() {
    await this.cancelButton.click();
  }
  async clickClose() {
    await this.closeBatchpop.click();
  }
  async getClassCreatedSuccessMessage() {
    return this.classCreatedSuccess.textContent();
  }

  async getClassUpdatedSuccessMessage() {
    return this.classUpdatedSuccess.textContent();
  }

  async getNgReflectModelValue() {
    try {
      await this.noOfClasses.waitFor({ state: 'visible', timeout: 5000 }); 
      const isValuePresent = await this.page.waitForFunction(
          (el) => el && el.value.trim() !== "", 
          await this.noOfClasses.elementHandle(),
          { timeout: 5000 }
      ).catch(() => null); 
      if (!isValuePresent) {
          console.warn("No. of Classes field remains empty as expected.");
          return null; 
      }

      const noOfClassesValue = await this.noOfClasses.inputValue(); 
      console.log(`Number of Classes generated: ${noOfClassesValue}`);
      return noOfClassesValue;
  } catch (error) {
      console.error(" Error retrieving No. of Classes value:", error);
      return null; 
  }
}

async verifyWeekendsAndPastDatesDisabled() {
  await this.classDate.click();
  const disabledDates = await this.page.locator("td .p-disabled");
  const disabledCount = await disabledDates.count();
  console.log(`Found ${disabledCount} disabled dates (weekends & past dates).`);
  return disabledCount > 0;
}

async getAllErrorMessages(validateColor = false) {
  const errorMessages = [];
  const errorMessageElements = await this.errorMessages.filter({ visible: true }).all();

  for (let i = 0; i < errorMessageElements.length; i++) {
    const errorMessageElement = errorMessageElements[i];
    const message = await errorMessageElement.textContent();

    if (validateColor) {
      const color = await errorMessageElement.evaluate(el => getComputedStyle(el).color);
      const expectedColors = ['rgb(255, 0, 0)', 'rgb(220, 53, 69)', 'rgb(217, 83, 79)']; // Different possible red shades

      if (!expectedColors.includes(color)) {
        throw new Error(`Error message color is incorrect for message: "${message}". Expected one of ${expectedColors}, got: ${color}`);
      }
    }

    errorMessages.push(message);
  }

  return errorMessages;
}

async clickEdit(value){
  this.page.getByRole('row', { name: `${value}` }).getByRole('button').first().click();
}

async isBatchNameFieldDisabled() {
   // Check for 'disabled' attribute on the first input inside the dropdown
   const disabledAttribute = await this.batchNameField.locator('input').first().getAttribute('disabled');
  
   // Check if the parent div has 'p-disabled' class
   const hasDisabledClass = await this.batchNameField.locator('..').evaluate(el => el.classList.contains('p-disabled'));
   
   // The field is disabled if it has a 'disabled' attribute or if the 'p-disabled' class is present
   return disabledAttribute !== null || hasDisabledClass;
}



async isClassTopicFieldDisabled() {
 // Check for 'disabled' attribute directly on the input field
 const disabledAttribute = await this.classTopicField.getAttribute('disabled');

 // Check if any ancestor has 'p-disabled' class
 const hasDisabledClass = await this.classTopicField.locator('xpath=ancestor::*[contains(@class, "p-disabled")]').count() > 0;

 console.log(`Disabled Attribute: ${disabledAttribute}`);
 console.log(`Has Disabled Class: ${hasDisabledClass}`);

 // The field is considered disabled if it has a 'disabled' attribute or the 'p-disabled' class is found
 return disabledAttribute !== null || hasDisabledClass;
}


async editEnterClassDetails(
  batchName = "",
  classTopic = "",
  classDescription = "",
  classDate = "",
  staffName = "",
  comments = "",
  notes = "",
  recording = "",
  commonFunctions,
) {
//   if (batchName) await this.batchName.fill(String(batchName));
//   if (classTopic !== undefined && classTopic !== null) {
//     await this.classTopic.fill(String(classTopic)); // Ensures valid input for Playwright
// }
  if (classDescription) await this.classDescription.fill(String(classDescription));
  await this.page.pause();  

  if (classDate) {
    // Click the date picker button to open the calendar
    await this.page.locator(".p-datepicker-trigger").click(); 
    await this.page.waitForTimeout(500); 
  
    // Check if the input field is editable (remove readonly if necessary)
    await this.classDate.evaluate(el => el.removeAttribute('readonly'));
  
    // Clear existing value
    await this.classDate.fill("");
    await this.classDate.evaluate(el => el.dispatchEvent(new Event('input', { bubbles: true })));
    await this.page.waitForTimeout(500);
  
    await this.classDate.click();
    
    await this.page.waitForTimeout(500); 
    await this.classDate.press("Control+A"); 
    await this.classDate.press("Backspace"); 
    await this.classDate.pressSequentially(classDate);
    await this.page.waitForTimeout(500); 
    await this.classDate.press("Tab");
    await this.classDescription.click();
    await this.classDescription.press("Tab");
    try {
    await this.page.waitForFunction(
      async () => {
        const inputField = document.querySelector("input#classNo"); 
        return inputField && inputField.value.trim() !== "";
      },
      { timeout: 5000 },
    );
  } catch (error) {
      console.error("Timeout: No. of Classes field was not populated within 5 seconds.", error);
  }
    console.log("Updated date successfully.");
  }

  await this.page.waitForTimeout(1000);
  await this.page.pause();  

  if (staffName) {
    await commonFunctions.selectDropdownOption(this.staffName, staffName);
  }

  await this.getNgReflectModelValue();
  await this.activeStatus.waitFor({ state: "visible" });
  await this.activeStatus.click();
  await this.page.pause();

  if (comments) await this.comments.fill(comments);
  if (notes)  await this.notes.fill(notes);
  if (recording) await this.recording.fill(recording);

  await this.page.waitForTimeout(1000); 
}



}
export { ClassPage };
