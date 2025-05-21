import React from 'react';

const FormData = () => {
    return (
        <div>
            <h1>I am a form data component</h1>
            <form>
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default FormData;