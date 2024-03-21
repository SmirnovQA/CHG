import { test } from '@playwright/test';

const { chromium } = require('playwright');
 
// TEST just to show how it will look like without Page Objects!

test('Successful Login', async ({ page }) => {
  const browser = await chromium.launch({ headless: false });

  // Navigate to the login page
  await page.goto('https://the-internet.herokuapp.com/login');

  // Fill in the login form
  await page.fill('input[id="username"]', 'tomsmith');
  await page.fill('input[id="password"]', 'SuperSecretPassword!');

  // Click the login button
  await page.click('button[type="submit"]');

  // Check if login was successful
  if (page.url() === 'https://the-internet.herokuapp.com/secure') {
    console.log('Login successful');
  } else {
    console.log('Login failed');
  }

  // Close the browser if needed
  await browser.close();
});
