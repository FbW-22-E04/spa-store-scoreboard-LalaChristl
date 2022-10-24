// import React, { useContext } from 'react'
import {useState, createContext} from 'react'

export const ScoreContextProvider = createContext();

const ScoreContext = ({children}) => {

    const[score, setScore] = useState(0);

    const plusScore = () => {

        setScore((prevState) => prevState + 10)
    
      }
      const minusScore = () => {

        setScore((prevState) => prevState - 10)
    
      }

  return <ScoreContextProvider.Provider value ={{score, setScore, plusScore, minusScore}}>
    {children}
  </ScoreContextProvider.Provider>


}

export default ScoreContext

