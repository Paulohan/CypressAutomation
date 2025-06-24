describe('My Fourth Test Suite', function() {
    it('My Fourth Test Case', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()

        //Window:alert is triggered whenever a window is opened on a page. cy.on is used to trigger this event for validation manually
        cy.on('window:alert', (str) =>
        {
            //how to compare strings in Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) =>
            {
                //how to compare strings in Mocha
                expect(str).to.equal('Hello , Are you sure you want to confirm?')
            })

        

    })
})

//https://rahulshettyacademy.com/seleniumPractise/#/