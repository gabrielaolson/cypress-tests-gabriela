# Cypress Automation Framework

This project is an end-to-end and API test automation framework built with **Cypress** and **JavaScript**, following the **Page Object Model (POM)** design pattern to improve code reusability, readability, and maintainability.

## Tech Stack

- Cypress
- JavaScript
- Page Object Model (POM)
- Allure Reports
- GitHub Actions (CI)
- GitHub Pages (Allure Report)

---

## Installation

Clone the repository and install the dependencies:

```bash
npm install
```

---

## Running the Tests

Run all tests in headless mode:

```bash
npx cypress run
```

or

```bash
npm run test
```

Run the tests and generate the Allure report:

```bash
npm run test:report
```

Open Cypress in interactive mode:

```bash
npm run cy:open
```

---

## Test Reports

The latest Allure Report is available at:

**https://gabrielaolson.github.io/cypress-tests-gabriela/**

GitHub Actions workflow:

**https://github.com/gabrielaolson/cypress-tests-gabriela/actions**

---

## Project Structure

```text
cypress/
├── e2e/
├── page-objects/
├── fixtures/
├── support/
├── screenshots/
└── downloads/
```

---

## Notes

- The framework follows the **Page Object Model (POM)** to reduce code duplication and improve test maintenance.
- Test data is managed automatically during execution.
- Users and products created during the tests are removed by the test suite to keep the environment clean.


