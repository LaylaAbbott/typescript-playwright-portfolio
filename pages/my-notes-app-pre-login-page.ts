import {  type Locator, type Page } from '@playwright/test';
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
    }
    async goToLandingPageAndNavigateToCreateAccountPage(): Promise<void>{
        //Go to page
        await this.page.goto('/');
        //Click button to be taken to login page
        await this.createAccountButton.click();
    } 
    async goToLandingPageAndNavigateToLoginPage(): Promise<void>{
        //Go to page
        await this.page.goto('/');
        //Click button to be taken to login page
        await this.goToLoginPageButton.click();
    } 
}