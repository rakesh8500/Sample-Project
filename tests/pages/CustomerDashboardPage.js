// @ts-check
import { expect } from '@playwright/test';

export class CustomerDashboardPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.elementLink = this.page.getByText('Elements');
    this.textbox = this.page.getByText('Text Box');
    this.fullname = this.page.getByPlaceholder('Full Name');
    this.Email = this.page.getByPlaceholder('name@example.com');
    this.curraddres = this.page.getByPlaceholder('Current Address');
    this.submitbtn = this.page.getByRole('button',{name: 'Submit'});
  }

  async verifyElements() {
    await expect(this.elementLink).toBeVisible();
    await this.elementLink.click();
    await this.page.waitForTimeout(2000);
    await this.textbox.click();
    await this.page.waitForTimeout(2000);
    await this.fullname.fill('Rakesh');
    await this.page.waitForTimeout(2000);
    await this.Email.fill('dusseteraki@gmail.com');
    await this.page.waitForTimeout(2000);
    await this.curraddres.fill('1-126/A,Nandikotkur,kurnool,AP-India');
    await this.page.waitForTimeout(2000);
    await this.submitbtn.click();
    



  }
}

