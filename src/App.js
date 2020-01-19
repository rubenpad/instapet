import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'
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
  const { isAuth } = useContext(Context)

  return (
    <>
      <GlobalStyle />
      <Logo />
      <Router>
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <Signup path="/user/signup" />}
        {!isAuth && <Signin path="/user/signin" />}
        {!isAuth && <Redirect noThrow from="/user" to="/user/signup" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/user/signup" />}
        {isAuth && <Redirect noThrow from="/user/signup" to="/user" />}
        {isAuth && <Redirect noThrow from="/user/signin" to="/user" />}
        {isAuth && <User path="/user" />}
        {isAuth && <Favs path="/favs" />}
      </Router>
      <NavBar />
    </>
  )
}
