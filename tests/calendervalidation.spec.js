import {test,expect} from '@playwright/test' 


test('Calendar Automation', async({page,context})=>{
    
    await page.goto('https://selenium.qabible.in/date-picker.php')

    await page.locator('#single-input-field').click()

    const targetYear = 1997

    
   await expect(page.locator('.datepicker-dropdown')).toBeVisible()
   // wait until the calendar pop up element is visible on the page and verify that it is displayed
   // we dont immendiately interact with Calender beause, UI may take time load

   const switchButton = page.locator('.datepicker-switch:visible')
   //Visible is used to filter and select only visible elements

   await switchButton.click()
   await switchButton.click()

   let attempt = 10

   while(attempt--)
   {
        const decades = await switchButton.innerText()

        const StartYear = parseInt(decades.split('-')[0].trim())
        console.log(StartYear)

        //Example: 1997 >= 2020 &&   Fail
        //Example: 1997 >= 2010 &&   Fail
        //Example: 1997 >= 2000 &&   Fail
        //Example: 1997 >= 1990 && 1997 <= (1990+9) True
        if(targetYear>=StartYear && targetYear <= (StartYear+9)){
            break
        }
        await page.locator('.prev:visible').click()

   }

   //Selecting required Year and Month
   await page.locator('.year:visible').filter({hasText:'1997'}).click()

   await page.locator('.month:visible').filter({hasText:'Sep'}).click()

   //Day. ^ has to start 8, $ has to end with 8
   await page.locator('.day:not(.old):not(.new)').filter({ hasText: /^8$/ }).click()

   await page.locator('#button-one').click()

})