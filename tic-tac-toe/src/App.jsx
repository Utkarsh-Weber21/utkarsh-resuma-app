import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Square(value){

  const value = []

  function handleClick(){
    alert (value)
  }
  return <button onClick={handleClick} className='squares'></button>

}

function Board(){
  return(
    <>

      <div className='board-row'>
        <Square/>
        <Square/>
        <Square/>
      </div>
      <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
      </div>
      <div className='board-row'>
      <Square/>
      <Square/>
      <Square/>
      </div>

    </>
  )
}

function App() {
  const [count, setCount] = useState(0)

  return( 
    <div className='heading'>
      <h1>tic tac toe</h1>
      <Board/>
    </div>
  )
}

export default App
