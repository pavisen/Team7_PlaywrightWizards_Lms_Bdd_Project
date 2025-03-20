import winston from 'winston';
import path from 'path';

// Define log file path
const logFilePath = path.join(process.cwd(), 'logs', 'playwright.log');

// Create Winston logger instance
const logger = winston.createLogger({
    level: 'info',  
    format: winston.format.combine(
        winston.format.timestamp(),
        winston.format.printf(({ timestamp, level, message }) => {
            return `[${timestamp}] ${level.toUpperCase()}: ${message}`;
        })
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: logFilePath })
    ]
});

// Function to Attach Logs to Allure Reports
export function attachLogsToAllure(allure) {
    if (fs.existsSync(logFilePath)) {
        const logs = fs.readFileSync(logFilePath, 'utf8');
        allure.attachment('Playwright Logs', logs, 'text/plain');
    }
}

// Ensure logs are always attached after each test
export function attachLogsAfterEachTest(allure) {
    process.on('exit', () => {
        attachLogsToAllure(allure);
    });
}

export default logger;
