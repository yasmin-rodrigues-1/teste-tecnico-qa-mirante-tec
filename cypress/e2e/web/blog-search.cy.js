describe('Busca no Blog do Agi', () => {
  it('deve exibir resultados ao pesquisar um termo válido', () => {
    const termo = 'pix'

    cy.visit('https://blogdoagi.com.br/')

    cy.get('input[name="s"], input[type="search"]')
      .first()
      .should('be.visible')
      .type(`${termo}{enter}`)

    cy.url().should('include', termo)
    cy.contains(new RegExp(termo, 'i')).should('exist')
  })
})