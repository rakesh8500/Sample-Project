import { test, expect } from '@playwright/test'


//This script is to verify dynamic the dynamic table row and column values not harcoding the values.

test('verify the table and rows dynamically', async ({page}) => {

    await page.goto("https://qaplayground.com/practice");

    await page.getByText('Data Table').click();

    await page.waitForLoadState('networkidle');
    await page.waitForSelector('#books-table tbody tr:nth-child(1) td:nth-child(1)');

    const firstrow = await page.locator('#books-table tbody tr:nth-child(2) td:nth-child(3)').textContent();

    console.log('Cell value:', firstrow);
});


test('verify the table rows and columns static elements', async ({page})=>{

    await page.goto("https://qa-practice.netlify.app/web-table");

    const row1 = await page.locator('#peopleTable tbody tr').nth(2).locator('td').nth(0).textContent();

          console.log('Cell Value:',row1);

    const row2 = await page.locator('#peopleTable tbody tr').nth(3).locator('td').nth(2).textContent();     
          console.log('Cell Value:',row2);
});

test('verify the total values of table and column', async ({page})=>{
     
    await page.goto("https://qa-practice.netlify.app/web-table");

    const rowData = await page
  .locator('#peopleTable tbody tr')
  .nth(1)
  .locator('th, td')
  .allTextContents();

console.log(rowData);
});