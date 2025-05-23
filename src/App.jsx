import React, { useRef } from 'react';


const App = () => {
  let h1Ref = useRef(null);
  
  const handleClick = () => {
    h1Ref.current.classList.remove('text-danger');
    h1Ref.current.classList.add('text-success');
  }
  return (
    <div>
       <h1 ref={h1Ref} className='text-danger'>Hello World</h1>
       <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;