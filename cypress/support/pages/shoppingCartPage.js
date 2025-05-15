export class ShoppingCartPage {

    constructor() {
        this.showTotalPriceButton = 'Show total price'
        this.precioTotal = '#price'
    };

    devolverProductName(productName) {
        return cy.get(`[name="${productName}"]`);
    };

    devolverProductQuantity(productName) {
        return cy.get(`[name="${productName}"]`).siblings('[id="productAmount"]');
    };

    devolverProductUnitPrice(productName) {
        return cy.get(`[name="${productName}"]`).siblings('[id="unitPrice"]');
    };

    devolverProductTotalPrice(productName) {
        return cy.get(`[name="${productName}"]`).siblings('[id="totalPrice"]');
    };

    clickShowTotalPriceButton() {
        cy.contains('button', this.showTotalPriceButton).click();
    };

    devolverPrecioTotal() {
        return cy.get(this.precioTotal);
    }
};
