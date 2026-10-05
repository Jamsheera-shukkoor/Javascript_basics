import { test,expect} from '@playwright/test' 
import { loginpageexcel2} from '../pages/loginpageexcel2'
import { getCellData } from '../utils/excelReader2'
 test('Login Test',async({page})=>
 {
   
const username=getCellData(2,1)
const password=getCellData(2,2)
    
 const loginpage=new loginpageexcel2(page)
 await loginpage.navigateToApplication()
 await loginpage.applicationLogin(username,password)
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')



    
 })