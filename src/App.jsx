import React from 'react';
import Body from './component/Body';

const person = {
  name: "iabur",
  age: 30,
  city: "Dhaka"
}
const App = () => {
  return (
    <div>
      <Body item={person}/>
    </div>
  );
};

export default App;