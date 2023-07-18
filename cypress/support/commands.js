Cypress.Commands.add('fillMandatoryFieldsandSubmit', function() {
    cy.get('#firstName').type('Tainah')
    cy.get('#lastName').type('Regueira')
    cy.get('#email').type('tainahmr@gmail.com')
    cy.get('#open-text-area').type('exercicio 3')
    cy.get('button[type="submit"]').click()
    
})