import { test,expect} from '@playwright/test' 
import { LoginPage } from '../pages/LoginPage'
 test('Login Test',async({page})=>
 {
 const loginpage=new LoginPage(page)
 await loginpage.navigateToApplication()
 await loginpage.applicationLogin('standard_user', 'secret_sauce')
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')




 })