import { test,expect} from '@playwright/test' 
//visual testing is a testing technique used to verify the visual appearance of an application
//in playwright , we can use toHaveScreenshot() to capture screenshots and compare the current UI With a baseline screenshot
//it is mainly used to detect unexpected ui changes , layout problems space issues ,alignment ,font changes .
//color changes and missing or extra elements
//visual testing used to idetntify ui changes like colour changes , layout issue, alignmnt

test('visual testing',async({page})=>{
await page.goto('https://www.saucedemo.com')

await page.waitForLoadState('networkidle')

//expect keyword : assertion to verify if system works as expected
//toHaveText(): check exact text
//toBeEnabled():check element is enabled
//toBeChecked():check checkbox/radio is checked
//toHaveURL(): CHECKS PAGE URL
//toHaveTitle(): checks page title
//toHaveScreenshot:
//0:strict (no difference allowed) 
//0.1 : very small difference allowed
//0.2: small differences allowed
//1. large difference allowed
//threshold: how much visual difference(per pixel)
await expect(page).toHaveScreenshot('loginPage.png',{threshold:0.2})
})