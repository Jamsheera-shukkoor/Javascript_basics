import { test, expect } from '@playwright/test';

test('Login test', async ({ page }) => {

    // Open website
    await page.goto('https://www.saucedemo.com/');

    // Enter username
    await page.locator('#user-name').fill('standard_user');

    // Enter password
    await page.locator('#password').fill('secret_sauce');

    // Click Login
    await page.locator('#login-button').click();

    // Verify login successful
    await expect(page).toHaveURL(/inventory/);

});