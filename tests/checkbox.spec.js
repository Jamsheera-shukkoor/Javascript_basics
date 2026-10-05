import { test,expect} from '@playwright/test' 

test('checkbox locating',async({page})=>{
await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html')
const Dropdown=page.locator('#dropdowm-menu-1')
//select By VisibleText
//await Dropdown.selectOption({label:'Python'})
//select by index

//await Dropdown.selectOption({index:3})

//select by value

await Dropdown.selectOption('python')


})

