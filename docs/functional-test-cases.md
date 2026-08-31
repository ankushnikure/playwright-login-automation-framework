# Functional Test Cases - Login Page

| TC ID | Test Case | Type | Test Data | Expected Result | Automation Status |
|---|---|---|---|---|---|
| TC01 | Verify login with valid username and valid password | Positive | Valid username + valid password | User logs in successfully | Automated |
| TC02 | Verify success message after successful login | Positive | Valid credentials | "Logged In Successfully" is displayed | Automated |
| TC03 | Verify redirect URL after successful login | Positive | Valid credentials | User is redirected to the successful login page | Manual |
| TC04 | Verify Logout button is displayed after successful login | Positive | Valid credentials | Logout button is visible | Manual |
| TC05 | Verify user can log in successfully after logging out | Positive | Valid credentials | User can log in again successfully | Manual |
| TC06 | Verify login with invalid username and valid password | Negative | Invalid username + valid password | "Your username is invalid!" is displayed | Automated |
| TC07 | Verify login with valid username and invalid password | Negative | Valid username + invalid password | "Your password is invalid!" is displayed | Automated |
| TC08 | Verify login with empty username and valid password | Negative | Blank username + valid password | Login fails and an appropriate validation message is displayed | Manual |
| TC09 | Verify login with valid username and empty password | Negative | Valid username + blank password | Login fails and an appropriate validation message is displayed | Manual |
| TC10 | Verify login with both username and password empty | Negative | Blank username + blank password | Login fails and the user is not redirected to the success page | Manual |