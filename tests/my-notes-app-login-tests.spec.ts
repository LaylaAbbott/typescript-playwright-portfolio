import { test, expect } from "@playwright/test";

import { NotesLoginPage } from "../pages/my-notes-app-login-page";
import { NotesPreLoginPage } from "../pages/my-notes-app-pre-login-page";
import { NotesRegisterPage } from "../pages/my-notes-app-create-account-page";
import { UserDetails } from "../helper classes/UserDetails";



test.describe('Given I am a visitor to the site, when I am on the pre-login page I can view and access the page for creating an account.', () => {
    let preLoginPage;
    let loginPage;
    test.beforeEach(`Navigating to the page and creating an instance of the PreLoginPage class`, async ({ page }) => {
        //Creating new instances of all the page classes that will be used
        preLoginPage = new NotesPreLoginPage(page);
        //Navigate to landing page  - NEED TO FIGURE OUT PLAYWRIGHT CONFIG FOR HTTPS SO I CAN USE THE BASEURL OPTION
        await page.goto('https://practice.expandtesting.com/notes/app/');
    });
    test('Given I am a new user, when I visit the landing page then I view a button to create an account', async ({ }) => {
        //Act: go to landing page (beforeEach)
        //Assert: there should be a button to create an account 
        await expect(preLoginPage.createAccountButton).toBeVisible();
    });
    test(`Given I am a new user, when I click the 'Create Account' button, I am taken to the 'Register' page`, async ({ page }) => {
        //Act: Clicking create account button
        await preLoginPage.createAccountButton.click();
        //Assert: the page URL should be that of the register page (toHaveURL retries)
        await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app/register');
    });
});

test.describe('Given I am a new user, when I register for an account then I can log back in using those credentials.', () => {
    let registerPage;
    // Arrange: Create 1 set of user details 
    const newUser = UserDetails.generateNewUser();
    test.beforeEach(``, async ({ page }) => {
        //Creating new instances of all the page classes that will be used
        registerPage = new NotesRegisterPage(page);
        //Navigate to register page
        await page.goto('https://practice.expandtesting.com/notes/app/register');
    });

    test(`Given I am a new user, when I am on the register page I should view the following fields: Email, Name, Password, Confirm Password.`, async ({ page }) => {
        await expect(registerPage.emailField).toBeVisible();
        await expect(registerPage.nameField).toBeVisible();
        await expect(registerPage.passwordField).toBeVisible();
        await expect(registerPage.confirmPasswordField).toBeVisible();
    });
    test(`Given I am a new user, when I am on the Register page I can enter my chosen details into those fields`, async ({ page }) => {
        //Act: Fill email field
        await registerPage.enterEmail(newUser);
       //Assert: Value entered appears in the correct field - using toContainText as it auto-retries
        await expect(registerPage.emailField).toHaveValue(newUser.email, { timeout: 6000 });
        //Act: Fill name field
        await registerPage.enterName(newUser);
        //Assert: Value entered appears in the correct field - using toContainText as it auto-retries
        await expect(registerPage.nameField).toHaveValue(newUser.name);
        //Act: Fill password and confirm password fields with the same input
        await registerPage.enterPasswordAndConfirmPassword(newUser);
        //Assert: Type attribute of the field is 'password' - use toHaveAttribute as it retries
        //By convention this should ensure the password is masked - THIS IS NOT UNIVERSAL ACROSS ALL SYSTEMS! 
        await expect(registerPage.passwordField).toHaveAttribute('type', 'password');
    });
     /*   test(`Given I am a new user, when I am on the Register page I can confirm my details to create an account.`, async ({ page }) => {
        //Arrange: Fill all details 
        await registerPage.enterAllDetails(newUser);
        //Assert




    });
test(`Given I am a new user, when I visit the landing page then I view a button to log in. `, async ({page})=>

    });
    test(`Given I am user with an account, when I am on the Login page then I can use my details to log in. `, async ({page})=>{


    });
   test(``, async ({page})=>{

    }); */
});