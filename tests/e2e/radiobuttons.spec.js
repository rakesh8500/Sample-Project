import { expect, test } from '@playwright/test'

test('verify the check boxes',async ({page}) => {

    await page.goto('https://qa-practice.razvanvancea.ro/radiobuttons.html');
    await page.waitForTimeout(2000);
    const radiobutton1 = await page.getByLabel('Radio button 1');
    await radiobutton1.check();
    await expect(radiobutton1).toBeChecked();
    
    await page.waitForTimeout(2000);
    const radiobutton2 = await page.getByLabel('Radio button 2');
    await radiobutton2.check();
    await expect(radiobutton2).toBeChecked();

    
    

});


test('verify the radio buttons are clicked', async ({page})=>{
     
    await page.goto('https://commitquality.com/practice-general-components');

     const radio = await page.locator('//input[@value="option1"]');
     await radio.check();
     await expect(radio).toBeChecked();

});