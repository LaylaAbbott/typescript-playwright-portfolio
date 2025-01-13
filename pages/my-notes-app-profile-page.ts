import {  type Locator, type Page } from '@playwright/test';

export class NotesProfilePage{
    page: Page;
    //Titles/things that indicate the page is as expected
    accountDetailsButton: Locator;
    changePasswordButton: Locator;
    //Button Locators
    deleteAccountButton:Locator;
    confirmDeleteAccountButton: Locator;
    //Field Locators
    constructor(page: Page){
        this.page=page;
        this.accountDetailsButton=page.locator('[data-testid="register-email"]');
        this.changePasswordButton=page.locator('[data-testid="account-details"]');
        this.deleteAccountButton=page.locator('[data-testid="delete-account"]');
        this.confirmDeleteAccountButton=page.locator('[data-testid="note-delete-confirm"]');
    }
    async deleteAccount(): Promise<void>{
        await this.deleteAccountButton.click();
        await this.confirmDeleteAccountButton.click();
    }
}