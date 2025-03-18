import * as XLSX from 'xlsx';
import path from 'path';

/**
 * Read test data from the Excel file based on sheet name, scenario, and column name.
 * 
 * @param {string} sheetName - Name of the sheet to extract data from.
 * @param {string} scenario - The scenario to find the corresponding row.
 * @param {string} columnName - The column name to extract the value from.
 * @returns {string|null} - The value from the specified column for the given scenario, or null if empty or column not found.
 */
<<<<<<< HEAD
export function getTestData(sheetName , scenario , columnName) {
=======
export function getTestData(sheetName, scenario, columnName) {
>>>>>>> 71309cf2986c1adfd4412992f2c561d69b555fc6
  // Define the file path for the Excel file
  const filePath = path.resolve(__dirname, '../testData.xlsx'); // Adjust path accordingly
  const workbook = XLSX.readFile(filePath);

  // Get the specific sheet by name
  const sheet = workbook.Sheets[sheetName];
  if (!sheet) {
    throw new Error(`Sheet with name "${sheetName}" not found`);
  }

  // Convert the sheet to JSON (rows are represented as objects with column names as keys)
  const jsonData = XLSX.utils.sheet_to_json(sheet);

  // Loop through each row in the JSON data to find the correct scenario
  let scenarioRow = null;
  for (const row of jsonData) {
    if (row.scenario?.toLowerCase() === scenario.toLowerCase()) {
      scenarioRow = row; // Find the matching row for the scenario
      break; // Stop once the matching row is found
    }
  }

  // If the scenario row is not found, return null
  if (!scenarioRow) {
    console.warn(`Scenario "${scenario}" not found in sheet "${sheetName}"`);
    return null; // Return null if the scenario is not found
  }

  // Get the value from the specified column name, or return null if column is missing or empty
  const columnValue = scenarioRow[columnName];
  if (columnValue === undefined || columnValue === null || columnValue === '') {
    return null; // Return null if the column value is missing or empty
  }

  return columnValue; // Return the value from the column
}
