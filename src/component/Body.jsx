import React from 'react';

const action = false;

const Body = () => {
    return (
        <div>
            {action && <button>Login</button>}
            {!action && <button>Logout</button>}
        </div>
    );
};

export default Body;