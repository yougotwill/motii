import React from 'react';

const Signup = () => {
  return (
    <div className='signup'>
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
