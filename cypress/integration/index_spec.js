context('index', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('Access Top Page', () => {
    cy.get('h1').contains('ARMS Randomizer')
    cy.get('body').should('have.css', 'background-color').and('eq', 'rgb(255, 255, 62)')
  });

  it('Click Randomize Arms then show arms', () => {
    cy.get('.arms-button').click()
    cy.get('.uk-card-title')
  })
})
