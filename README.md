# Playwright Login Automation

This project automates the login functionality of the Practice Test Automation website using **Playwright with TypeScript**.

The framework follows the **Page Object Model (POM)** design pattern and includes data-driven login scenarios, reusable page methods, environment-based configuration, and Playwright assertions.

## Application Under Test

**Practice Test Login:**\
`https://practicetestautomation.com/practice-test-login/`

## Tech Stack

-   Playwright
-   TypeScript
-   Node.js
-   npm
-   Page Object Model (POM)

## Project Structure

``` text
playwright-login-automation/
├── docs/
│   ├── functional-test-cases.md
│   └── test-execution-report.png
├── src/
│   ├── config/
│   │   └── env.ts
│   ├── pages/
│   │   ├── base.page.ts
│   │   └── login.page.ts
│   ├── routes/
│   │   └── routes.ts
│   ├── test-data/
│   │   └── login.data.ts
│   └── types/
│       └── auth.types.ts
├── tests/
│   └── login.spec.ts
├── .env.example
├── .gitignore
├── package.json
├── playwright.config.ts
├── tsconfig.json
└── README.md
```

## Functional Test Coverage

The project includes **10 functional test cases** for the login
functionality:

-   5 Positive test cases
-   5 Negative test cases
-   4 test scenarios automated using Playwright

Detailed functional test cases are available in:

`docs/functional-test-cases.md`

### Automated Scenarios

1.  Login with valid credentials
2.  Login with invalid credentials
3.  Login with invalid username
4.  Login with invalid password

## Prerequisites

Make sure the following are installed:

-   Node.js
-   npm
-   Git

Verify the installation:

``` bash
node --version
npm --version
```

## Installation

Clone the repository:

``` bash
git clone <repository-url>
```

Navigate to the project directory:

``` bash
cd playwright-login-automation
```

Install project dependencies:

``` bash
npm install
```

Install Playwright browsers:

``` bash
npx playwright install
```

## Environment Setup

Create a `.env` file in the project root.

You can use `.env.example` as a reference.

``` env
BASE_URL=<application-base-url>
USERNAME=<username>
PASSWORD=<password>
```

> The `.env` file is excluded from version control.

## Running Tests

Run all tests:

``` bash
npx playwright test
```

Run tests in headed mode:

``` bash
npx playwright test --headed
```

Run tests only on Chromium:

``` bash
npx playwright test --project=chromium
```

Run a specific test file:

``` bash
npx playwright test tests/login.spec.ts
```

## Test Report

The project uses Playwright's built-in **HTML Reporter**.

After test execution, open the report using:

``` bash
npx playwright show-report
```

The report provides details such as:

-   Test execution status
-   Passed and failed tests
-   Execution duration
-   Failure details
-   Screenshots and videos for failed tests

A sample test execution result is available under:

`docs/test-execution-report.png`

## Framework Features

-   Page Object Model (POM)
-   TypeScript
-   Data-driven login tests
-   Reusable login methods
-   Environment-based configuration
-   Playwright web-first assertions
-   HTML test reporting
-   Screenshots on failure
-   Videos retained on failure
-   Trace collection on first retry

## Assertions

Successful login is validated using:

-   Successful login page URL
-   `Logged In Successfully` message

Negative login scenarios are validated using the appropriate username or
password error message.

## Author

Ankush Nikure
