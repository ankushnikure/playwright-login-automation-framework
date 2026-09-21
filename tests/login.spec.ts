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
        await expect(loginPage.getLoginSuccessMessage()).toHaveText("Logged In Successfully");

    });

    test("Verify login with invalid credentials", async ({ page }) => {
        await loginPage.login(invalidCredentials.username, invalidCredentials.password);
        await expect(loginPage.getLoginErrorMessage()).toHaveText("Your username is invalid!");

    });

    test("Verify login with invalid username", async ({ page }) => {
        await loginPage.login(invalidCredentials.username, validCredentials.password);
        await expect(loginPage.getLoginErrorMessage()).toHaveText("Your username is invalid!");

    });

    test("Verify login with invalid password", async ({ page }) => {
        await loginPage.login(validCredentials.username, invalidCredentials.password);
        await expect(loginPage.getLoginErrorMessage()).toHaveText("Your password is invalid!");

    });

});


