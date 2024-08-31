import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar/Navbar'
import ShoeName from './ShoeName/ShoeName'
import WelcomeMessage from './welcomeMessage/WelcomeeMessage.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar/>
      <ShoeName/>
      <p>Initial value of count is : {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>

      <WelcomeMessage/>
    </>

  )
}

export default App
