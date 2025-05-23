import React from 'react';
import Menu from '../component/Menu';

const HomePage = () => {
  return (
    <div className="container">
        <Menu />
        <div className="row">
            <div className="column">
                <h1>Welcome</h1>
                <h2>Your Digital Hub</h2>
                <p>Discover amazing content and connect with our community.</p>
                <button className="button button-outline">Get Started</button>
            </div>
        </div>
    </div>
  );
};

export default HomePage;

