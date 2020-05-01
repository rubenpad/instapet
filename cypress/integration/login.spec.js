'use strict'

describe('Login', () => {
  let random = null

  before(() => {
    random = Math.floor(Math.random() * 10)
  })

  beforeEach(() => {
    cy.fixture('user').as('userData')
    cy.window().then((window) => window.sessionStorage.removeItem('token'))
    cy.visit('/user/login')
  })

  it('Should register a new user', () => {
    cy.get('@userData').then((userData) => {
      cy.registerUser(`${random}${userData.email}`, userData.password)
    })
  })

  it('Should fail with a not registered user', () => {
    cy.loginUser('test@mail.com', 'admin')
    cy.get('span').should('be.visible')
  })

  it('Should login a registered user', () => {
    cy.get('@userData').then((userData) => {
      cy.loginUser(`${random}${userData.email}`, userData.password)
      cy.get('span').should('not.exist')
    })
  })
})
