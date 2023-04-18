/// <reference types="cypress" />


describe('Login & Test sauce demo',() => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
            cy.title().should('eq', 'Swag Labs')
        
    })

    it('Should login to application with valid data', () =>{
        cy.fixture("user_sauce").then(user_sauce =>{
           const username = user_sauce.username
           const password = user_sauce.password
       
               cy.get('#user-name').clear()
               cy.get('#user-name').type(username)
       
                   cy.get('#password').clear()
                   cy.get('#password').type(password)
       
                        cy.get('#login-button').click()
       
                            //cy.get('#header_secondary_container')
                                //.should('eq', 'Products')
        })
        cy.get('.title').should('be.visible').and('contain.text', 'Products')      
        //cy.get('ul.nav-tabs').should('be.visible')
       });
    
    it('User can added product to cart',() => {
        cy.get('#add-to-cart-sauce-labs-backpack').click()
        cy.get('#add-to-cart-sauce-labs-bike-light').click()
        cy.get('.shopping_cart_badge')
            .should('be.visible').and('contain.text', '2')
        cy.get('.shopping_cart_link').click()

    })

    it('User can see cart and checkout', () => {
        //cy.visit('https://www.saucedemo.com/cart.html')
        //cy.get('.shopping_cart_link').click()
        cy.get('.title').should('be.visible').and('contain.text', 'Your Cart')
        cy.get('#checkout').click()
    })
    it('User input data', () =>{
        cy.get('#first-name').type("daffa")
        cy.get('#last-name').type("fatahillah")
        cy.get('#postal-code').type("1616")
        cy.get('#continue').click()
        cy.get('#finish').click()
        cy.get('#back-to-products').click()
    })
    it('User can logout', () =>{
        cy.get('#react-burger-menu-btn').click()
        cy.get('#logout_sidebar_link').click()
    })
})