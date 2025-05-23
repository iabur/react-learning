import { Dropdown } from 'bootstrap';
import React, { useState } from 'react';


const App = () => {

  const [person, setPerson] = useState({
    fName: '',
    lName: '',
    city: '',
    gender: 'male',
  })

  const setValue = (field, value) => {
    setPerson(prev => ({...prev, [field]: value}))
  } 

  const handleSubmit = (e) => {
    e.preventDefault()
    alert(JSON.stringify(person))
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <input type='text' value={person.fName} onChange={e => setValue('fName', e.target.value)} />
      <input type='text' value={person.lName} onChange={e => setValue('lName', e.target.value)} />
      <select value={person.city} onChange={e => setValue('city', e.target.value)}>
        <option value="new-york">New York</option>
        <option value="los-angeles">Los Angeles</option>
        <option value="chicago">Chicago</option>
        <option value="houston">Houston</option>
        <option value="miami">Miami</option>
        <option value="san-francisco">San Francisco</option>
      </select>
      <input type='radio' name='gender' value="male" checked={person.gender === 'male'} onChange={e => setValue('gender', e.target.value)} /> Male
      <input type='radio' name='gender' value="female" checked={person.gender === 'female'} onChange={e => setValue('gender', e.target.value)} /> Female 
      <input type='radio' name='gender' value="other" checked={person.gender === 'other'} onChange={e => setValue('gender', e.target.value)} /> Other
      <button>Submit</button>
      </form>
    </div>
  );
};

export default App;