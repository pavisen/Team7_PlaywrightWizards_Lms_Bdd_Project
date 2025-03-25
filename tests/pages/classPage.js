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
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.closeBatchpop = page.getByRole("button", { name: "" });
    this.successfullMsg = page.getByText("Successful", { exact: true });
    this.classCreatedSuccess = page.getByText("Class Created");
    this.errorMessages = page.locator("//*[@class='p-invalid ng-star-inserted']");
    this.editPageTitle = page.getByText('Class Details');
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
    // Filling out the class creation form with dynamic values
    if (batchName) await this.batchName.fill(batchName);
    if (classTopic) await this.classTopic.fill(classTopic);
     this.classTopicCreated = await this.classTopic.inputValue();
    console.log(`Class Topic Created: ${this.classTopicCreated}`);
    if (classDescription) await this.classDescription.fill(classDescription);
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
    if (staffName) {
    await commonFunctions.selectDropdownOption(this.staffName, staffName);
    }
    await this.getNgReflectModelValue();
    await this.activeStatus.waitFor({ state: "visible" });
    await this.activeStatus.click();

    if (comments) await this.comments.fill(comments);
    if (notes)  await this.notes.fill(notes);
    if (recording) await this.recording.fill(recording);
    await this.page.waitForTimeout(1000); 
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

async getAllErrorMessages() {
const errorMessages = [];
const errorMessageElements = await this.errorMessages.filter({ visible: true }).all();
for (let i = 0; i < errorMessageElements.length; i++) {
  const errorMessageElement = errorMessageElements[i];
  const message = await errorMessageElement.textContent();
  const color = await errorMessageElement.evaluate(el => getComputedStyle(el).color);
  const expectedColor = 'rgb(255, 0, 0)'; // Red color in RGB
  if (color !== expectedColor) {
    throw new Error(`Error message color is not red for message: "${message}". Expected color: ${expectedColor}, got: ${color}`);
  }
  errorMessages.push(message);
}

return errorMessages;
}

async clickEdit(value){
  this.page.getByRole('row', { name: `${value}` }).getByRole('button').first().click();
}




}
export { ClassPage };
