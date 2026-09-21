import { USERNAME, PASSWORD } from "@config/env";

export const validCredentials = {
    username: USERNAME,
    password: PASSWORD,
}

export const invalidCredentials = {
    username: "invalidUser",
    password: "invalidPassword",
}