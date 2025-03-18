

import * as XLSX from 'xlsx';
import path from 'path';

export function getTestData(sheetName = 'Sheet1', scenario = '', columnName = '') {
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

  // Find the row for the specified scenario (case insensitive)
  const scenarioRow = jsonData.find(row => row.scenario?.toLowerCase() === scenario.toLowerCase()); 
  if (!scenarioRow) {
    throw new Error(`Scenario "${scenario}" not found in sheet "${sheetName}"`);
  }

  // Get the value from the specified column name
  if (!(columnName in scenarioRow)) {
    throw new Error(`Column "${columnName}" not found in sheet "${sheetName}"`);
  }

  // Return the value, or null if empty
  return scenarioRow[columnName] !== undefined ? scenarioRow[columnName] : null;
}
