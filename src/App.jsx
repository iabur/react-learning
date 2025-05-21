import React from 'react';
import Body from './component/Body';


const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target.elements[0].value);
    console.log(e.target.elements[1].value);
    console.log(e.target.elements[2].value);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter your name" />
        <input type="email" placeholder="Enter your email" />
        <input type="password" placeholder="Enter your password" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;