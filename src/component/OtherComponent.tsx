import React from 'react'
import { useCounterStore } from '../Store';

const OtherComponent = () => {
  const count = useCounterStore((state) => state.count);
  const increment = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrementAsync);
  
  return (
    <div className='container'>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default OtherComponent;