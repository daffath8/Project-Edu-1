/// <reference types="cypress" />



describe('Search Box Test', function(){
    before(() =>{
        cy.visit('http://zero.webappsecurity.com/index.html')
    });
    it('Should type into searcbox and submit', ()=>{
        //To DO
        cy.get('#searchTerm').type('online {enter}')
    });
    it('Should show search result page', ()=>{
        //To Do
        cy.get('a[href="/online-banking.html"]')
        .should('have.text', 'Zero - Free Access to Online Banking')
        .and('have.prop', 'href', 'http://zero.webappsecurity.com/online-banking.html');

        cy.get('a[href="/bank/online-statements.html"]')
        .should('have.text', 'Zero - Online Statements')
        .and('have.prop', 'href', 'http://zero.webappsecurity.com/bank/online-statements.html');
    });
});