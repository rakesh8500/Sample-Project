import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import testData from '../TestData/testData.json' assert { type: 'json' };

const username = testData.test_common.username;
const password = testData.test_common.password;

test.describe('verify dropdowns in orange HRM', () => {
  test('user able to login dropdown in orange HRM', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    
    await loginPage.verifyDropdowns();

  });
});