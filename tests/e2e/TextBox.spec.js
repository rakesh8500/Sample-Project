import { test, expect } from '@playwright/test';
import testdata from '../TestData/testData.json' assert { type: 'json' };
import { CustomerDashboardPage } from '../pages/CustomerDashboardPage';

test.describe('check text boxes', () => {
  test('User is able to verify the text box', async ({ page }) => {
    const customerDashboardPage = new CustomerDashboardPage(page);
    await page.goto('https://demoqa.com/elements');

    await customerDashboardPage.verifyElements();

  });
});

