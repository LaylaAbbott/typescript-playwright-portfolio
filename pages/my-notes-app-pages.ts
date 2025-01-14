import {  type Locator, type Page } from '@playwright/test';
import { UserDetails } from '../helper classes/UserDetails';

export class NotesLandingPage{
    page: Page;
    //Titles/things that indicate the page is as expected
    landingPageTitle: Locator;
    //Button Locators
    goToLoginPageButton: Locator;
    createAccountButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.landingPageTitle = page.getByRole('heading', { name: 'Welcome to Notes App' });
        this.goToLoginPageButton =page.locator('[data-testid="open-login-view"]');
        this.createAccountButton = page.locator('[data-testid="open-register-view"]');
    };
    async goToLandingPageAndNavigateToCreateAccountPage(): Promise<void>{
        //Go to page
        await this.page.goto('/');
        //Click button to be taken to login page
        await this.createAccountButton.click();
    };
    async goToLandingPageAndNavigateToLoginPage(): Promise<void>{
        //Go to page
        await this.page.goto('/');
        //Click button to be taken to login page
        await this.goToLoginPageButton.click();
    }; 
};
export class NotesRegisterPage{
    page: Page;
    //Titles/things that indicate the page is as expected
    registerPageTitle: Locator;
    //Button Locators
    completeRegistrationButton: Locator;
    loginButton: Locator;
    //Field Locators
    emailField: Locator;
    nameField:Locator;
    passwordField: Locator; 
    confirmPasswordField: Locator; //Needs the exact same input as the line above
    //Toasts
    toastMessage: Locator;
    toastMessages: string[]=['User account created successfullyClick here to Log In']
    constructor(page: Page){
        this.page = page;
        this.registerPageTitle = page.getByRole('heading', { name: 'Register' });
        //In the order they are used
        this.emailField = page.locator('[data-testid="register-email"]');
        this.nameField = page.locator('[data-testid="register-name"]');
        this.passwordField = page.locator('input[data-testid="register-password"][type="password"]');        
        this.confirmPasswordField = page.locator('[data-testid="register-confirm-password"]');
        this.completeRegistrationButton = page.locator('[data-testid="register-submit"]');
        this.loginButton = page.locator('[data-testid="login-view"]');
        this.toastMessage = page.locator('.alert.alert-success');
    };
    async enterEmail(userDetails: UserDetails): Promise<void>{
        await this.emailField.fill(userDetails.email);
    };
    async enterName(userDetails: UserDetails): Promise<void>{
        await this.nameField.fill(userDetails.name);
    };
    async enterPasswordAndConfirmPassword(userDetails: UserDetails): Promise<void>{
        await this.passwordField.fill(userDetails.password);
        await this.confirmPasswordField.fill(userDetails.password);
    };
    async enterAllDetails(userDetails: UserDetails): Promise<void>{
        await this.enterEmail(userDetails);
        await this.enterName(userDetails);
        await this.enterPasswordAndConfirmPassword(userDetails);
    };
    async completeRegistration(): Promise<void>{
        await this.completeRegistrationButton.click();    
    };
    async loginFirstTime(): Promise<void>{
        await this.loginButton.click();
    };
};
export class NotesLoginPage{
    page: Page;
    //Titles/things that indicate the page is as expected
    loginPageTitle: Locator;
    //Button Locators
    confirmEmailPasswordButton: Locator;
    //Field Locators
    emailField: Locator;
    passwordField: Locator; 
    //Toasts
    toastMessage: Locator;
    toastMessages: string[]=['Your account has been deleted. You should create a new account to continue.']
    constructor(page: Page){
        this.page = page;
        this.loginPageTitle = page.getByRole('heading', { name: 'Login' });
        this.confirmEmailPasswordButton = page.locator('[data-testid="login-submit"]');
        this.emailField = page.locator('[data-testid="login-email"]');
        this.passwordField=page.locator('input[data-testid="login-password"]');
        this.toastMessage=page.locator('[data-testid="alert-message"]');
    };
    async enterEmailAndPassword(userDetails: UserDetails): Promise<void>{
        await this.emailField.fill(userDetails.email);
        await this.passwordField.fill(userDetails.password);
    };
    async submitLoginCredentials(): Promise<void>{
        await this.confirmEmailPasswordButton.click()
    };
};
export class NotesHomePage{
    page: Page;
    //Titles/things that indicate the page is as expected
    logoutButton: Locator;
    //Button Locators
    profileButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.logoutButton= page.locator('[data-testid="logout"]');
        this.profileButton= page.locator('[data-testid="profile"]');
    };
    async goToProfilePage(): Promise<void>{
        await this.profileButton.click();
    };
};
export class NotesProfilePage{
    page: Page;
    //Titles/things that indicate the page is as expected
    accountDetailsButton: Locator;
    changePasswordButton: Locator;
    //Button Locators
    deleteAccountButton:Locator;
    confirmDeleteAccountButton: Locator;
    constructor(page: Page){
        this.page=page;
        this.accountDetailsButton=page.locator('[data-testid="register-email"]');
        this.changePasswordButton=page.locator('[data-testid="account-details"]');
        this.deleteAccountButton=page.locator('[data-testid="delete-account"]');
        this.confirmDeleteAccountButton=page.locator('[data-testid="note-delete-confirm"]');
    };
    async deleteAccount(): Promise<void>{
        await this.deleteAccountButton.click();
        await this.confirmDeleteAccountButton.click();
    };
};