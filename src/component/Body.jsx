import React from 'react';

const action = true;

const Body = () => {
     switch (action) {
        case true:
            return <button>Logout</button>
        case false:
            return <button>Login</button>
        default:
            return <button>Login</button>
     }
};

export default Body;