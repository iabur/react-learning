import React from 'react';


const App = () => {
  let nameRef, ageRef;
  const handleClick = () => {
    alert(`Name: ${nameRef.value}, Age: ${ageRef.value}`);
  }
  return (
    <div>
       <input ref={(el) => nameRef = el} placeholder='Enter your name' type="text" />
       <input ref={(el) => ageRef = el} placeholder='Enter your age' type="text" />
       <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;