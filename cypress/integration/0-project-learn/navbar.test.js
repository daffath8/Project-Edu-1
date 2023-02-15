/// <reference types="cypress" />

describe('Navbar Test', () =>{

before(() =>{
    //visit link
    cy.visit('http://zero.webappsecurity.com/index.html')
        cy.url().should('include', 'index.html')
})

it('Should display online banking account', () =>{
    cy.get("#onlineBankingMenu").click()
        cy.url()
            .should('include', 'online-banking.html')
                cy.get('h1').should('be.visible')
})

it('Should display feedback content', () =>{
    cy.get('#feedback').click()
        cy.url()
            .should('include', 'feedback.html')
                cy.get('#feedback-title')
                    .should('contain.text', 'Feedback')

})

it('Should display homepage content', () =>{
    cy.contains('Zero Bank').click()
        cy.url()
            .should('include', 'index.html')
                cy.get('h4')
                    .should('contain.text', 'Online Banking')
})

});