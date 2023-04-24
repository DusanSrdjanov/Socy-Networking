/// <reference types="Cypress"/>

class LoginPage {

    get loginPageInterface() {
        return cy.get("#app");
    }

    get usernameInput() {
        return cy.get('input[type="text"]').first();
    }

    get passwordInput() {
        return cy.get('input[type="password"]').last();
    }

    get submitBtn() {
        return cy.get(".btn-primary").first();
    }

    get logoutBtn() {
        return cy.get(".icon-logout");
    }

    login(username, password) {
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.submitBtn.click();
    }
}

export const loginPage = new LoginPage();

