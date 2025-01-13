import {type Locator, type Page } from '@playwright/test';
export class NotesLoginPage{
    page: Page;
    //Titles/things that indicate the page is as expected
    loginPageTitle: Locator;
    //Button Locators
    confirmEmailPasswordButton: Locator;
    //Field Locators
    emailField: Locator;
    passwordField: Locator; 
    constructor(page: Page){
        this.page = page;
        this.loginPageTitle = page.getByRole('heading', { name: 'Login' });
        this.confirmEmailPasswordButton = page.getByTestId('login-submit');
        this.emailField = page.getByTestId('login-email');
        this.passwordField=page.getByTestId('login-password');
    }
    async enterEmailAndPassword(userEmail: string, userPassword: string): Promise<void>{
        await this.emailField.fill(userEmail);
        await this.passwordField.fill(userPassword);
    }
    async submitLoginCredentials(): Promise<void>{
        await this.confirmEmailPasswordButton.click()
    }
}