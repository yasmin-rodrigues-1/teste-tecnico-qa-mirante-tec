describe('Dog API', () => {
  const BASE_URL = 'https://dog.ceo/api'

  it('CT001 - Validar que é possível listar todas as raças disponíveis', () => {
    cy.request('GET', `${BASE_URL}/breeds/list/all`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.an('object')
      expect(response.body.message).to.have.property('affenpinscher')
    })
  })

  it('CT002 - Validar que é possível buscar imagens de uma raça válida', () => {
    const breed = 'hound'

    cy.request('GET', `${BASE_URL}/breed/${breed}/images`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.an('array')
      expect(response.body.message.length).to.be.greaterThan(0)
    })
  })

  it('CT003 - Validar que é possível buscar imagens de uma raça inválida', () => {
    const breed = 'qa123'

    cy.request({
      method: 'GET',
      url: `${BASE_URL}/breed/${breed}/images`,
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(404)
      expect(response.body.status).to.eq('error')
      expect(response.body.message).to.include('Breed not found')
    })
  })

  it('CT004 - Validar que é possível buscar uma imagem aleatória', () => {
    cy.request('GET', `${BASE_URL}/breeds/image/random`).then((response) => {
      expect(response.status).to.eq(200)
      expect(response.body.status).to.eq('success')
      expect(response.body.message).to.be.a('string')
      expect(response.body.message).to.match(/^https?:\/\/.+\.(jpg|jpeg|png)$/)
    })
  })
})