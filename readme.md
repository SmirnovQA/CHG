# Playwright-Automation

I left a lot of comments

Did a 3 different tests:
1. Failed Login with PO
2. Sussesful Login witout PO
3. Successful Ligin with PO to show how PO files could look like, idk company rules, what behaviour you following and what a lint rules using
and created a PO file for Login page.
in a task you didn't asked about page verification (like a text on a page, buttons) or about APi tests or tests for Logout, but of course I can verify all text or response on a /secure end point

# Reporter

Probably esiest way to generate report is using a Allure  reporter: 
`npx playwright test --reporter=line,allure-playwright` -> `npm run allure:generate`
or Jest or Mocha Reporter probably you are using something like TestRail fot TC managment and using a TR reporter with TC ids `.extend({ caseId: 000000})`

# How to Start
1. Clone the project
2. Run `npm i` to install all the dependencies
3. Run `npx playwright test` to execute the tests
4. Run `npx playwright test tests/*fileName*.spec.ts` to execute a single test
