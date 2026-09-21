import { test, expect } from "@playwright/test";
import { ROUTES } from "@routes/routes";
import { LoginPage } from "@pages/login.page";
import { validCredentials, invalidCredentials } from "@test-data/login.data";

test.describe("Login Tests", () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.navigate(ROUTES.LOGIN);
    });

    test("Verify login with valid credentials", async ({ page }) => {
        await loginPage.login(validCredentials.username, validCredentials.password);
        await expect(page).toHaveURL(/logged-in-successfully/);
        await loginPage.expectLoginSuccessMessage("Logged In Successfully");
    });

    test("Verify login with invalid credentials", async () => {
        await loginPage.login(invalidCredentials.username, invalidCredentials.password);
        await loginPage.expectLoginErrorMessage("Your username is invalid!");
    });

    test("Verify login with invalid username", async () => {
        await loginPage.login(invalidCredentials.username, validCredentials.password);
        await loginPage.expectLoginErrorMessage("Your username is invalid!");
    });

    test("Verify login with invalid password", async () => {
        await loginPage.login(validCredentials.username, invalidCredentials.password);
        await loginPage.expectLoginErrorMessage("Your password is invalid!");
    });

});


