import React from 'react'
import ChoiceEditor from '../posts/ChoiceEditor'
import Explore from './Explore'
import "./style.css"

function ExplorePage() {
  return (
    <div className='explore-page'>
        <Explore/>
        <ChoiceEditor/>
    </div>
  )
}

export default ExplorePage