import { AuthPage } from "../support/pages/authPage"
import { HomePage } from "../support/pages/homePage"
import { ProductsPage } from "../support/pages/productsPage"
import { ShoppingCartPage } from "../support/pages/shoppingCartPage"
describe('Pre entrega', () => {
  const authPage = new AuthPage();
  const homePage = new HomePage();
  const productsPage = new ProductsPage();
  const shoppingCartPage = new ShoppingCartPage();
  let data;
  before(() => {
    cy.fixture('1').then(datos => {
      data = datos;
    });
  });

  it('Deberia permitir al usuario agregar 2 productos al carrito de compras', () => {
    data.productos.producto1.precioTotal = data.productos.producto1.precio * data.productos.producto1.cantidad;
    data.productos.producto2.precioTotal = data.productos.producto2.precio * data.productos.producto2.cantidad;
    cy.visit('')
    authPage.clickIniciaSessionButton();
    authPage.escribirUsuario(Cypress.env('usuario'));
    authPage.escribirContraseña(Cypress.env('contraseña'));
    authPage.clickLoginButton();
    homePage.clickOnlineShopButton();
    productsPage.agregarProducto(data.productos.producto1.nombre);
    productsPage.agregarProducto(data.productos.producto2.nombre);
    productsPage.agregarProducto(data.productos.producto2.nombre);
    productsPage.clickShoppingCartButton();
    shoppingCartPage.devolverProductName(data.productos.producto1.nombre).should('have.text', data.productos.producto1.nombre);
    shoppingCartPage.devolverProductQuantity(data.productos.producto1.nombre).should('have.text', data.productos.producto1.cantidad);
    shoppingCartPage.devolverProductUnitPrice(data.productos.producto1.nombre).should('have.text', `$${data.productos.producto1.precio}`);
    shoppingCartPage.devolverProductTotalPrice(data.productos.producto1.nombre).should('have.text', `$${data.productos.producto1.precioTotal}`);
    shoppingCartPage.devolverProductName(data.productos.producto2.nombre).should('have.text', data.productos.producto2.nombre);
    shoppingCartPage.devolverProductQuantity(data.productos.producto2.nombre).should('have.text', data.productos.producto2.cantidad);
    shoppingCartPage.devolverProductUnitPrice(data.productos.producto2.nombre).should('have.text', `$${data.productos.producto2.precio}`);
    shoppingCartPage.devolverProductTotalPrice(data.productos.producto2.nombre).should('have.text', `$${data.productos.producto2.precioTotal}`);
    shoppingCartPage.clickShowTotalPriceButton();
    shoppingCartPage.devolverPrecioTotal().should('have.text', `${data.productos.producto1.precioTotal + data.productos.producto2.precioTotal}`);
  });
});