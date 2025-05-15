export class HomePage {
    constructor() {
        this.onlineShopButton = '#onlineshoplink';
    };

    clickOnlineShopButton() {
        cy.get(this.onlineShopButton, {timeout: 20000}).click();
    };
};