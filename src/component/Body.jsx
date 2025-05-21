import React from 'react';



const Body = (props) => {
    return (
        <div>
            <button onClick={props.childToParent}>Click Me</button>
        </div>
    );
};

export default Body;