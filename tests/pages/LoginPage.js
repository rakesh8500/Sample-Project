// @ts-check
// @ts-ignore
import { expect } from "@playwright/test";

export class LoginPage {
  /**
   * @param {import('@playwright/test').Page} page
   */
  constructor(page) {
    this.page = page;
    this.usernameField = page.getByPlaceholder('Username');
    this.passwordField = page.getByPlaceholder('Password');
    this.loginbtn = page.getByRole('button', { name: 'Login' });
    this.systemuser = page.getByText('System Users');
    this.adminOption = page.getByText('Admin', { exact: true });
    this.usernametxtbox = page.locator(`(//input[@class="oxd-input oxd-input--active"])[2]`);
    this.UserRoleDropdown = page.locator('xpath=(//div[@class="oxd-select-text-input"])[1]');
  }

  /**
   * @param {string} username
   * @param {string} password
   */
  async CustomerLogin(username, password) {
    await this.page.waitForTimeout(2000);
    await this.usernameField.fill(username);
    await this.page.waitForTimeout(2000);
    await this.passwordField.fill(password);
    await this.page.waitForTimeout(2000);
    await this.loginbtn.click();
    await this.page.waitForTimeout(5000);
  }

  async verifyDropdowns() {
    await this.adminOption.click();
    await expect(this.systemuser).toBeVisible();
    await this.usernametxtbox.fill('admin');
    await this.page.waitForTimeout(2000);
    await this.UserRoleDropdown.click();
    await this.page.getByRole('option', { name: 'ESS' }).click();
  }
}