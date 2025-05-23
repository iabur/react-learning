import React, { useState } from 'react';


const App = () => {
  const [number, setNumber] = useState(0);
 
  const handleClick = () => {
    setNumber(number + 1);
  }
  
  return (
    <div>
       <h1>Number: {number}</h1>
       <button onClick={handleClick} className='btn btn-primary'>Click Me</button>
    </div>
  );
};

export default App;