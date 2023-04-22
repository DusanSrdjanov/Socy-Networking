/// <reference types="Cypress" />

class RegisterPage {

    get registerLink() {
        return cy.get(".fw-700").eq(3);
    }

    get registerPageInterface() {
        return cy.get("#app");
    }

    get firstNameInput() {
        return cy.get('input[name="First name"]');
    }

    get lastNameInput() {
        return cy.get('input[name="Last name"]');
    }

    get displayNameInput() {
        return cy.get('input[name="Display name"]');
    }

    get usernameInput() {
        return cy.get('input[name="Username"]');
    }

    get passwordInput() {
        return cy.get('input[name="Password"]');
    }

    get createAccountBtn() {
        return cy.get(".btn-primary");
    }

    register(firstName, lastName, displayName, username, password) {
        this.firstNameInput.type(firstName);
        this.lastNameInput.type(lastName);
        this.displayNameInput.type(displayName);
        this.usernameInput.type(username);
        this.passwordInput.type(password);
        this.createAccountBtn.click();
    }
}

export const registerPage = new RegisterPage