import fs from 'fs';

const TEST_DATA_FILE = "testData.json";

export function saveTestData(data) {
    fs.writeFileSync(TEST_DATA_FILE, JSON.stringify(data, null, 2));
}

// Load data from a JSON file
export function loadTestData() {
    if (fs.existsSync(TEST_DATA_FILE)) {
        return JSON.parse(fs.readFileSync(TEST_DATA_FILE));
    }
    return {}; // Default empty object
}