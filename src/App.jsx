import { Dropdown } from 'bootstrap';
import React, { useEffect, useState } from 'react';


const App = () => {

  useEffect(() => {
    console.log('Mounting')
  }, [])

  return (
    <div>
      <h1>Hello World</h1>
    </div>

  );
};

export default App;