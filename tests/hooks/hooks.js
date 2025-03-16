import { createBdd } from 'playwright-bdd';
import fs from 'fs';

const { Before, After } = createBdd();

Before(async ({ page }) => {
  console.log("✅ Before Hook: Page is available.");
});

After(async ({ page, testInfo }) => {
  try {
    if (!fs.existsSync("./reports/screenshots")) {
      fs.mkdirSync("./reports/screenshots", { recursive: true });
    }

    if (testInfo.status === 'failed') {
      const screenshot = await page.screenshot();
      const scenarioName = testInfo.title.replace(/\s+/g, "_");
      fs.writeFileSync(`./reports/screenshots/${scenarioName}.png`, screenshot);
      console.log(`📸 Screenshot saved for failed test: ${scenarioName}`);
    }
  } catch (error) {
    console.error("❌ Error capturing screenshot:", error);
  }
});
