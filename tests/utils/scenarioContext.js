// class ScenarioContext {
//   constructor() {
//     this.data = {}; // Storage object
//   }

//   // Store a value
//   setValue(key, value) {
//     if (value === undefined) {
//       console.error(`Warning: Attempted to store undefined for key "${key}". Skipping.`);
//       return;
//     }
//     this.data[key] = value; // Store data
//     console.log(`Stored value - Key: ${key}, Type: ${typeof value}, Value: ${value}`);
//   }

//   // Retrieve a value
//   getValue(key) {
//     const value = this.data[key];
//     if (value === undefined) {
//       console.error(`Warning: Key "${key}" not found. Returning default value.`);
//       return ''; // Return a default value like an empty string
//     }
//     return value;
//   }

//   // Clear all stored values
//   clear() {
//     this.data = {}; // Clear the context
//   }
// }

// export default ScenarioContext; // Export the class, not a global instance