/*
import { expect } from require('@playwright/test');
import {XLSX } from require('xlsx');


async function readExcelData(filePath) {
    const workbook = XLSX.readFile(filePath);
    const sheetName = workbook.SheetNames[0];
    const worksheet = workbook.Sheets[batch];
    return XLSX.utils.sheet_to_json(worksheet);
}

module.exports = { readExcelData };*/