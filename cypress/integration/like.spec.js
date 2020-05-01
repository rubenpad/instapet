'use strict'

describe('Like tests', () => {
  let random = null
  before(() => {
    random = Math.floor(Math.random() * 10)
    cy.fixture('user').as('userData')
    cy.window().then((window) => window.sessionStorage.removeItem('token'))
    cy.visit('/user/login')
    cy.wait(3000)

    cy.get('@userData').then((userData) => {
      cy.registerUser(`${random}${userData.email}`, userData.password)
    })
  })

  it('Should likes the first photo', () => {
    cy.get(':nth-child(1) > .styles__Button-fyxsdb-0').click()
  })
})
