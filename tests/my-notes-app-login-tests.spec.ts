import { test, expect } from "@playwright/test";

import { NotesPreLoginPage } from "../pages/my-notes-app-pre-login-page";
import { UserDetails } from "../helper classes/UserDetails";
import { NotesRegisterPage } from "../pages/my-notes-app-register-page";
/*import { NotesLoginPage } from "../pages/my-notes-app-login-page";
import { NotesHomePage } from "../pages/my-notes-app-home-page";
import { NotesProfilePage } from "../pages/my-notes-app-profile-page"; */

test.describe('Given I am a visitor to the site, when I am on the pre-login page I can view and access the page for creating an account.', () => {
    let preLoginPage: NotesPreLoginPage;
    test.beforeEach(`Navigating to the page and creating an instance of the PreLoginPage class`, async ({ page }) => {
        //Creating new instances of all the page classes that will be used
        preLoginPage = new NotesPreLoginPage(page);
        //Navigate to landing page  - NEED TO FIGURE OUT PLAYWRIGHT CONFIG FOR HTTPS SO I CAN USE THE BASEURL OPTION
        await page.goto('https://practice.expandtesting.com/notes/app/');
    });
    test('Given I am a new user, when I visit the landing page then I view a button to create an account', async () => {
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
    let registerPage : NotesRegisterPage;
    /*let loginPage;
    let homePage;
    let profilePage; */
    // Arrange: Create 1 set of user details 
    const newUser = UserDetails.generateNewUser();
    test.beforeAll('Navigating to the register page', async ({ page }) => {
        //Creating new instances of all the page classes that will be used
        registerPage = new NotesRegisterPage(page);
        //Navigate to register page
        await page.goto('https://practice.expandtesting.com/notes/app/register');
    });
    test('Given I am a new user, when I am on the register page I should view the following fields: Email, Name, Password, Confirm Password.', async () => {
        await expect(registerPage.emailField).toBeVisible();
        await expect(registerPage.nameField).toBeVisible();
        await expect(registerPage.passwordField).toBeVisible();
        await expect(registerPage.confirmPasswordField).toBeVisible();
    });
    test('Given I am a new user, when I am on the Register page I can enter my chosen details into those fields', async () => {
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
    test('Given I am a new user, when I am on the Register page I can confirm my details to create an account.', async () => {
        //Act: Create account
        await registerPage.completeRegistration();
        //Assert: There is a toast message with text 'User account created successfully'
        await expect(registerPage.toastMessage).toBeVisible();
        await expect(registerPage.toastMessage).toHaveText(registerPage.toastMessages[0]);
    });
    test('Given I am a new user, when I have created an account then I view a button to log in.', async ({page})=>{
        //Assert: the presence of the log in button (arrange and act are in the previous tests)
        await expect(registerPage.loginButton).toBeVisible();
        //Act: Click log in button
        await registerPage.loginFirstTime();
        //Assert: the URL takes us to the log in page
        await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app/login');
    });
    /*test('Given I am user with an account, when I am on the Login page then I can use my details to log in.', async ({page}) =>{
        //Arrange: Create a new instance of the two pages needed in this test
        loginPage = new NotesLoginPage(page);
        homePage = new NotesHomePage(page);
        //Act: Enter same details as before 
        await loginPage.enterEmailAndPassword(newUser);
        //Assert: The email appears
        await expect(loginPage.emailField).toHaveValue(newUser.email);
        //Act: Submit details
        await loginPage.submitLoginCredentials();
        //Assert: The user is routed to the home page
        await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app');
        //Assert: The Logout button appears- indicating that the user is logged in
        await expect(homePage.logoutButton).toBeVisible();
    });
    test.afterAll(`Deleting account via the UI. NB: WOULD BE BETTER TO DO THIS WITH THE API IN FUTURE/TEST THE DELETION FUNCTIONALITY SEPERATELY`, async ({page})=>{
        await homePage.goToProfilePage();
        //Want the test hook to fail if the URL doesn't change 
        await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app/profile');
        //New instance of the profilePage object
        profilePage = new NotesProfilePage(page);
        //Deleting account
        await profilePage.deleteAccount();
        //Assert that URL changes
        await expect(page).toHaveURL('https://practice.expandtesting.com/notes/app/login');
        //Assert toast message
        await expect(loginPage.toastMessage).toBeVisible();
        await expect(loginPage.toastMessage).toHaveText(loginPage.toastMessages[0])

    }); */
});