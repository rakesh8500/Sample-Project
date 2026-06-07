import { test, expect} from '@playwright/test';

test('verify the check boxes', async ({ page }) => {

    await page.goto('https://qa-practice.razvanvancea.ro/checkboxes.html');

    const checkboxes = page.locator('input[type="checkbox"]');
    const count = await checkboxes.count();
    expect(count).toBeGreaterThanOrEqual(2);

    await checkboxes.nth(0).check();
    await expect(checkboxes.nth(0)).toBeChecked();

    await checkboxes.nth(1).check();
    await expect(checkboxes.nth(1)).toBeChecked();

    
});


test(' verify clicking on check box', async ({page})=>{
   
    await page.goto('https://qa-practice.razvanvancea.ro/checkboxes.html');

    const checkbox = await page.locator(`(//input[@type="checkbox"])[1]`);
    await checkbox.check();
    await expect(checkbox).toBeChecked();

    const checkboxes = await page.locator(`(//input[@type="checkbox"])[2]`);
    await checkboxes.check();
    await expect(checkboxes).toBeChecked();

});

test('verify checkbox third test',async ({page})=>{

    await page.goto('https://commitquality.com/practice-general-components');

    await page.waitForTimeout(2000);
    const checkbox1 = await page.locator('//input[@name="checkbox1"]');
        await checkbox1.check();
    await expect(checkbox1).toBeChecked();


});