/// <reference types="Cypress"/>

import { loginPage } from "../page_object.js/loginPage";
import { faker } from "@faker-js/faker";

const credentials = {
    validUser: "Dida",
    validPassword: "duleduledule991",
    invalidUser: "{backspace}",
    invalidPassword: "{backspace}",
    wrongUser: faker.lorem.word(8),
    wrongPassword: faker.lorem.word(8),
};

describe("Login test", () => {
    beforeEach("Visit site", () => {
        cy.visit("/");
        cy.url().should("include", "/sign-in");

        loginPage.loginPageInterface
            .should("be.visible"); 
    })

    it("Login without username", () => {
        loginPage.login(credentials.invalidUser, credentials.validPassword);
    })

    it("Login without password", () => {
        loginPage.login(credentials.validUser, credentials.invalidPassword);
    })

    it("Login with wrong username", () => {
        loginPage.login(credentials.wrongUser, credentials.validPassword);
    })

    it("Login with wrong password", () => {
        loginPage.login(credentials.validUser, credentials.wrongPassword);
    })

    it("Login with valid credentials", () => {
        loginPage.login(credentials.validUser, credentials.validPassword);
    })
});