describe('My Second Test Suite', function() {
    it('My Second Test Case', function() {
        cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/');
        cy.get('.search-keyword').type('ca')
        //Parent child chaining
        cy.get('.products').as('productLocator')
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
        cy.contains('Place Order').click()
    })
})

//https://rahulshettyacademy.com/seleniumPractise/#/