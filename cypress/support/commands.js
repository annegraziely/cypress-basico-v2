Cypress.Commands.add('fillMandatoryFieldsAndSubmit',function(){
    cy.get('#firstName').type('Anne Graziely')
    cy.get('#lastName').type('da Luz')
    cy.get('#email').type('anne.graziely@gmail.com')
    cy.get('#open-text-area').type('Teste')
    cy.get('button[type="submit"]').click()
})