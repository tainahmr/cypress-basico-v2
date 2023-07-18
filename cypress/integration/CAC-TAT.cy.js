/*<reference types="Cypress" />*/

describe('Central de Atendimento ao Cliente TAT', function() {
    beforeEach(function(){
        cy.visit('./src/index.html')
    })
    it('verifica o título da aplicação', function() {
        
        cy.title().should('be.equal', 'Central de Atendimento ao Cliente TAT')
  
    })
    it('preenche os campos obrigatórios e envia o formulário', function(){
        const longText = 'curso cypress exercicio 2 - Teste, teste, teste, teste, teste, teste, teste, teste time alterado'
        cy.get('#firstName').type('Tainah')
        cy.get('#lastName').type('Regueira')
        cy.get('#email').type('tainahmr@gmail.com', {delay : 0})
        cy.get('#open-text-area').type(longText, {delay : 0})
        cy.contains('button', 'Enviar').click()

        cy.get('.success').should('be.visible')
    })
    it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida', function() {
        cy.get('#firstName').type('Tainah')
        cy.get('#lastName').type('Regueira')
        cy.get('#email').type('tainahmrgmail')
        cy.get('#open-text-area').type('exercicio 3')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })
    it('o campo de telefone só aceita números', function() {
        cy.get('#phone').type('qwertyuiopasdfghj').should('have.value', '')
    })
    it('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', function() {
        cy.get('#firstName').type('Tainah')
        cy.get('#lastName').type('Regueira')
        cy.get('#email').type('tainahmr@gmail.com')
        cy.get('#phone-checkbox').click()
        cy.get('#open-text-area').type('exercicio 4')
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('preenche e limpa os campos nome, sobrenome, email e telefone', function() {
        cy.get('#firstName').type('Tainah').should('have.value', 'Tainah').clear().should('have.value', '')
        cy.get('#lastName').type('Regueira').should('have.value', 'Regueira').clear().should('have.value', '')
        cy.get('#email').type('tainahmr@gmail.com').should('have.value', 'tainahmr@gmail.com').clear().should('have.value', '')
        cy.get('#phone').type('996331621').should('have.value', '996331621').clear().should('have.value', '')

    })

    it('exibe mensagem de erro ao submeter o formulário sem preencher os campos obrigatórios', function() {
        
        cy.contains('button', 'Enviar').click()
        cy.get('.error').should('be.visible')
    })

    it('envia o formuário com sucesso usando um comando customizado', function() {
        cy.fillMandatoryFieldsandSubmit()

        cy.get('.success').should('be.visible')
    })

  })