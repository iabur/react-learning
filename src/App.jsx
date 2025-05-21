import React from 'react';
import Body from './component/Body';
function ClickMe() {
  alert("Button clicked");
}

const App = () => {
  return (
    <div>
      <button onClick={ClickMe}>Click Me</button>
    </div>
  );
};

export default App;