import React, { useRef } from 'react';


const App = () => {
  let imgRef = useRef(null);
  const handleClick = () => {
    imgRef.current.setAttribute("height", "1000px");
    imgRef.current.setAttribute("width", "1000px");
  }
  return (
    <div>
      <img ref={imgRef} src="https://placehold.co/600x400" alt="placeholder" />
       <button onClick={handleClick}>Click Me</button>
    </div>
  );
};

export default App;