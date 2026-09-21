import dotenv from "dotenv";

export const ENV = process.env.ENV || "staging";

dotenv.config({ path: `.env.${ENV}` });

export const BASE_URL = process.env.BASE_URL!
export const USERNAME = process.env.USERNAME!
export const PASSWORD = process.env.PASSWORD!

console.log(`Running tests on ${ENV.toUpperCase()} environment`);
console.log(`Base URL: ${BASE_URL}`);