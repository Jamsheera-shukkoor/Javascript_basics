import { test,expect} from '@playwright/test' 
import { LoginPageexcel } from '../pages/LoginPageexcel'
import { getData } from '../utils/excelReader'
const credential=getData()
 test('Login Test',async({page})=>
 {
    for(const data of credential)
    {

    
 const loginPageexcel=new LoginPageexcel(page)
 await loginPageexcel.navigateToApplication()
 await loginPageexcel.applicationLogin(data.username,data.password)
 await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')



    }
 })