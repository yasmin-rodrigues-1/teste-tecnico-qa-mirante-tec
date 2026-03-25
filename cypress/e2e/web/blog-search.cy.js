describe('Busca no Blog do Agi', () => {
  const URL_BLOG = 'https://blog.agibank.com.br/'
  const CAMPO_BUSCA = '[name="s"]'
  const BOTAO_BUSCA = 'span.ast-icon span.ast-inline-flex'
  const LOGO_HOME = '#ast-desktop-header img.custom-logo'
  const LINK_RESULTADO_OPEN_FINANCE = '#post-22810 a[rel="bookmark"]'

  beforeEach(() => {
    cy.viewport(1280, 720)
    cy.visit(URL_BLOG)
    cy.wait(2000)
  })

  function abrirBusca() {
    cy.get('body').then(($body) => {
      if ($body.find(`${CAMPO_BUSCA}:visible`).length > 0) {
        return
      }

      cy.get(BOTAO_BUSCA)
        .first()
        .click({ force: true })
    })

    cy.wait(1500)

    cy.get(CAMPO_BUSCA, { timeout: 20000 })
      .filter(':visible')
      .first()
      .should('be.visible')
  }

  function realizarBusca(termo) {
    abrirBusca()

    cy.get(CAMPO_BUSCA)
      .filter(':visible')
      .first()
      .clear()
      .wait(1000)
      .type(`${termo}{enter}`, { delay: 200 })

    cy.wait(2000)
  }

  it('CT001 - Validar busca de um termo válido', () => {
    realizarBusca('Open Finance')

    cy.get(LINK_RESULTADO_OPEN_FINANCE).click()
    cy.wait(2000)

    cy.get(LOGO_HOME).click()
    cy.wait(2000)
  })

  it('CT002 - Validar busca de um termo inexistente', () => {
    realizarBusca('Mirante Tec')
  })

  it('CT003 - Validar busca sem informar termo', () => {
    realizarBusca('')
  })

  it('CT004 - Validar busca com caracteres numéricos', () => {
    realizarBusca('2026')
  })
})