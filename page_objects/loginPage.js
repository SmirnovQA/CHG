import { expect } from '@playwright/test';

exports.LoginPage = class LoginPage {
        
    constructor(page) {

        this.page = page
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByLabel('Password')
        this.loginBtn = page.getByRole('button', { name: 'Login' })
        this.loginFailFlashNotification = page.locator('[id="flash"]') // just a different method to find a element
    }

    async gotoLoginPage(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    async login(username, password){ // method for complete login, could be splitted for 3 different steps if you want follow BDD for non technical people
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginBtn.click()
    }

    async verifyLogin(){
        if (this.page.url() === 'https://the-internet.herokuapp.com/secure') {
            console.log('Login successful');
          } else {
            console.log('Login failed');
          }
    }

    async verifiFailedLoginNorification(message){
        await expect(this.loginFailFlashNotification).toHaveText(message)
    }
}