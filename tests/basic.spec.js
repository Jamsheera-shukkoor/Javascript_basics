import { test,expect} from '@playwright/test' //official test runner of playwright(to run testcase)

//test: used to run testcase
//expect : used to validate
//browser context playwright test: testcase name
//test:- a function from playwright used to define a playwright
//browser:- fixture (reusable setup function)
//context fixture: a fresh browser session like incognito means a clean browser environment with no cookies or history
//page:page fixture is a single browser tab
//flow:- browser starts->session created ->tab create-->url launch
test('browser context playwright test',async({browser})=>{
    const context=await browser.newContext()
    //this will create a new browser session
    const page=await context.newPage()
    //create a new tab inside that session
    await page.goto('https://selenium.qabible.in/')
    //url launch method ; goto
})
test.only('Page playwright test',async({page})=>{
await page.goto('https://selenium.qabible.in/')
})

//we dont have to use browser fixture explicitly in every test, if we use the page fixture, playwright internally creates the 
//browser context and page for us. this is the recommended approach for normal playwright test.













