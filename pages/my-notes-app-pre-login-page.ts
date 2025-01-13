import {  type Locator, type Page } from '@playwright/test';
export class NotesPreLoginPage{
    page: Page;
    //Titles/things that indicate the page is as expected
    preLoginPageTitle: Locator;
    //Button Locators
    goToLoginPageButton: Locator;
    createAccountButton: Locator;
    constructor(page: Page){
        this.page = page;
        this.preLoginPageTitle = page.getByRole('heading', { name: 'Welcome to Notes App' });
        this.goToLoginPageButton = page.getByTestId('open-login-view');
        this.createAccountButton = page.getByTestId('open-register-view');
    }
    async goToPreLoginPageAndNavigateToCreateAccountPage(): Promise<void>{
        //Go to page
        await this.page.goto('/');
        //Click button to be taken to login page
        await this.createAccountButton.click();
    } 
    async goToPreLoginPageAndNavigateToLoginPage(): Promise<void>{
        //Go to page
        await this.page.goto('/');
        //Click button to be taken to login page
        await this.goToLoginPageButton.click();
    } 
}