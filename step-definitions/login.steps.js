//import {Given,When,Then} from "@cucumber/cucumber"
const{Given,When,Then}=require('@cucumber/cucumber')
//import { chromium } from "@playwright/test"
const {chromium,test,expect} = require("@playwright/test")
//const{expect}=require('@playwright/test')
//chromium is the browser engine used to launch chrome like browsers.
let browser  //browser and page are declared outside function to make them accessible throughout the step defenition file.
let page
Given('User is on the login page',async function() {
    browser=await chromium.launch({headless:false})  //launch metod is used to open browser , false: browser visible : True :browser hidden
    page=await browser.newPage() //this line open a new browser tab
    await page.goto('https://www.saucedemo.com/')
     

    
})
When('user enter valid username and password',async function(){
  const username=page.locator('#user-name')
  const password=page.locator('#password')
  const loginbutton=page.locator('#login-button')
  await username.fill('standard_user')
  await password.fill('secret_sauce')
await loginbutton.click()



})

Then('User should be logged in',async function(){
    //await expect(this.page).toHaveURL('https://www.saucedemo.com/inventory.html')
    await page.locator('.inventory_item').first().isVisible()
})