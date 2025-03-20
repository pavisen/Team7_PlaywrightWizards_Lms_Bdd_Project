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
    this.noOfClasses = page.locator("//input[@id='classNo']");
    this.staffName = page
      .locator("#staffId")
      .getByRole("button", { name: "" });
    this.activeStatus = page.locator(".p-radiobutton-box").first();
    this.inactiveStatus = page.locator(
      "div:nth-child(3) > #category > .p-radiobutton > .p-radiobutton-box",
    );
    this.comments = page.getByRole("textbox", { name: "Comments" });
    this.notes = page.getByRole("textbox", { name: "Notes" });
    this.recording = page.locator("#classRecordingPath");
    this.saveButton = page.getByRole("button", { name: "Save" });
    this.cancelButton = page.getByRole("button", { name: "Cancel" });
    this.closeBatchpop = page.getByRole("button", { name: "" });
    this.successfullMsg = page.getByText("Successful", { exact: true });
    this.classCreatedSuccess = page.getByText("Class Created");
    this.classSearchField = page.getByRole("textbox", { name: "Search..." });

    this.classTopicCreated = "";
  }

  async enterClassDetails(
    batchName,
    classTopic,
    classDescription,
    classDate,
    staffName,
    comments,
    notes,
    recording,
    commonFunctions,
  ) {
    // Filling out the class creation form with dynamic values
    await this.batchName.fill(batchName);
    await this.classTopic.fill(classTopic);
    this.classTopicCreated = await this.classTopic.inputValue();
    console.log(`Class Topic Created: ${this.classTopicCreated}`);

    await this.classDescription.fill(classDescription);

    // ✅ Click on the Class Date field
    await this.classDate.click();
    await this.page.waitForTimeout(500); // Wait for it to become active

    // ✅ Clear the existing value (if any)
    await this.classDate.press("Control+A"); // Select all text
    await this.classDate.press("Backspace"); // Delete selected text

    // ✅ Type the date manually instead of fill()
    await this.classDate.pressSequentially(classDate);
    await this.page.waitForTimeout(500); // Small wait for UI update

    // ✅ Press Tab to move focus and close the date picker
    await this.classDate.press("Tab");

    // ✅ Click on the Class Description field to close the date picker
    await this.classDescription.click();

    // ✅ Press Tab to move focus and close the date picker
    await this.classDescription.press("Tab");

    // ✅ Ensure No. of Classes field is populated before proceeding
    await this.page.waitForFunction(
      async () => {
        const inputField = document.querySelector("input#classNo"); // Define the locator inside waitForFunction
        return inputField && inputField.value.trim() !== "";
      },
      { timeout: 5000 },
    );

    const noOfClassesLocator = this.page.locator("//input[@id='classNo']");
    const noOfClassesValue = await noOfClassesLocator.inputValue();

    console.log(`Number of Classes generated: ${noOfClassesValue}`);

    await this.page.waitForTimeout(1000);

    await commonFunctions.selectDropdownOption(this.staffName, staffName);

    await this.activeStatus.waitFor({ state: "visible" });
    await this.activeStatus.click();

    await this.comments.fill(comments);
    await this.notes.fill(notes);
    await this.recording.fill(recording);
  }

  async clickSave() {
    await this.saveButton.click();
  }

  async getClassCreatedSuccessMessage() {
    return this.classCreatedSuccess.textContent();
  }
  async classSearch() {
    const classTopicCreated = this.classTopicCreated; // Get the stored value
    await this.classSearchField.click();
    await this.classSearchField.fill(classTopicCreated);
    await expect(
      this.page.getByRole("gridcell", { name: classTopicCreated }),
    ).toBeVisible();
  }
}
export { ClassPage };
