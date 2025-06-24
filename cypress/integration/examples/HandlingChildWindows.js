describe('Handling Child Windows', () => {
    it('Should handle child window', () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        //Using invoke to remove an HTML attribute. In this case the target:_blank that opens a new window/tab
        cy.get('#opentab').invoke('removeAttr', 'target').click()
        //cy.get('#opentab').click()

        //cy.origin is used to run tests on a new page
        cy.origin("https://www.qaclickacademy.com", () => {
            cy.get('#navbarSupportedContent a[href="about.html"]').click()
            cy.get('.mt-50 h2').should('have.text', 'Welcome to QAClick Academy ')
        })
        
    })
})