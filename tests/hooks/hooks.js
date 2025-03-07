import { Before, After, Status } from "@cucumber/cucumber";
import fs from "fs";
import { chromium } from "playwright";

Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  try {
    if (!fs.existsSync("./reports/screenshots")) {
      fs.mkdirSync("./reports/screenshots", { recursive: true });
    }

    if (this.page && scenario.result.status === Status.FAILED) {
      const screenshot = await this.page.screenshot();
      fs.writeFileSync(
        `./reports/screenshots/${scenario.pickle.name.replace(/\s+/g, "_")}.png`,
        screenshot
      );
    }
  } catch (error) {
    console.error("Error capturing screenshot:", error);
  } finally {
    if (this.browser) {
      await this.browser.close();
    }
  }
});
