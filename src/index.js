import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from 'apollo-boost'
import { ApolloProvider } from '@apollo/react-hooks'

import Context from './Context'
import { App } from './App'

const container = document.getElementById('app')

const client = new ApolloClient({
  uri: 'https://instapet-api.rubbenpad2.now.sh/graphql'
})

ReactDOM.render(
  <Context.Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Context.Provider>,
  container
)
