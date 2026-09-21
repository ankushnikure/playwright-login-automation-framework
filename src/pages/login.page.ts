import { Locator } from "@playwright/test";
import { BasePage } from "./base.page";

export class LoginPage extends BasePage {

    // Locators
    private readonly usernameInput: Locator = this.page.getByRole('textbox', { name: 'username' });
    private readonly passwordInput: Locator = this.page.getByRole('textbox', { name: 'password' });
    private readonly submitButton: Locator = this.page.getByRole('button', { name: 'Submit' });
    private readonly loginSuccessMessage: Locator = this.page.getByRole('heading', { name: 'Logged In Successfully' });
    private readonly loginErrorMessage: Locator = this.page.locator('#error');

    // Dynamic locators
    getLoginSuccessMessage(): Locator {
        return this.loginSuccessMessage;
    }

    getLoginErrorMessage(): Locator {
        return this.loginErrorMessage;
    }

    // Methods
    async login(username: string, password: string): Promise<void> {
       await this.usernameInput.fill(username);
       await this.passwordInput.fill(password);
       await this.submitButton.click();
    }

} 