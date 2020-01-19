import React from 'react'
import { Router } from '@reach/router'

import Context from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Detail } from './pages/Detail'
import { Home } from './pages/Home'
import { Favs } from './pages/Favs'
import { User } from './pages/User'
import { Signup } from './pages/Signup'
import { Signin } from './pages/Signin'
import { NavBar } from './components/NavBar'

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
      </Router>
      <Context.Consumer>
        {({ isAuth }) => {
          return isAuth ? (
            <Router>
              <Favs path="/favs" />
              <User path="/user" />
            </Router>
          ) : (
            <Router>
              <Signup path="/favs" />
              <Signup path="/user" />
              <Signin path="/signin" />
            </Router>
          )
        }}
      </Context.Consumer>
      <NavBar />
    </>
  )
}
