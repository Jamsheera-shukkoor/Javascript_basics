//special locators
//first  priority for these 4 

// 1. getByRole()
// 2. getByText()
//3.getByLabel()
//4.getByPlaceholder()

//5.getByTextId()
//6.getByaltText()
//7.getByTitle()

//application types:
//1.standard/ native html applications
//2.accessible rich internet application

import { test,expect} from '@playwright/test' 




//3.getByLabel
//syntax
//page.getByLabel('Label Text')
//it is used to locate form elements such as textbox,ckeckbox, radio buttons etc.
//using th

//4.getByPlaceholder
//syntax
//page.getByPlaceholder('placeholder value')
//used to locate an input element using placeholder attribute

//5.getByTestId(NOT IMPORTANT)
//it is a special locator in playwright used to locate an element using a testId , usually the data testID attribute
//syntax
//page.getByTestID
//eg: <button data-testid="login-button">Login</button>

//6.getByAltText()
//is a special locator used to locate elements mainly imges, using their alt attribute
//eg: <img src="logo.png" alt="Company Logo"></img>
//const var2=page.getByAltText()('company logo')

//7.pageByTitle()
//it is a special locator in playwright 

//<button title="Close">X</button>