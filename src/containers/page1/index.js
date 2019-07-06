
import React, { Component } from 'react'
import { inject, observer } from "mobx-react"
import { Link } from 'react-router-dom'

@inject("rootStore")
@observer
export default class  extends Component {
  constructor(props){
    super(props)
    this.store = this.props.rootStore
  }
  
  render(){
    return(
      <div> 
        Page1 
        <Link to={{ pathname: '/page2' }}>Go Page2</Link>
      </div>
    )
 }
}