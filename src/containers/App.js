
import React, { Component } from 'react'

import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';
import { Loader } from '@/components';

@withRouter
class App extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <Switch>
        <Route 
          exact
          path="/" 
          component={Loadable({
            loader: () => import('./page1'),
            loading: Loader
          })}
        />
        <Route 
          path="/page1" 
          component={Loadable({
            loader: () => import('./page1'),
            loading: Loader
          })}
        />
        <Route 
          path="/page2" 
          component={Loadable({
            loader: () => import('./page2'),
            loading: Loader
          })}
        />
      </Switch>
    )
 }
}

// setConfig({ logLevel: 'debug' })

export default App