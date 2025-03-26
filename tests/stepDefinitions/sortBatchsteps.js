import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";
import { getTestData } from "../utils/excelReader.js";

const { Given, When, Then } = createBdd();
let currentColumnIndex = 2;

Then(
  "Admin should see Batch details are sorted by {string}",
  async ({ commonFunctions }, columnField) => {
    // Get the column index for the given columnField (using it directly without predefined columns array)
    if (!columnField) {
      throw new Error("columnField is undefined or empty");
    }
    // Perform ascending sort
    const element = await commonFunctions.getSortIcon(columnField);
    try {
      await commonFunctions.clickSortIcon(element);
      let elementList = await commonFunctions.getCells(currentColumnIndex);
      console.log("Ascending Sort List:", elementList);
      await commonFunctions.validateAscendingSort(elementList);

      // Perform descending sort
      await commonFunctions.clickSortIcon(element);
      elementList = await commonFunctions.getCells(currentColumnIndex);
      console.log("Descending Sort List:", elementList);
      await commonFunctions.validateDescendingSort(elementList);
    } finally {
      // Ensuring the column index increments even if assertions fail
      currentColumnIndex += 1;
      console.log(`Next column index: ${currentColumnIndex}`);
    }
  },
);
