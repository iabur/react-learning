import React, { useState } from 'react';


const App = () => {
  const [list, setList] = useState([]);
  const [item, setItem] = useState('');

  const handleClick = () => {
    list.push(item);
    setList([...list]);
  }


  const handleDelete = (index) => {
    list.splice(index, 1);
    setList([...list]);
  }


  return (
    <div>
       <input type='text' value={item} onChange={e => setItem(e.target.value)} />
       <button onClick={handleClick} className='btn btn-primary'>Add</button>
       
       <table>
        <tbody>
          {list.length > 0 ? (
            list.map((item, index) => (
              <tr key={index }>
                <td>{item}</td>
                <td>
                  <button className='btn btn-danger' onClick={() => handleDelete(index)}>Delete</button>
                </td>
              </tr>
            
            ))
          ) : (
            <tr>
              <td colSpan={2}>No data</td>
            </tr>
          )}
        </tbody>
       </table>
    </div>
  );
};

export default App;