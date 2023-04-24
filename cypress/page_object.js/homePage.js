/// <reference types="Cypress" />

class HomePage {

    get postInput() {
        return cy.get('input[name="Post content"]').first();
    }

    get postBtn() {
        return cy.get(".btn-primary").first();
    }

    get removePostBtn() {
        return cy.get(".fw-500").eq(4);
    }

    get editPostBtn() {
        return cy.get(".fw-500").eq(3);
    }

    get editPostInput() {
        return cy.get('input[name="Post content"]').eq(1);
    }

    get updateBtn() {
        return cy.get(".btn-primary").eq(1);
    }

    editPost(editPostInputText) {
        this.editPostBtn.click();
        this.editPostInput.type(editPostInputText);
        this.updateBtn.click();
    }

    createPost(postInputText) {
        this.postInput.type(postInputText);
        this.postBtn.click();
    }

    get commentInput() {
        return cy.get('input[name="Post content"]').eq(1);
    }

    get editCommentInput() {
        return cy.get(".input-group").eq(1);
    }

    get commentBtn() {
        return cy.get(".btn-primary").eq(1);
    }

    get removeCommentBtn() {
        return cy.get(".mt-3").eq(1);
    }

    get editCommentBtn() {
        return cy.get(".mt-3").first();
    }

    createComment(commentInputText) {
        this.commentInput.type(commentInputText);
        this.commentBtn.click();
    }

    editComment(EditCommentInputText) {
        this.editCommentBtn.click();
        this.editCommentInput.type(EditCommentInputText);
        this.commentBtn.click();
    }

    get userProfile() {
        return cy.get(".icon-user");
    }

}

export const homePage = new HomePage