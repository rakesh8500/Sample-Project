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


  test('testing the dropdowns', async ({ page }) => {

    await page.goto('https://commitquality.com/practice-general-components');
    //const dropdwn = page.locator('div.dropdowns select');
    const dropdwn = page.locator('//div[@class="dropdowns"]//select');
    await expect(dropdwn).toBeVisible({ timeout: 5000 });
    await dropdwn.selectOption({ label: 'Option 1' });
    await expect(dropdwn).toHaveValue('option1');

  })
});