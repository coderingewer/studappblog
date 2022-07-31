import React from 'react'
import "./style.css"
import logo from "./studappblog.svg"
import Navi from '../bars/Navi'
import ButtomNav from '../bars/ButtomNav'

function Dashboard() {
  return (
    <div className='studapp-blog' >
        <h1 className='slogan' >Bilgiyle Kal</h1>
        <p className='abstract' >Keşfetmeye yenililikler görmeye var mısın?</p>
      <Navi />
      <ButtomNav />
    </div>
  )
}

export default Dashboard