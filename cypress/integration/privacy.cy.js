//times serve para rodar o teste N vezes repetidamente, garante que o teste não gera erro
Cypress._.times(5, function() {
    it('testa a página da política de privacidade de forma independente', function() {
        cy.visit('./src/privacy.html')
        cy.contains('Talking About Testing').should('be.visible')
    })
})
    