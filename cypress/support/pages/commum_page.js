/// <reference types="cypress" />

export default {
    acessarCadastrousuario() {
        cy.visit('/')
            .get('#top_header')
        
        cy.get('.fa-lock')
            .click()
    }

}