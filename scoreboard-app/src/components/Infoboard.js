import React, { useContext } from 'react'
import { ScoreContextProvider } from '../Contexts/ScoreContext'

const Infoboard = () => {

    const {score} = useContext(ScoreContextProvider)


        if (score < 100) {
            return <h3>"Let's make it over 100!"</h3>
        }
        else {
            return <h3>Good job!</h3>
        }
      
  
  
}

export default Infoboard
