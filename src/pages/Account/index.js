import React from 'react';
import { useAuth } from '../../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Account  = () => {
  const { currentUser } = useAuth();

  return (
    <div className='account border'>
      <div className='panel'>
        <h2>Account</h2>
        <div className='detail'>
          <h3>Email:</h3>
          <span>{currentUser.email}</span>
        </div>
        <Link to='/update'><button>Update Account</button></Link>         
      </div>
    </div>
  );
};

export default Account;
