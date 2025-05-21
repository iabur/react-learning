import React from 'react';

const Body = (props) => {
    return (
        <div>
            <h1>{props.content}</h1>
            <h1>{props.form}</h1>
        </div>
    );
};

export default Body;