import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    private readonly usernameInput: Locator = this.page.getByRole('textbox', { name: 'username' });
    private readonly passwordInput: Locator = this.page.getByRole('textbox', { name: 'password' });
    private readonly submitButton: Locator = this.page.getByRole('button', { name: 'Submit' });
    private readonly loginSuccessMessage: Locator = this.page.getByRole('heading', { name: 'Logged In Successfully' });
    private readonly loginErrorMessage: Locator = this.page.locator('#error');

    async enterUsername(username: string): Promise<void> {
        await this.usernameInput.fill(username);
    }

    async enterPassword(password: string): Promise<void> {
        await this.passwordInput.fill(password);
    }

    async clickSubmitButton(): Promise<void> {
        await this.submitButton.click();
    }

    async login(username: string, password: string): Promise<void> {
        await this.enterUsername(username);
        await this.enterPassword(password);
        await this.clickSubmitButton();
    }

    getLoginSuccessMessage(): Locator {
        return this.loginSuccessMessage;
    }

    getLoginErrorMessage(): Locator {
        return this.loginErrorMessage;
    }

} 