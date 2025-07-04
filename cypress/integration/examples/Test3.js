describe('My Third Test Suite', function() {
    it('My Third Test Case', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');

        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')
        cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2', 'option3'])

        //Static Dropdown
        cy.get('select').select('option2').should('have.value', 'option2')

        //Dynamic Dropdown
        cy.get('#autocomplete').type('Ind')

        cy.get('.ui-menu-item div').each(($el, index, $list) =>
        {
            if($el.text()=== "India"){
                $el.click()
            }
        })

        //autocomplete validation
        cy.get('#autocomplete').should('have.value', 'India')

        //Visible and invisible elements
        cy.get('#displayed-text').should('be.visible')
        cy.get('#hide-textbox').click()
        cy.get('#displayed-text').should('not.be.visible')
        cy.get('#show-textbox').click()

        //radio buttons
        cy.get('[value="radio2"]').check().should('be.checked')
    })
})

//https://rahulshettyacademy.com/seleniumPractise/#/