import React from 'react';

const Signup = () => {
  return (
    <form className='signup'>
    <h1>Motii</h1>
    <fieldset className='border'>
      <legend>Sign Up</legend>
      <label for='email'>Email</label><br />
      <input type='text' name='email' /><br />
      <label for='password'>Password</label><br />
      <input type='password' name='password' /><br />
      <input type='submit' value='Sign Up' />
   </fieldset>
  </form>
  );
};

export default Signup;
