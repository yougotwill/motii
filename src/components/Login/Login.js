import React from 'react';

const Login = () => {
  return (
    <form class='login'>
      <fieldset>
        <legend>Login</legend>
        <label for='email'>Email</label><br />
        <input type='text' name='email' /><br />
        <label for='password'>Password</label><br />
        <input type='password' name='password' /><br />
        <input type='submit' value='Login' />
     </fieldset>
    </form>
  );
};

export default Login;
