import { chromium } from 'playwright';

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://commitquality.com/practice-general-components');
  const selects = page.locator('select');
  const count = await selects.count();
  console.log('SELECTS=' + count);
  for (let i = 0; i < count; i++) {
    const html = await selects.nth(i).evaluate(el => el.outerHTML);
    console.log(`SEL${i}=${html}`);
  }
  await browser.close();
})();
