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

    it("Login without username test", () => {
        loginPage.login(credentials.invalidUser, credentials.validPassword);
    })

    it("Login without password test", () => {
        loginPage.login(credentials.validUser, credentials.invalidPassword);
    })

    it("Login with wrong username test", () => {
        loginPage.login(credentials.wrongUser, credentials.validPassword);
    })

    it("Login with wrong password test", () => {
        loginPage.login(credentials.validUser, credentials.wrongPassword);
    })

    it("Login with valid credentials test", () => {
        loginPage.login(credentials.validUser, credentials.validPassword);
    })

    it("Login and logout with valid credentials test", () => {
        loginPage.login(credentials.validUser, credentials.validPassword);
        loginPage.logoutBtn.click();
    })
});