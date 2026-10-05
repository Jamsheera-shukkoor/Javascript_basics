export class LoginPage{
    constructor(page){
        this.page=page
        this.username=page.locator('#user-name')
        this.password=page.locator('#password')
        this.loginButton=page.locator('#login-button')

    }
    async navigateToApplication()
    {
        await this.page.goto('saucedemo.com/?utm_source=chatgpt.com')
    }

    async applicationLogin(username, password){https://www.
        await this.username.fill(username)
        await this.password.fill(password)
        await this.submit.click()
    }
}
