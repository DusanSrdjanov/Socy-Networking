/// <reference types="Cypress" />

import { registerPage } from "../page_object.js/registerPage";
import { faker } from "@faker-js/faker";


describe("Registration test", () => {
    let userData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        displayName: faker.random.word(),
        username: faker.random.word(),
        password: `${faker.lorem.word(8)}1`,
        blankspace: "{backspace}",
    };

    beforeEach("Visit app and click registration link", () => {
        cy.visit("/");
        registerPage.registerLink.click();
        cy.url().should("contain", "/register");

        registerPage.registerPageInterface
            .should("be.visible");
    });

    it("Register without first name test", () => {
        registerPage.register(
            userData.blankspace,
            userData.lastName,
            userData.displayName,
            userData.username,
            userData.password
        );
    })

    it("Register without last name test", () => {
        registerPage.register(
            userData.firstName,
            userData.blankspace,
            userData.displayName,
            userData.username,
            userData.password
        );
    })

    it("Register without display name test", () => {
        registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.blankspace,
            userData.username,
            userData.password
        );
    })

    it("Register without username test", () => {
        registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.displayName,
            userData.blankspace,
            userData.password
        );
    })

    it("Register without password test", () => {
        registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.displayName,
            userData.username,
            userData.blankspace
        );
    })

    it("Register with valid data test", () => {
        registerPage.register(
            userData.firstName,
            userData.lastName,
            userData.displayName,
            userData.username,
            userData.password
        );
    })
})