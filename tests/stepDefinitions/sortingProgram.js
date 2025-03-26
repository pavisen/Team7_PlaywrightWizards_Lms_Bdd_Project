import { expect } from "@playwright/test";
import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/fixture";
import { getTestData } from "../utils/excelReader.js";
import { saveTestData, loadTestData } from "../utils/testDataHelper.js";

const { Given, When, Then } = createBdd();

Given("Admin is on the program Page", async function ({ loggedInPage }) {});

When(
  "Admin clicks on Arrow next to programName",
  async ({ commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickAnywhere();
  },
);

Then(
  "Admin See the Program Name is sorted in Ascending order or Descending order",
  async ({ commonFunctions }) => {
    const element = await commonFunctions.getSortIcon("Program Name");
    await commonFunctions.clickSortIcon(element);
    const PROGRAM_NAME = 2;
    let elementList = await commonFunctions.getCells(PROGRAM_NAME);
    await commonFunctions.validateAscendingSort(elementList);
    await commonFunctions.clickSortIcon(element);
    elementList = await commonFunctions.getCells(PROGRAM_NAME);
    await commonFunctions.validateDescendingSort(elementList);
  },
);

When(
  "Admin clicks on Arrow next to Program Description",
  async ({ commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickAnywhere();
    const ele = await commonFunctions.getSortIcon("Program Description");
    await commonFunctions.clickSortIcon(ele);
  },
);

Then(
  "Admin See the program Description is sorted in Ascending order or Descending order",
  async ({ commonFunctions }) => {
    const PROGRAM_DESC = 3;
    let els = await commonFunctions.getCells(PROGRAM_DESC);
    const ele = await commonFunctions.getSortIcon("Program Description");
    await commonFunctions.validateAscendingSort(els);
    await commonFunctions.clickSortIcon(ele);
    els = await commonFunctions.getCells(PROGRAM_DESC);
    await commonFunctions.validateDescendingSort(els);
  },
);

When(
  "Admin clicks on Arrow next to Program status",
  async ({ commonFunctions }) => {
    await commonFunctions.clickMenu("program");
    await commonFunctions.clickAnywhere();
    const ele = await commonFunctions.getSortIcon("Program Status");
    await commonFunctions.clickSortIcon(ele);
  },
);

Then(
  "Admin See the  Program Status is sorted in Ascending order or Descending order",
  async ({ commonFunctions }) => {
    const PROGRAM_STATUS = 4;
    let els = await commonFunctions.getCells(PROGRAM_STATUS);
    const ele = await commonFunctions.getSortIcon("Program Status");
    await commonFunctions.validateAscendingSort(els);
    await commonFunctions.clickSortIcon(ele);
    els = await commonFunctions.getCells(PROGRAM_STATUS);
    await commonFunctions.validateDescendingSort(els);
  },
);
