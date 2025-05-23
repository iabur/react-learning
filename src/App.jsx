import React, { useRef } from 'react';


const App = () => {
  let data = useRef(null);
  let h1Ref = useRef(null);

  const getData = async () => {
    let response = await fetch('https://jsonplaceholder.typicode.com/posts');
    data = await response.json();
  }

  const showData = () => {
    h1Ref.current.innerHTML = JSON.stringify(data);
  }

  return (
    <div>
       <button onClick={getData} className='btn btn-primary'>Get Data</button>
       <button onClick={showData} className='btn btn-success'>Show Data</button>
       <h1 ref={h1Ref}></h1>
    </div>
  );
};

export default App;