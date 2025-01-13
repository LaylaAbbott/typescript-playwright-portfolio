# typescript-playwright-portfolio
General collection of different things I've learned. Want to include:
- End to End UI Tests
- Accessibility scans w/Axe-Core
- API Tests
## [My Notes App](https://practice.expandtesting.com/notes/app/register)
### Requirements:
1. Given I am a new user, when I register for an account then I can log back in using those credentials.
    -Given I am a new user, when I visit the landing page then I view a button to create an account.
    -Given I am a new user, when I click the 'Create Account' button, I am taken to the 'Register' page.
    -Given I am a new user, when I am on the register page I should view the following fields: Email, Name, Password, Confirm Password.
    -Given I am a new user, when I am on the Register page I can enter my chosen details into those fields
    -Given I am a new user, when I am on the Register page I can confirm my details and create an account.
        -Should also be some indication to the user of the account creation being successful.
    -Given I am a new user, when I visit the landing page then I view a button to log in.
    -Given I am user with an account, when I am on the Login page then I can use my details to log in. 
