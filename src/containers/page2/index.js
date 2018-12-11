
import React, { Component } from 'react'

export default class  extends Component {
  constructor(props){
    super(props)
  }

  componentDidMount() {
    console.log(2)
  }

  render(){
    return(
      <div>
        I am page2。
      </div>
    )
 }
}