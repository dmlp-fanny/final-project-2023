import { useReducer, useState } from 'react'
import reducer from './userDashboard/Context/reducer'
import state from './userDashboard/Context/state'
// import './App.css'

function App() {
  
  const [ context, dispatch ] = useReducer(reducer, state)
  return (
    <>
     <h1>hello</h1>
    </>
  )
}

export default App
