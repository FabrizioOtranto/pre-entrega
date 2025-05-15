export class ProductsPage {

    constructor() {
        this.shopingCartButton = '#goShoppingCart';
        this.closeModalButton = '#closeModal';
    };

    agregarProducto(producto) {
        cy.get(`[name="${producto}"]`).click();
        cy.get(this.closeModalButton).click();
    };

    clickShoppingCartButton() {
        cy.get(this.shopingCartButton).click();
    };
};