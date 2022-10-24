import React from 'react'
import { ScoreContextProvider } from '../Contexts/ScoreContext'
import { useContext } from 'react'

const Scoreboard = () => {

    const {score, plusScore, minusScore} = useContext(ScoreContextProvider)
  return (
    <div>
        <h1>Score Board</h1>
    <h2>Your Current Score is {score}</h2>
    <button onClick={plusScore}>+</button>
    <button onClick={minusScore}>-</button>
   
    </div>
  )
}

export default Scoreboard
