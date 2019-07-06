
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default function Page2(){
  return (
    <div>
      Page2
      <Link to={{ pathname: '/page1' }}>Go Page1</Link>
    </div>
  )
}