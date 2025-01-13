import {  type Locator, type Page } from '@playwright/test';

export class NotesHomePage{
    page: Page;
    //Titles/things that indicate the page is as expected
    logoutButton: Locator;
    //Button Locators
    profileButton: Locator;
    //Field Locators
    constructor(page: Page){
        this.page = page;
        this.logoutButton= page.locator('[data-testid="logout"]');
        this.profileButton= page.locator('[data-testid="profile"]');
    }
    async goToProfilePage(): Promise<void>{
        await this.profileButton.click();
    }
};
