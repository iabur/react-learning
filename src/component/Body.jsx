import React from 'react';

const LoginStatus = (status) => {
    if (status) {
        return <button>Logout</button>
    } else {
        return <button>Login</button>
    }
}

const Body = () => {

    return (
        <div>
            {LoginStatus(false)}
            <LoginStatus status={true} />
        </div>
    );
};

export default Body;