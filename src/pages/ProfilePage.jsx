import React from 'react';
import Menu from '../component/Menu';
import { useParams } from 'react-router-dom';
const ProfilePage = () => {
 const {id, name} = useParams();
  return (
    <div>
        <Menu />
      <h1>Profile Page</h1>
      <p>This is your profile page.</p>
      <p>ID: {id}</p>
      <p>Name: {name}</p>
    </div>
  );
};

export default ProfilePage;
