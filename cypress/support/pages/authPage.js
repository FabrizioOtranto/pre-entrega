export class AuthPage {
    constructor() {

        this.iniciaSessionButton = '#registertoggle';
        this.usuarioInput = '#user';
        this.contraseñaInput = '#pass';
        this.loginButton = '#submitForm';
    };

    clickIniciaSessionButton() {
        cy.get(this.iniciaSessionButton).dblclick();
    };

    escribirUsuario(usuario) {
        cy.get(this.usuarioInput).type(usuario);
    };

    escribirContraseña(contrasena) {
        cy.get(this.contraseñaInput).type(contrasena);
    };

    clickLoginButton() {
        cy.get(this.loginButton).click();
    };
}