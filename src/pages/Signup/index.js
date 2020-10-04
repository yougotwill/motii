import React from 'react';

const Signup = () => {
  return (
    <div className='signup'>
      <h2 className='banner'>Under construction! 🚧</h2>
      <form className='disabled'>
        <fieldset className='border'>
          <legend>Sign Up</legend>
          <div className='details'>
            <label htmlFor='email'>Email</label>
            <input type='text' name='email' />
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' />
            <input type='submit' value='Sign Up' />
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default Signup;
