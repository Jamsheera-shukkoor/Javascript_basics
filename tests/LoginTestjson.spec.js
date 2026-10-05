import { test,expect} from '@playwright/test' 
import { LoginPagejson } from '../pages/LoginPagejson'
import logindata from "../utils/loginData.json"
 test('Login Test',async({page})=>
 {
 const loginpagejson=new LoginPagejson(page)
 const username=logindata.validusername
 const password=logindata.validpassword
 await loginpagejson.navigateToApplication()
 await loginpagejson.applicationLogin(username,password)
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')




 })