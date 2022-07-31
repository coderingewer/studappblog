import React from 'react'
import ChoiceEditor from '../posts/ChoiceEditor'
import Dashboard from './Dashboard'
import Explore from './Explore'
import "./style.css"

function ExplorePage() {
  return (
    <div>

      <Dashboard />
      <div className='explore-page'>
        <Explore />
        <ChoiceEditor />
      </div>
    </div>
  )
}

export default ExplorePage