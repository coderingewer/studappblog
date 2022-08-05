import React from 'react'
import "./style.css"
import logo from "./studappblog.svg"
import Navi from '../bars/Navi'
import ButtomNav from '../bars/ButtomNav'

function Dashboard(props) {
  return (
    <div className='studapp-blog' >
        <h1 className='slogan' >{props.text}</h1>
        <p className='abstract' >{props.abstract}</p>
      <Navi />
    </div>
  )
}

export default Dashboard