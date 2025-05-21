import React from 'react';
import Body from './component/Body';

const ButtonClick = () => {
  alert("Button clicked");
}

const App = () => {
  return (
    <div>
      <Body childToParent={ButtonClick}/>
    </div>
  );
};

export default App;