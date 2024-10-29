
import React, { useState } from "react";
import './../styles/App.css';

const App = () => {
  const [first, setfirst] = useState(0);
  return (
    <div>
        {/* Do not remove the main div */}
        <button onClick = {() =>{
          setfirst(first + 1);
        }}>Click Me</button>
        <p>Button click {first} times</p>
    </div>
  )
}

export default App
