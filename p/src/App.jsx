import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
      let [counter,setcounter] = useState(0);

      console.log({counter,setcounter});

      function handleClick(){
        setcounter(counter + 1)
      }

      function decClick(){
        setcounter(counter-1)
      }

      console.log('App Component render');
      return(
        <div>
          <h1>Counter : {counter}</h1>
          <button onClick={handleClick}>Increment</button>
          <button onClick={decClick}>Decrement</button>
        </div>
      );
}
export default App
