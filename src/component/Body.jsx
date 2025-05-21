import React from 'react';

const Body = () => {
    var markes = 100;
    return (
        <div>

            {
                (
                    () => {
                        if (markes > 50) {
                            return <h1>You are passed</h1>
                        } else {
                            return <h1>You are failed </h1>
                        }
                    }
                )  ()
            }
        </div>
    );
};

export default Body;