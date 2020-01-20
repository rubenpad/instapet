import React, { useContext } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'

import Detail from './pages/Detail'
import Favs from './pages/Favs'
import User from './pages/User'
import Signup from './pages/Signup'
import Login from './pages/Login'
import NotFound from './pages/NotFound'

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <div>
      <GlobalStyle />
      <Logo />
      <Router>
        <NotFound default />
        <Home path="/" />
        <Home path="/pet/:id" />
        <Detail path="/detail/:detailId" />
        {!isAuth && <Signup path="/user/signup" />}
        {!isAuth && <Login path="/user/login" />}
        {!isAuth && <Redirect noThrow from="/user" to="/user/signup" />}
        {!isAuth && <Redirect noThrow from="/favs" to="/user/signup" />}
        {isAuth && <Redirect noThrow from="/user/signup" to="/" />}
        {isAuth && <Redirect noThrow from="/user/login" to="/" />}
        {isAuth && <User path="/user" />}
        {isAuth && <Favs path="/favs" />}
      </Router>
      <NavBar />
    </div>
  )
}
