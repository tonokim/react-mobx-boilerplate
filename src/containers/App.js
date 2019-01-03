
import React, { Component } from 'react'
import { hot, setConfig } from 'react-hot-loader'
import { inject, observer } from "mobx-react";
import { Switch, Route, Link, Redirect, withRouter } from 'react-router-dom'
import Loadable from 'react-loadable';
import DevTools from 'mobx-react-devtools';
import { Loader } from 'components';
import style from './style.less'

@withRouter
@inject("store")
@observer
class App extends Component {
  constructor(props){
    super(props)
    this.store = this.props.store
  }

  componentDidMount() {
    // setInterval(()=>{
    //   this.store.app.onChangeText(this.store.app.text+1)
    // },3000)
  }

  onClick = () => {
    this.store.app.onChange("123")
  }

  render(){
    const { text } = this.store.app
    return(
      <div className={style.container}>
        <DevTools />
        Hello World!
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



const Element1 = ({ children }) => <div>Block2 {children}</div>

const Element2 = () => (
  <div>
    Block2 
    <div>12</div>
  </div>
)

// const App = () => (
//   <h1>
//     Hello, mobx1<br />
//     {/*<Element1 />
//     <Element2 /> */}
//   </h1>
// )

setConfig({ logLevel: 'debug' })

export default hot(module)(App)