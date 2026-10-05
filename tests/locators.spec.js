import { test,expect} from '@playwright/test' 
/*test('Locators in Playwright',async({page})=>{
await page.goto('https://selenium.qabible.in/')
//id(using #)
//webelement declaration syntax
const elementName=page.locator('LocatorValue')
//where const : javascript variable
//elementname: use to store the locator
//page: represents the current webpage
//locator : used to find an element
//id(using #)
//syntax
//const elementName=page.locator('#IDvalue')
const Message=page.locator('#single-input-field')
const ShowMessage=page.locator('#button-one')
   //class (using .)
const Message1=page.locator('.form-control')
const ShowMessage1=page.locator('.form-control')
//tagname[attribute="value"]
//locating with class attribute
//syntaxx
//const elementName=page.locator(".className")

//tagname
//syntax
//const elementName=page.locator("tagName[attribute=value]")
const showButton2 = page.locator('button[id="button-one"]')

const entervalueA=page.locator('input[id="value-a"]')

})*/

/*test('Locators in Playwright',async({page})=>{
await page.goto('https://selenium.qabible.in/simple-form-demo.php')

const message =page.locator("#single-input-field")
//type() and fill() ; //are used to enter text into a textbox
//await message.type("hello")
//await message.type("new message")
await message.fill("error")
await message.fill("newwwwwwwwwwwwwwwwwwwwwwww")
const button=page.locator("#button-one")
await button.click()

})*/


test('xpath in Playwright',async({page})=>{
await page.goto('https://selenium.qabible.in/simple-form-demo.php')
//xpath
//2 types: 1.absolute 2.relative
//absolute: starts from the root node (not recommended as it may break easily)
//relative xpath :starts from anywhere in the DOM .(PREFERRED)
const gettotal=page.locator("/html/body/section/div/div/div[2]/div[2]/div/div[2]/form/button")

//relative xpath - //tagname[@attribute='value']
 const message5=page.locator("//button[@id='button-one']")
 const evalue=page.locator("//input[@id='value-a']")

 //  text():-  //tagname[text()='value'] 
 const show=page.locator("//button[text()='Show Message']")
 const evalueA=page.locator("//input[text()='Get Total']")

 //contains using attribute :- //tagname[contains(@attribute,'value')]
 //contains using text :- //tagname[contains(text(),'value')]

const emessage=page.locator("//input[contains(@id,'single-input-fi')]")
const emessageb=page.locator("//input[contains(@id,'-b')]")      

const sms=page.locator("//button[contains(text(),'Show')]")
const obj4=page.locator("//button[contains(text(),'Get To')]")

//starts with : //tagname[starts-with(@attribute,'value')]

const objj=page.locator("//button[starts-with(@id,'button-t')]")

})








