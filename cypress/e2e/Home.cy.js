/// <reference types="Cypress" />

import { loginPage } from "../page_object.js/loginPage";
import { faker } from "@faker-js/faker";
import { homePage } from "../page_object.js/homePage";

const credentials = {
    validUser: "Dida",
    validPassword: "duleduledule991",
    postContent: faker.random.word(),
    editPostContent: faker.random.words(2),
    commentContent: faker.random.word(),
    editCommentContent: faker.random.words(2)
}

describe("Posts and comments test", () => {
    beforeEach("Visit app and sign in", () => {
        cy.visit("/");
        cy.url().should("include", "/sign-in");
        
        loginPage.login(credentials.validUser, credentials.validPassword);
    })

    it("Create a post test", () => {
        homePage.createPost(credentials.postContent);
    }) 

    it("Create and remove post test", () => {
        homePage.createPost(credentials.postContent);
        cy.wait(2000);
        homePage.removePostBtn.click();
    }) 

    it("Create a comment test", () => {
        homePage.createPost(credentials.postContent);
        cy.wait(2000);
        homePage.createComment(credentials.commentContent);
    }) 

    it("Create and remove comment test", () => {
        homePage.createPost(credentials.postContent);
        cy.wait(2000);
        homePage.createComment(credentials.commentContent);
        cy.wait(2000);
        homePage.removeCommentBtn.click();
    }) 

    it("Create and edit post test", () => {
        homePage.createPost(credentials.postContent);
        cy.wait(2000);
        homePage.editPost(credentials.editPostContent);
    }) 

    it("Create and edit comment test", () => {
        homePage.createPost(credentials.postContent);
        cy.wait(2000);
        homePage.createComment(credentials.commentContent);
        cy.wait(2000);
        homePage.editComment(credentials.editCommentContent);
    }) 

});