import React from 'react';

const Register = () => {
  return (
    <form class='register'>
    <fieldset>
      <legend>Register</legend>
      <label for='email'>Email</label><br />
      <input type='text' name='email' /><br />
      <label for='password'>Password</label><br />
      <input type='password' name='password' /><br />
      <input type='submit' value='Register' />
   </fieldset>
  </form>
  );
};

export default Register;
