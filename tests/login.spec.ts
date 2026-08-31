import { test, expect } from "@playwright/test";
import { ROUTES } from "@routes/routes";
import { LoginPage } from "@pages/login.page";
import { loginCredentials } from "@test-data/login.data";

test.describe("Login Tests", () => {

    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate(ROUTES.LOGIN);
    });

    loginCredentials.forEach((data) => {

        test(`Verify login with ${data.testcase}`, async ({ page }) => {

            await loginPage.login(data.username, data.password);

            switch (data.expectedResult) {

                case "success":
                    await expect(page).toHaveURL(/logged-in-successfully/);
                    await expect(loginPage.getLoginSuccessMessage()).toHaveText("Logged In Successfully");
                    break;

                case "invalidUsername":
                    await expect(loginPage.getLoginErrorMessage()).toHaveText("Your username is invalid!");
                    break;

                case "invalidPassword":
                    await expect(loginPage.getLoginErrorMessage()).toHaveText("Your password is invalid!");
                    break;

                default:
                    throw new Error(`Unknown expected result: ${data.expectedResult}`);

            }

        });
    });
});


