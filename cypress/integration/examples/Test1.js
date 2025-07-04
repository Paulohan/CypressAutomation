describe('My First Test Suite', function() {
    it('My First Test Case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        //cy.wait(2000)
        cy.get('.product:visible').should('have.length', 4)
        //Parent child chaining
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 4)

        cy.get(':nth-child(3) > .product-action > button').click()

        cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click().then(function(){
            console.log('sf')
        })

        cy.get('@productLocator').find('.product').each(($el, index, $list) =>
        {
           const textVeg=$el.find('h4.product-name').text()
           if(textVeg.includes('Cashews')){
            cy.wrap($el).find('button').click()
           }
        })
        //assert if logo text is correctly displayed
        cy.get('.brand').should('have.text', 'GREENKART')

        //prints in the logs
        cy.get('.brand').then(function(logoelement){
            cy.log(logoelement.text())
        })
        cy.get('.cart-icon').click()
        cy.get('.action-block').contains('PROCEED TO CHECKOUT').click()
        cy.get('button').contains('Place Order').click()
    })
})

//https://rahulshettyacademy.com/seleniumPractise/#/