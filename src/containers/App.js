
import React, { Component } from 'react'
import { inject, observer } from "mobx-react";
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';
import DevTools from 'mobx-react-devtools';
import { Loader } from 'components';
import style from './style.less'

@withRouter
@inject("store")
@observer
export default class  extends Component {
  constructor(props){
    super(props)
    this.store = this.props.store
  }

  onClick = () => {
    this.store.onChange("1233")
  }

  render(){
    const { text } = this.store.app
    return(
      <div className={style.container}>
        <DevTools />
        Hello World1!
        <span>{text}</span>
        <input type="text" value={text} onChange={this.store.app.onChange} />
        <div>
          <Link to={{pathname:'/page1'}}>Page1</Link>
        </div>
        <div>
          <Link to={{pathname:'/page2'}}>Page2</Link>
        </div>
        <Switch>
          <Route 
            exact 
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
      </div>
    )
 }
}