import React from 'react'
import { ScoreContextProvider } from '../Contexts/ScoreContext'
import { useContext } from 'react'

const Scoreboard = () => {

    const {score, plusScore, minusScore} = useContext(ScoreContextProvider)
  return (
    <div className='container'>
        <div className='inner'>
            <h1>Score Board</h1>
        <h2>Your Current Score is {score}</h2>
        <button className='plus' onClick={plusScore}>+</button>
        <button className='minus' onClick={minusScore}>-</button>
        </div>
    </div>
  )
}

export default Scoreboard
