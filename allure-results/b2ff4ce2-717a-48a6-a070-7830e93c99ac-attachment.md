# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: logintestexcel2.spec.js >> Login Test
- Location: tests\logintestexcel2.spec.js:4:6

# Error details

```
ReferenceError: data is not defined
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - generic [ref=e4]: Swag Labs
  - main [ref=e5]:
    - form "Login" [ref=e9]:
      - textbox "Username" [ref=e11]
      - textbox "Password" [ref=e13]
      - button "Login" [ref=e15] [cursor=pointer]
    - generic [ref=e17]:
      - generic [ref=e18]:
        - heading "Accepted usernames are:" [level=4] [ref=e19]
        - text: standard_userlocked_out_userproblem_userperformance_glitch_usererror_uservisual_user
      - generic [ref=e20]:
        - heading "Password for all users:" [level=4] [ref=e21]
        - text: secret_sauce
```

# Test source

```ts
  1  | import { test,expect} from '@playwright/test' 
  2  | import { Loginpageexcel2 } from '../pages/loginpageexcel2'
  3  | import { getCellData } from '../utils/excelReader2'
  4  |  test('Login Test',async({page})=>
  5  |  {
  6  |    
  7  | const username=getCellData(2,1)
  8  | const password=getCellData(2,2)
  9  |     
  10 |  const loginpageexcel2=new Loginpageexcel2(page)
  11 |  await loginpageexcel2.navigateToApplication()
> 12 |  await loginpageexcel2.applicationLogin(data.username,data.password)
     |                                         ^ ReferenceError: data is not defined
  13 |  await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html')
  14 | 
  15 | 
  16 | 
  17 |     
  18 |  })
```