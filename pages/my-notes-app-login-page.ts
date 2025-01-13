import {type Locator, type Page } from '@playwright/test';
import { UserDetails } from '../helper classes/UserDetails';
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
    }
    async enterEmailAndPassword(userDetails: UserDetails): Promise<void>{
        await this.emailField.fill(userDetails.email);
        await this.passwordField.fill(userDetails.password);
    }
    async submitLoginCredentials(): Promise<void>{
        await this.confirmEmailPasswordButton.click()
    }
}