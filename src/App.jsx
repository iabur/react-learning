import React, { useRef } from 'react';


const App = () => {
  let h1Ref = useRef(null);
  const handleClick = () => {
    h1Ref.style.color = "red";
  }
  return (
    <div>
      <h1 ref={(p) => h1Ref = p}>Hello World</h1>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;