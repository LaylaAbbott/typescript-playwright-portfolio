import {type Locator, type Page } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { UserDetails } from '../helper classes/UserDetails';
export class NotesRegisterPage{
    page: Page;
    //Titles/things that indicate the page is as expected
    registerPageTitle: Locator;
    //Button Locators
    completeRegistrationButton: Locator;
    //Field Locators
    emailField: Locator;
    nameField:Locator;
    passwordField: Locator; 
    confirmPasswordField: Locator; //Needs the exact same input as the line above

    constructor(page: Page){
        this.page = page;
        this.registerPageTitle = page.getByRole('heading', { name: 'Register' });
        //In the order they are used
        this.emailField = page.locator('[data-testid="register-email"]');
        this.nameField = page.locator('[data-testid="register-name"]');
        this.passwordField = page.locator('input[data-testid="register-password"][type="password"]');        this.confirmPasswordField = page.locator('[data-testid="register-confirm-password"]');
        this.completeRegistrationButton = page.locator('[data-testid="register-submit"]');
    }
    async enterEmail(userDetails: UserDetails): Promise<void>{
        await this.emailField.fill(userDetails.email);
    }
    async enterName(userDetails: UserDetails): Promise<void>{
        await this.nameField.fill(userDetails.name);
    }
    async enterPasswordAndConfirmPassword(userDetails: UserDetails): Promise<void>{
        await this.passwordField.fill(userDetails.password);
        await this.confirmPasswordField.fill(userDetails.password);
    }
    async enterAllDetails(userDetails: UserDetails): Promise<void>{
        await this.enterEmail(userDetails);
        await this.enterName(userDetails);
        await this.enterPasswordAndConfirmPassword(userDetails);
    }
    async completeRegistration(): Promise<void>{
        await this.completeRegistrationButton.click();    
    }
}