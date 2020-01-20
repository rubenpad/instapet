import React, { useContext, Suspense } from 'react'
import { Router, Redirect } from '@reach/router'

import { Context } from './Context'
import { GlobalStyle } from './styles/GlobalStyles'
import { Logo } from './components/Logo'
import { Home } from './pages/Home'
import { NavBar } from './components/NavBar'
import { Loader } from './components/Loader'

const Detail = React.lazy(() => import('./pages/Detail'))
const Favs = React.lazy(() => import('./pages/Favs'))
const User = React.lazy(() => import('./pages/User'))
const Signup = React.lazy(() => import('./pages/Signup'))
const Login = React.lazy(() => import('./pages/Login'))
const NotFound = React.lazy(() => import('./pages/NotFound'))

export const App = () => {
  const { isAuth } = useContext(Context)

  return (
    <Suspense fallback={<Loader />}>
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
    </Suspense>
  )
}
