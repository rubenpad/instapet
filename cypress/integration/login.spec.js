'use strict'

describe('Login', () => {
  beforeEach(() => {
    cy.window().then((window) => window.sessionStorage.removeItem('token'))
  })

  it('Should shows the register form for no logged users', () => {
    cy.visit('/favs')
    cy.get('form').should('have.length', 1)
  })

  it('Should register a new user', () => {
    cy.visit('/user/signup')
    cy.get('[name="email"]').type('test@mail.test')
    cy.get('[name="password"]').type('testpassword')
    cy.contains('button', 'Register').click()
    cy.wait(5000)
    cy.get('span').should('not.exist')
  })

  it('Should fail with a not registered user', () => {
    cy.visit('/user/login')
    cy.get('[name="email"]').type('testing@mail.test')
    cy.get('[name="password"]').type('testpassword')
    cy.contains('button', 'Log in').click()
    cy.wait(5000)
    cy.get('span').should('be.visible')
  })

  it('Should login a registered user', () => {
    cy.visit('/user/login')
    cy.get('[name="email"]').type('test@mail.test')
    cy.get('[name="password"]').type('testpassword')
    cy.contains('button', 'Log in').click()
    cy.wait(3000)
  })
})
