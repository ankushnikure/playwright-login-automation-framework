import { USERNAME, PASSWORD } from "@config/env";
import { LoginCredentials } from "src/types/auth.types";

export const loginCredentials: LoginCredentials[] = [
    {
        testcase: "valid credentials",
        username: USERNAME,
        password: PASSWORD,
        expectedResult: "success"
    },
    {
        testcase: "invalid credentials",
        username: "invalidUser",
        password: "invalidPassword",
        expectedResult: "invalidUsername"
    },
    {
        testcase: "invalid username",
        username: "invalidUser",
        password: PASSWORD,
        expectedResult: "invalidUsername"
    },
    {
        testcase: "invalid password",
        username: USERNAME,
        password: "invalidPassword",
        expectedResult: "invalidPassword"
    }
];