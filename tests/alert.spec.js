import { test,expect} from '@playwright/test' 

//in playwright browser alerts are handle using the page.on('dialog')event

//on() listen for an event
//'dialog' - used to detect or listen when an alert appears or listen for the alert using alert event
//2nd dialog: used to handle or control the alert
test('Simple Alert',async({page})=>{
await page.goto('https://selenium.qabible.in/javascript-alert.php')

page.on('dialog',async dialog=>{
    await dialog.accept()
})
 const button1=page.locator("//button[@onclick='jsAlert()']")
 await button1.click()


})

test.only('Confirmation Alert',async({page})=>{
await page.goto('https://selenium.qabible.in/javascript-alert.php')
page.on('dialog',async dialog=>{
    await dialog.dismiss()
})
const button2=page.locator('//button[@onclick="jsConfirm()"]')
await button2.click()

})
