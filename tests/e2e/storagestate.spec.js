// @ts-check
import  {test, expect} from '@playwright/test';

test('create a storage state',async ({page})=> {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Username').fill('Admin');
    await page.waitForTimeout(2000);
    await page.getByPlaceholder('Password').fill('admin123');
    await page.waitForTimeout(2000);

    await page.getByRole('button', {name:'Login'}).click();
    await page.waitForTimeout(2000);

    //storage state to save a session logins

     page.context().storageState({path:'TestData/Auth.json'}); //It will create a folder and path 


});