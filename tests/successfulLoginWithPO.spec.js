import { test } from '@playwright/test';
import { LoginPage } from '../page_objects/loginPage'

test('Successful Login', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginPage()
  await Login.login('tomsmith', 'SuperSecretPassword!')
  await Login.verifyLogin()
});