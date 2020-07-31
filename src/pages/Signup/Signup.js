import React from 'react';

import Header from '../../components/Header/Header.js';

const Signup = () => {
  return (
    <div className='signup'>
      <Header />
      <form>
        <fieldset className='border'>
          <legend>Sign Up</legend>
          <label htmlFor='email'>Email</label><br />
          <input type='text' name='email' /><br />
          <label htmlFor='password'>Password</label><br />
          <input type='password' name='password' /><br />
          <input type='submit' value='Sign Up' />
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
