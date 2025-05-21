import React from 'react';

const Body = () => {
    const citys = ["Delhi", "Mumbai", "Chennai", "Kolkata", "Bangalore"];
    return (
        <div>
            <ol>
                {
                    citys.map((city, index) => {
                        return <li key= {index}>{city}</li>
                    })
                }
            </ol>
        </div>
    );
};

export default Body;