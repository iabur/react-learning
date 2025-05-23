import React, { useState } from 'react';


const App = () => {
  const [person, setPerson] = useState({
    name: 'Iabur',
    age: 30
  });
 
  const handleClick = () => {
    setPerson(previousPerson => ({
        ...previousPerson,
        age: previousPerson.age + 1
    }))
  }

  return (
    <div>
       <h1>Name: {person.name}</h1>
       <h1>Age: {person.age}</h1>
       <button onClick={handleClick} className='btn btn-primary'>Click Me</button>
    </div>
  );
};

export default App;