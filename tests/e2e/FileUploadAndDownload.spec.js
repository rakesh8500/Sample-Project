import { test,expect } from '@playwright/test'

test('verify how to upload the file', async ({page})=>{
  
    await page.goto("https://qa-practice.netlify.app/file-upload");

    await page.waitForTimeout(2000);
     await page.locator('#file_upload').setInputFiles('TestData/Helloworld.docx');
    

});

test('verify how to upload multiple files', async ({page})=>{
    
    await page.goto("https://qaplayground.com/practice/file-upload");

    await page.waitForTimeout(2000);

    //await page.locator('#file-upload').setInputFiles(['TestData/Helloworld.docx','TestData/sample.docx']);
    await page.locator('#file-upload').setInputFiles('TestData/Helloworld.docx');

    await page.waitForTimeout(2000);

    const worddoc = await page.locator('#file-upload');
    
    await worddoc.setInputFiles('TestData/sample.docx');//Any one of the file is uploading.

    const value = await worddoc.inputValue();

    console.log(value);

    expect(value).toContain('sample.docx');

});