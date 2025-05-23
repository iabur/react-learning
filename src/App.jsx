import React, { useRef } from 'react';


const App = () => {
  let number = useRef(0);

  const handleClick = () => {
    number.current++;
    console.log(number.current);
  }
  return (
    <div>
       <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;