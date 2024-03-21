import { test } from '@playwright/test';
import { LoginPage } from '../page_objects/loginPage'

test.describe('Basic description', () => {

  test.beforeEach(async ({ page }) => { // *BEFORE* for avoid line 14 if we will create a multiple scenarios in one file
    await page.goto('https://the-internet.herokuapp.com/login')
    // or 
    //await Login.gotoLoginPage()

})

test('Failed Login', async ({ page }) => {

  const Login = new LoginPage(page)

  //await Login.gotoLoginPage()
  await Login.login('Andrei', 'password')
  await Login.verifyLogin()
  await Login.verifiFailedLoginNorification()
})
})