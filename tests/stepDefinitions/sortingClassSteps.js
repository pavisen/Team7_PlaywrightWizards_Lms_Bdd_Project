import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from '../fixtures/fixture';
import { getTestData } from '../utils/excelReader.js';

const { Given, When, Then } = createBdd();

When('Admin clicks on the {string} sort icon', async ({ commonFunctions }, column) => {
  await commonFunctions.clickMenu('class');
});

Then('Admin should see Class details are sorted by {string}', async ({ commonFunctions }, column) => {
  const columns = ['Batch Name', 'Class Topic', 'Class Description', 'Status', 'Class Date', 'Staff Name'];
  const columnIndexMap = {};
  columns.forEach((col, index) => {
    columnIndexMap[col] = index + 2; // Start index from 2
  });
  const columnIndex = columnIndexMap[column];
  if (columnIndex === undefined) {
    throw new Error(`Invalid column name: ${column}`);
  }
  for (const col of columns) {
    const element = await commonFunctions.getSortIcon(col);
    await commonFunctions.clickSortIcon(element);
    let elementList = await commonFunctions.getCells(columnIndex)
    await commonFunctions.validateAscendingSort(elementList);
    await commonFunctions.clickSortIcon(element);
    elementList = await commonFunctions.getCells(columnIndex)
    await commonFunctions.validateDescendingSort(elementList);
  }
});



