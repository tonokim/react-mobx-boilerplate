
import React from 'react'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "mobx-react"
import { hot } from 'react-hot-loader'
import Layout from './layout'
import { rehydrate, hotRehydrate } from "rfx-core"
import { isProduction } from "utils"

import '../stores';

const store = rehydrate();

const App = () => (
  <Provider store={isProduction ? store : hotRehydrate()}>
    <Router>
      <Layout />
    </Router>
  </Provider>
)

export default hot(module)(App)