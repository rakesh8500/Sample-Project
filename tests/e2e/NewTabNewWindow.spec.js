import { test, expect } from '@playwright/test';

test('verify new tab', async ({ page }) => {

    await page.goto('https://qa-practice.netlify.app/tab');

    const [newtab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByText('Press me - New Tab').click(),
    ]);

    await newtab.waitForLoadState();
    //expect(newtab.url()).toContain('qa-practice.netlify.app');

    const firstrow = await newtab.locator('#peopleTable tbody tr').first();

    await expect(firstrow).toContainText('Mark');
    await expect(firstrow).toContainText('Otto');
    await expect(firstrow).toContainText('mo@email.com');
});


test('verify  new window', async ({ page }) => {

    await page.goto('https://qa-practice.netlify.app/window');

    const [newtab] = await Promise.all([
        page.context().waitForEvent('page'),
        page.getByText('Press me - New Window').click(),
    ]);

    await newtab.waitForLoadState();
    //expect(newtab.url()).toContain('qa-practice.netlify.app');

    const firstrow = await newtab.locator('#peopleTable tbody tr').first();

    await expect(firstrow).toContainText('Mark');
    await expect(firstrow).toContainText('Otto');
    await expect(firstrow).toContainText('mo@email.com');
});



